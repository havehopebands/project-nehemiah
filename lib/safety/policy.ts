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
          "Permit prayer generation.",
          "Enforce a natural, supportive prayer style.",
          "Address only the specific user concern provided.",
          "Do not assume, invent, or speculate about facts, intentions, or external circumstances unmentioned by the user.",
          "Do not make medical, clinical, or professional counseling claims.",
          "Do not present uncertain future earthly outcomes as promises or absolute guarantees from God."
        ],
      };

    case 2:
      return {
        ...SAFETY_POLICIES[2],
        instructions: [
          "Permit prayer generation.",
          "Address only the specific user concern provided.",
          "Do not assume, invent, or speculate about facts, intentions, background stories, or relationships unexpressed by the user.",
          "Do not attribute malicious intent, blame, or negative hidden motives to other people mentioned in the request.",
          "Do not make medical, clinical, psychological, or professional counseling claims.",
          "Do not present uncertain future earthly outcomes as promises or absolute guarantees from God.",
          "Do not validate, reinforce, or escalate destructive patterns of anger, retaliation, self-shame, or terminal guilt.",
          "Do not minimize, downplay, dismiss, or debate the severity of the user's expressed distress."
        ],
      };

    case 3:
      return {
        action: "BLOCK_PRAYER",
        prayerMode: "IMMEDIATE_DANGER",
        allowGeneration: false,
        dangerType: assessment.dangerType,
        instructions: [
          "Halt standard prayer generation completely.",
          "Enforce a crisis-response format focused entirely on personal safety and immediate support.",
          "Do not make medical, psychiatric, or professional therapeutic claims.",
          "Do not minimize, debate, or downplay the severity of the user's distress.",
          "Do not use spiritual encouragement or prayer as a standalone response.",
          "Require the inclusion of actionable, real-world crisis resources (e.g., helplines)."
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