/**
 * Project Nehemiah Prayer Instructions
 *
 * Translates a SafetyDecision into approved instructions
 * for the Prayer Generator.
 *
 * This module communicates the ministry's safety decisions
 * to the Prayer Generator.
 */


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
        "Do not generate a normal prayer.",
        "Treat this as a potential immediate safety situation.",
        "Generate a safety-focused response instead of a normal prayer.",
        "Clearly encourage the user to seek immediate real-world support.",
        "Encourage the user to reach out to someone they know and trust if it is safe to do so.",
        "Encourage the user to remain as calm and as safe as possible while seeking help.",
        "Offer biblical hope by reminding the user that God is with them and that they do not have to face this situation alone.",
        "Do not make medical, psychological, or professional claims.",
        "Do not minimize, dismiss, or debate the seriousness of the situation.",
        "Do not leave the user with spiritual encouragement alone. The response must include appropriate real-world safety guidance.",
        ].join (" "),
    };
  }

  if (decision.prayerMode === "SENSITIVE") {
    return {
      systemInstruction: [
        "Generate a compassionate, biblically faithful, and sensitive Christian prayer.",
        "Respond directly to what the user has shared.",
        "Base the prayer only on the information the user provided. Do not assume emotions, motives, relationships, or circumstances that were not expressed.",
        "Do not speculate about facts, intentions, or events that the user has not described.",
        "Do not assume that another person is acting with malicious intent unless the user explicitly states it.",
        "Do not shame, blame, diagnose, or intensify the user's distress.",
        "Do not reinforce anger, fear, guilt, shame, retaliation, or conflict.",
        "Do not make medical, psychological, or professional claims.",
        "Do not present uncertain outcomes as promises or guarantees from God.",
        "When appropriate, emphasize God's wisdom, peace, comfort, strength, guidance, hope, and loving presence.",
        "When appropriate, encourage healthy support from trusted people without replacing the prayer with advice.",
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