import type { SafetyDecision } from "./policy";

export type PrayerInstructions = {
  systemInstruction: string;
};

export function buildPrayerInstructions(
  decision: SafetyDecision
): PrayerInstructions {
  if (!decision.allowGeneration) {
    return {
      systemInstruction: [
        "Do not generate a prayer.",
        "The user's request has been classified as an immediate safety concern.",
        "Return a safety-focused response instead of a normal prayer.",
        "Encourage the user to seek appropriate real-world support.",
      ].join(" "),
    };
  }

  if (decision.prayerMode === "SENSITIVE") {
    return {
      systemInstruction: [
        "Generate a compassionate and sensitive prayer.",
        "Respond directly to the user's concern.",
        "Do not shame, blame, diagnose, or intensify distress.",
        "Do not make medical, psychological, or professional claims.",
        "Do not present uncertain outcomes as guarantees.",
        "Encourage appropriate human support when relevant.",
      ].join(" "),
    };
  }

  return {
    systemInstruction: [
      "Generate a compassionate prayer.",
      "Respond directly to the user's prayer concern.",
      "Use a warm, respectful, and hopeful tone.",
    ].join(" "),
  };
}