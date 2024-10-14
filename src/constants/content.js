import { OPERATION_UI_KEYS } from "./constants";

const {
  REVIEW,
  ABOUT,
  PERCENTAGE,
  IMPROVE,
  KEYWORDS,
  QUESTIONS,
  EXPERIENCE,
  SKILLS,
} = OPERATION_UI_KEYS;

export const CONTENT = {
  serverError: "Server error, please try again later.",
  sparkHub: {
    operations: {
      logoSuffix: "R",
      logo: "Spark",
      textarea: {
        placeholder: "Enter job decsription",
        error: "Job description is required.",
      },
      upload: {
        drag: "Drag & drop your resume here or ",
        browse: "browse",
        error: "Resume is required.",
      },
      select: {
        options: {
          default: "Choose a service",
          option1: "GeminiAI",
          option2: "OpenAI",
        },
        error: "Please choose a service.",
      },
      actions: {
        header: "Select Actions",
        error: "Please select at least one action.",
        items: {
          [REVIEW]: "Overall Assessment",
          [ABOUT]: "About Resume",
          [PERCENTAGE]: "Percentage Match",
          [IMPROVE]: "Improve Resume",
          [KEYWORDS]: "Missing Keywords",
          [QUESTIONS]: "Interview Questions",
          [EXPERIENCE]: "Domain Experience",
          [SKILLS]: "Desired Skills",
        },
      },
      button: {
        default: "Ready to boost ?",
        loading: "Boosting...!",
      },
      overlayMessage: {
        title1: "Elevate Your ",
        title2: "Career",
        subTitle: "AI-powered resume analysis awaits",
      },
    },
    results: {
      [REVIEW]: "Assessment",
      [ABOUT]: "About",
      [PERCENTAGE]: "Percentage Match",
      [IMPROVE]: "Improvements",
      [KEYWORDS]: "Missing Keywords",
      [QUESTIONS]: "Interview Questions",
      [EXPERIENCE]: "Domain Experience",
      [SKILLS]: "Desired Skills",
    },
  },
};
