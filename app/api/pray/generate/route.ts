/**
 * Prayer Generation API
 *
 * Orchestrates prayer generation.
 *
 * Responsibilities:
 * - Receive the user's request
 * - Build the final prompt
 * - Send the prompt to the Prayer Generator
 * - Return the generated prayer
 *
 * This route contains no safety policy or prompt engineering.
 */

import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

import { buildPrayerPrompt } from "@/lib/prayer/promptBuilder";
import { buildPrayerInstructions } from "@/lib/safety/instructions";
import { evaluateSafety } from "@/lib/safety/policy";
import type { SafetyAssessment } from "@/lib/safety/types";

    const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    });

        export async function POST(request: Request) {
            const { userRequest } = await request.json();

            const assessment: SafetyAssessment = {
                level: 2,
                subject: "another_person",
                situation: "Concern about ongoing conflict between parents.",
                timeContext: "current",
                currentDanger: false,
                confidence: "high",
                reason: "Temporary test assessment.",
            };

            const decision = evaluateSafety(assessment);

            const instructions = buildPrayerInstructions(decision);

            const prompt = buildPrayerPrompt({
                userRequest,
                instructions,
            });

            const interaction = await ai.interactions.create({
                model: "gemini-3.5-flash-lite",
                input: prompt,
                store: false,
            });

                if (!interaction.output_text) {
                throw new Error("Gemini did not return a prayer.");
            }

            return NextResponse.json({
                success: true,
                prayer: interaction.output_text,
        });
}

