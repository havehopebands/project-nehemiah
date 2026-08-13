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
import { assessSafety } from "@/lib/safety/assessor";
import { evaluateSafety } from "@/lib/safety/policy";
import { logSafetyAssessment } from "@/lib/safety/logger";

    const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    });

        export async function POST(request: Request) {
            try {
                const { userRequest } = await request.json();

                const assessment = await assessSafety(userRequest);

                const decision = evaluateSafety(assessment);

                await logSafetyAssessment(assessment, decision);

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
                    throw new Error("Gemini did not return a response.");
                }

                return NextResponse.json({
                    success: true,
                    response: interaction.output_text,
                });

                } catch (error) {
                    console.error("Prayer generation failed:", error);

                    return NextResponse.json(
                        {
                            success: false,
                            message:
                            "We're sorry, the system is currently busy. Please try again in a moment.",
                        },
                        {
                            status: 500,
                        }
                    );
                }
                

        
}

