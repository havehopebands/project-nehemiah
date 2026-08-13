/**
 * Project Nehemiah Safety Policy
 *
 * Translates a SafetyAssessment into a SafetyDecision.
 *
 * This module defines what the application permits.
 * It does not generate prayers or interact with AI models.
 */

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
  dangerType: SafetyAssessment["dangerType"];
  instructions: string[];
};

const SAFETY_POLICIES: Record<
  1 | 2,
  Omit<SafetyDecision, "instructions">
> = {
  1: {
    action: "ALLOW_PRAYER",
    prayerMode: "NORMAL",
    allowGeneration: true,
    dangerType: null,
  },

  2: {
    action: "ALLOW_PRAYER",
    prayerMode: "SENSITIVE",
    allowGeneration: true,
    dangerType: null,
  },

};

export function evaluateSafety(
  assessment: SafetyAssessment
): SafetyDecision {
  

  switch (assessment.level) {
    case 1:
      return {
        ...SAFETY_POLICIES[1],
        instructions: [
          "Prayer generation is permitted.",
          "Use a normal compassionate prayer style.",
          "Respond directly to the user's prayer concern.",
        ],
      };

    case 2:
      return {
        ...SAFETY_POLICIES[2],
        instructions: [
          "Prayer generation is permitted.",
          "Use a compassionate and sensitive tone.",
          "Respond directly to the user's concern without making assumptions about their emotions, motives, or circumstances.",
          "Do not shame, blame, diagnose, or intensify distress.",
          "Do not encourage anger, fear, guilt, shame, retaliation, or conflict.",
          "Do not make medical, psychological, or professional claims.",
          "Do not present uncertain outcomes as guarantees.",
          "When appropriate, emphasize wisdom, peace, understanding, comfort, strength, guidance, and support.",
          "Encourage appropriate human support when relevant.",
        ],
      };

    case 3:
      return {
        action: "BLOCK_PRAYER",
        prayerMode: "IMMEDIATE_DANGER",
        allowGeneration: false,
        dangerType: assessment.dangerType,
        instructions: [
          "Do not generate a normal prayer.",
          "Treat the situation as potentially immediate danger.",
          "Provide a safety-focused response instead.",
          "Encourage immediate real-world support.",
          "Encourage the user to reach out to someone they know and trust if it is safe to do so.",
          "Encourage the user to remain as calm and safe as possible while seeking help.",
          "Remind the user that God is with them and that they do not have to face this situation alone.",
          "Do not leave the user with prayer alone as the response.",
        ],
      };

    default:
      return {
        action: "BLOCK_PRAYER",
        prayerMode: "IMMEDIATE_DANGER",
        allowGeneration: false,
        dangerType: null,
        instructions: [
          "Do not generate a prayer.",
          "Use the safest available fallback response.",
        ],
      };
  }
}