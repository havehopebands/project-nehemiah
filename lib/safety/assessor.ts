import { GoogleGenAI } from "@google/genai";
import type { SafetyAssessment } from "./types";

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
    });

    const safetySchema = {
        type: "object",
        properties: {
            level: {
            type: "integer",
            enum: [1, 2, 3],
            },
            subject: {
            type: "string",
            enum: [
                "self",
                "another_person",
                "multiple_people",
                "unclear",
            ],
            },
            situation: {
            type: "string",
            },
            timeContext: {
            type: "string",
            enum: [
                "current",
                "recent",
                "historical",
                "unclear",
            ],
            },
            currentDanger: {
            type: "boolean",
            },
            dangerType: {
            anyOf: [
                {
                type: "string",
                enum: [
                    "self_harm",
                    "danger_from_other",
                    "danger_to_other",
                    "unclear",
                ],
                },
                {
                type: "null",
                },
            ],
            },
            confidence: {
            type: "string",
            enum: ["high", "medium", "low"],
            },
            reason: {
            type: "string",
            },
        },
        required: [
            "level",
            "subject",
            "situation",
            "timeContext",
            "currentDanger",
            "dangerType",
            "confidence",
            "reason",
            ],
    };

    const safetyPolicy = `
        You are the Safety Assessment system for Project Nehemiah.

        Your task is to assess the safety context of a user's prayer request.

        You are NOT writing a prayer.
        You are NOT providing advice.
        You are ONLY assessing the safety context.

        Classify the request into exactly one of these levels:

        LEVEL 1 — NORMAL
        The request contains no meaningful indication of a serious safety concern.

        LEVEL 2 — SENSITIVE
        The request describes a serious, emotionally vulnerable, traumatic,
        or potentially harmful situation, but there is no evidence of current
        or imminent danger.

        LEVEL 3 — IMMEDIATE DANGER
        The request indicates that the user or another person may currently
        be at serious or imminent risk of harm.

        Pay particular attention to:

        - Who the concern is about.
        - What situation is being described.
        - Whether the situation is current, recent, historical, or unclear.
        - Whether the user is describing an event, expressing feelings,
        expressing concern for another person, expressing intent,
        or describing an action already taken.
        - Whether there is evidence of current or imminent danger.

        When currentDanger is false, set dangerType to null.

        When currentDanger is true, determine the direction of the danger:

        - "self_harm" — the user may harm themselves, has harmed themselves,
        or expresses current or imminent intent to harm themselves.

        - "danger_from_other" — another person or persons may currently or imminently
        harm the user.

        - "danger_to_other" — the user may currently or imminently harm
        another person or persons.

        - "unclear" — Level 3 immediate danger is indicated, but the
        direction of the danger cannot be determined reliably.

        Do not infer a danger type that is not supported by the user's words.

        Do not classify based solely on individual keywords.
        Consider the meaning and context of the entire statement.

        Do not assign a danger type simply because the request contains
        distressing or emotional language.

        Return ONLY valid JSON using exactly this structure:

        {
        "level": 1 | 2 | 3,
        "subject": "self" | "another_person" | "multiple_people" | "unclear",
        "situation": "string",
        "timeContext": "current" | "recent" | "historical" | "unclear",
        "currentDanger": true | false,
        "dangerType": "self_harm" | "danger_from_other" | "danger_to_other" | "unclear" | null,
        "confidence": "high" | "medium" | "low",
        "reason": "brief explanation"
        }
        `;

        export async function assessSafety(
            userRequest: string
        ): Promise<SafetyAssessment> {
            const interaction = await ai.interactions.create({
                model: "gemini-3.5-flash-lite",
                input: userRequest,
                system_instruction: safetyPolicy,
                response_format: {
                type: "text",
                mime_type: "application/json",
                schema: safetySchema,
                },
                store: false,
            });

            if (!interaction.output_text) {
                throw new Error("Gemini returned no safety assessment.");
            }

            const assessment: SafetyAssessment = JSON.parse(
                interaction.output_text
            );

            return assessment;
        }
