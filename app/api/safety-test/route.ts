import { NextResponse } from "next/server";
import { evaluateSafety } from "@/lib/safety/policy";
import { buildPrayerInstructions } from "@/lib/safety/instructions";
import type { SafetyAssessment } from "@/lib/safety/types";

export async function GET() {
  const testAssessments: SafetyAssessment[] = [
    {
      level: 1,
      subject: "self",
      situation: "Feeling anxious about exams.",
      timeContext: "current",
      currentDanger: false,
      dangerType: "unclear",
      confidence: "high",
      reason: "Normal life stress with no indication of serious danger.",
    },
    {
      level: 2,
      subject: "self",
      situation: "Feeling hopeless and uncertain about life.",
      timeContext: "current",
      currentDanger: false,
      dangerType: "unclear",
      confidence: "high",
      reason: "Emotionally vulnerable situation without current danger.",
    },
    {
      level: 3,
      subject: "self",
      situation: "Thinking about suicide.",
      timeContext: "current",
      currentDanger: true,
      dangerType: "unclear",
      confidence: "high",
      reason: "Current suicidal ideation indicates a serious safety concern.",
    },
  ];

  const results = testAssessments.map((assessment) => {
    const decision = evaluateSafety(assessment);
    const instructions = buildPrayerInstructions(decision);

    return {
      assessment,
      decision,
      instructions,
    };
  });

  return NextResponse.json({
    success: true,
    results,
  });
}