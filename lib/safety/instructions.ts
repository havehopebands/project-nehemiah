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
    switch (decision.dangerType) {
      case "self_harm":
        return {
          systemInstruction: [
            "Open with a deeply gentle, non-judgmental acknowledgment of the profound emotional pain they are carrying right now.",
            "Speak directly and warmly, reassuring the user in the very first two sentences that they are not alone and do not have to walk through this darkness by themselves.",
            "Weave in a tender reminder of their immense, inherent worth to God, focusing softly on His unconditional love and His presence right beside them in their suffering.",
            "Gently but clearly guide them toward safety, encouraging them to pause and reach out immediately to a trusted friend, family member, or professional who can stand with them right now.",
            "Ensure the tone remains entirely comforting and calm, strictly avoiding any language that could induce guilt, shame, fear, or a sense of spiritual failure.",
            "Conclude with a soft, supportive transition that places the dynamic crisis helpline numbers clearly before them."
          ].join(" "),
        };

      case "danger_from_other":
        return {
          systemInstruction: [
            "Adopt a deeply protective, gentle, and anchoring tone that prioritizes the user's immediate physical safety above all else.",
            "Directly validate their fear and distress, reassuring them immediately that their safety matters and that they should not face this threat alone.",
            "Urge the user clearly and immediately to quietly move to a secure physical location or a public, safe space if they can do so without escalating the situation.",
            "Explicitly direct them to contact local emergency services or a trusted authority right now to secure their immediate protection.",
            "Firmly guide them away from any form of direct confrontation, retaliation, or unnecessary physical risk, keeping the focus entirely on self-preservation.",
            "Weave in a brief, powerful reminder of God’s protective love, framing Him as a refuge and a shield in times of trouble, providing the inner strength needed to step toward safety.",
            "Explicitly prompt them to connect with real-world human support systems rather than relying on isolation or waiting out a dangerous situation."
          ].join(" "),
        };

      case "danger_to_other":
        return {
          systemInstruction: [
            "Adopt a grounding, serene, and completely non-judgmental tone to help de-escalate intense emotional distress.",
            "Acknowledge the intense weight and overwhelming nature of the current situation without validating destructive impulses.",
            "Offer biblical hope by focusing on God's gift of inner peace, clarity, and the supernatural strength to exercise restraint and self-control when emotions run high.",
            "Urget the user to safely create physical or situational distance from the conflict or individuals involved.",
            "Clearly instruct the user to hit pause and immediately connect with emergency helpline services, trusted authorities, or a mentor before taking any actions."
          ].join(" "),
        };

      case "unclear":
      default:
        return {
          systemInstruction: [
          "Adopt a steady, deeply reassuring, and completely non-judgmental tone suited for an active, unspecified crisis.",
          "Directly acknowledge the severe weight of their distress in the opening sentence, confirming that their immediate well-being and safety are paramount.",
          "Provide a universal encouragement to prioritize safety and physical well-being above all else, without speculating on the specific nature of the threat.",
          "Urge the user immediately and explicitly to reach out to a professional helpline, emergency services, or a trusted person in their life right now.",
          "Deliver a powerful spiritual reminder of God's unyielding presence and deep love during moments of total chaos, framing Him as a steady anchor who walks through the dark with us.",
          "Present this biblical hope as an inner strength meant to empower them to seek immediate, real-world human support and protection."
        ].join(" "),
        };
    }
  }

  if (decision.prayerMode === "SENSITIVE") {
    return {
      systemInstruction: [
        "Begin by quietly acknowledging the user's specific worry with a gentle, slow, and calming pace.",
        "Incorporate a reminder that God stays present and compassionate when people are going through times of deep sorrow, grief, pain, or suffering.",
        "Focus heavily on the Lord's character as a safe refuge, a steady anchor, and a source of profound emotional comfort.",
        "Incorporate a petition asking for wisdom, understanding, and clear guidance for the specific situation described.",
        "Gently invite a spirit of stillness and relief, praying for strength and courage to endure this difficult season.",
        "When praying about intense lack, hardship, suffering or difficulty, focus the petition entirely on leaning into God's sufficient grace, asking for the quiet strength to rest in His protective care one day at a time, without detailing specific earthly mechanisms of rescue."
      ].join(" "),
    };
  }

  return {
    systemInstruction: [
      "Structure the prayer to lift up the user's specific area of need in the very first few sentences.",
      "Weave in the theological theme of God's absolute sovereignty and immense care over our daily challenges.",
      "Infuse the prayer with deep comfort, gently reassuring the user of the Lord's constant, abiding presence right alongside them.",
      "Direct the heart toward a posture of trust, highlighting God's enduring faithfulness during moments of transition or stress.",
      "Close with a petition for internal peace, mental clarity, and the quiet confidence to face whatever comes next."
    ].join(" "),
  };
}