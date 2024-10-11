export const OPERATION_UI_KEYS = {
  REVIEW: "reviewResume",
  ABOUT: "aboutResume",
  PERCENTAGE: "percentageMatch",
  IMPROVE: "improveResume",
  KEYWORDS: "missingKeywords",
  QUESTIONS: "interviewQuestions",
  EXPERIENCE: "domainExperience",
  SKILLS: "desiredSkills",
};

export const OPERATION_API_KEYS = {
  REVIEW: "reviewResume",
  ABOUT: "aboutResume",
  PERCENTAGE: "percentageMatch",
  IMPROVE: "improveResume",
  KEYWORDS: "missingKeywords",
  QUESTIONS: "interviewQuestions",
  EXPERIENCE: "domainExperience",
  SKILLS: "desiredSkills",
};

export const OPERATION_API_UI_KEYS = {
  [OPERATION_API_KEYS.REVIEW]: OPERATION_UI_KEYS.REVIEW,
  [OPERATION_API_KEYS.ABOUT]: OPERATION_UI_KEYS.REVIEW,
  [OPERATION_API_KEYS.PERCENTAGE]: OPERATION_UI_KEYS.REVIEW,
  [OPERATION_API_KEYS.IMPROVE]: OPERATION_UI_KEYS.REVIEW,
  [OPERATION_API_KEYS.KEYWORDS]: OPERATION_UI_KEYS.REVIEW,
  [OPERATION_API_KEYS.QUESTIONS]: OPERATION_UI_KEYS.REVIEW,
  [OPERATION_API_KEYS.EXPERIENCE]: OPERATION_UI_KEYS.REVIEW,
  [OPERATION_API_KEYS.SKILLS]: OPERATION_UI_KEYS.REVIEW,
};

export const INPUT_ACTION_TYPES = {
  TEXTAREA: "description",
  UPLOAD: "uploadedResume",
  SELECT: "selectedAI",
  CHECKBOX: "actions",
};
