import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { safetyTestCases } from "@/data/safetyTestCases";
import type { SafetyAssessment } from "@/lib/safety/types";
import { evaluateSafety } from "@/lib/safety/policy";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function GET() {
  
 

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

Do not classify based solely on individual keywords.
Consider the meaning and context of the entire statement.

Return ONLY valid JSON using exactly this structure:

{
  "level": 1 | 2 | 3,
  "subject": "self" | "another_person" | "multiple_people" | "unclear",
  "situation": "string",
  "timeContext": "current" | "recent" | "historical" | "unclear",
  "confidence": "high" | "medium" | "low",
  "currentDanger": true | false,
  "reason": "brief explanation"
}
`;

  try {

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
            "confidence",
            "reason",
        ],
    };

    
  const results = [];

    for (const testCase of safetyTestCases) {
        const interaction = await ai.interactions.create({
        model: "gemini-3.5-flash-lite",
        input: testCase.text,
        system_instruction: safetyPolicy,
        response_format: {
            type: "text",
            mime_type: "application/json",
            schema: safetySchema,
        },
        store: false,
        });

        if (!interaction.output_text) {
        throw new Error(`Gemini returned no assessment for test ${testCase.id}.`);
        }

        const assessment: SafetyAssessment = JSON.parse(
          interaction.output_text
        );

        const decision = evaluateSafety(assessment);

        
        

        results.push({
        id: testCase.id,
        text: testCase.text,
        
        assessment,
        decision,
        
        });
    }

    return NextResponse.json({
        success: true,
        totalTests: results.length,
        results,
    });

  } catch (error) {
    console.error("Gemini safety test error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}