import type { SafetyAssessment, SafetyLevel } from "./types";

export type SafetyAction =
  | "ALLOW_PRAYER"
  | "BLOCK_PRAYER";

export type PrayerMode =
  | "NORMAL"
  | "SENSITIVE"
  | "IMMEDIATE_DANGER";

export type SafetyDecision = {
  action: SafetyAction;
  prayerMode: PrayerMode;
  allowGeneration: boolean;
  instructions: string[];
};

const SAFETY_POLICIES: Record<
  SafetyLevel,
  Omit<SafetyDecision, "instructions">
> = {
  1: {
    action: "ALLOW_PRAYER",
    prayerMode: "NORMAL",
    allowGeneration: true,
  },

  2: {
    action: "ALLOW_PRAYER",
    prayerMode: "SENSITIVE",
    allowGeneration: true,
  },

  3: {
    action: "BLOCK_PRAYER",
    prayerMode: "IMMEDIATE_DANGER",
    allowGeneration: false,
  },
};

export function evaluateSafety(
  assessment: SafetyAssessment
): SafetyDecision {
  const policy = SAFETY_POLICIES[assessment.level];

  if (!policy) {
    return {
      action: "BLOCK_PRAYER",
      prayerMode: "IMMEDIATE_DANGER",
      allowGeneration: false,
      instructions: [
        "Do not generate a prayer.",
        "Use the safest available fallback response.",
      ],
    };
  }

  switch (assessment.level) {
    case 1:
      return {
        ...policy,
        instructions: [
          "Prayer generation is permitted.",
          "Use a normal compassionate prayer style.",
          "Respond directly to the user's prayer concern.",
        ],
      };

    case 2:
      return {
        ...policy,
        instructions: [
          "Prayer generation is permitted.",
          "Use a compassionate and sensitive tone.",
          "Do not shame, blame, diagnose, or intensify distress.",
          "Do not make medical, psychological, or professional claims.",
          "Do not present uncertain outcomes as guarantees.",
          "Encourage appropriate human support when relevant.",
        ],
      };

    case 3:
      return {
        ...policy,
        instructions: [
          "Do not generate a normal prayer.",
          "Treat the situation as potentially immediate danger.",
          "Provide a safety-focused response instead.",
          "Encourage immediate real-world support.",
          "Do not leave the user with prayer alone as the response.",
        ],
      };

    default:
      return {
        action: "BLOCK_PRAYER",
        prayerMode: "IMMEDIATE_DANGER",
        allowGeneration: false,
        instructions: [
          "Do not generate a prayer.",
          "Use the safest available fallback response.",
        ],
      };
  }
}