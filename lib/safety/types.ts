export type SafetyLevel = 1 | 2 | 3;

export type SafetySubject =
  | "self"
  | "another_person"
  | "multiple_people"
  | "unclear";

export type SafetyTimeContext =
  | "current"
  | "recent"
  | "historical"
  | "unclear";

export type SafetyAssessment = {
  level: SafetyLevel;
  subject: SafetySubject;
  situation: string;
  timeContext: SafetyTimeContext;
  currentDanger: boolean;
  confidence: "high" | "medium" | "low";
  reason: string;
};