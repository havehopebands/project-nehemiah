import { supabase } from "@/lib/supabase/server";
import type { SafetyDecision } from "./policy";
import type { SafetyAssessment } from "./types";

export async function logSafetyAssessment(
    assessment: SafetyAssessment,
    decision: SafetyDecision
) {
    const { error } = await supabase
        .from("safety_test_logs")
        .insert({
            assessment_level: assessment.level,
            current_danger: assessment.currentDanger,
            danger_type: assessment.dangerType,
            assessment_reason: assessment.reason,
            action: decision.action,
            prayer_mode: decision.prayerMode,
            allow_generation: decision.allowGeneration,
        });

    if (error) {
        console.error("Failed to log safety test:", error);
    }
}