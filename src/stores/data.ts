import { computed } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

import type {
  Data,
  Sections,
  SurveyItem,
  AnnotationItem,
  SampleItem,
} from "@/types";

import { STORE_PARSER } from "@stores/_constants";

import exampleData from "@presets/data.json";

// Store Management
export const dataStore = persistentAtom<Data>(
  "data",
  exampleData,
  STORE_PARSER,
);

// Derived Stores
export const sectionsStore = computed(dataStore, (data: Data): Sections => {
  return data.sections;
});

export const surveyStore = computed(dataStore, (data: Data): SurveyItem[] => {
  return data.survey;
});

export const annotationStore = computed(
  dataStore,
  (data: Data): AnnotationItem[] => {
    return data.annotation;
  },
);

export const samplesStore = computed(dataStore, (data: Data): SampleItem[] => {
  return data.samples;
});
