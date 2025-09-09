import _ from "lodash";

import { persistentAtom } from "@nanostores/persistent";

import { STORE_PARSER } from "@stores/_constants";

import dataSurveyItems from "public/data/survey.json";

export type SurveyItemID = string;

export type SurveyItem = {
  id: SurveyItemID;
  label: string;
  options: Array<string>;
  description?: string | null;
};

export type SurveyReplyItem = {
  id: SurveyItemID;
  response: string;
};

// Store Management
export const surveyStore = persistentAtom<Array<SurveyItem>>(
  "survey:",
  dataSurveyItems,
  STORE_PARSER,
);

export const surveyReplyStore = persistentAtom<Array<SurveyReplyItem>>(
  "surveyReply:",
  surveyStore
    .get()
    .map((item: SurveyItem) => ({ id: item.id, response: item.options[0] })),
  STORE_PARSER,
);

// Getters
export function getSurveyReply(id: SurveyItemID): SurveyReplyItem {
  return surveyReplyStore
    .get()
    .find((item: SurveyReplyItem) => item.id === id) as SurveyReplyItem;
}

// Modifiers
export function setSurveyReply(id: SurveyItemID, response: string): void {
  const surveyReplies: Array<SurveyReplyItem> = surveyReplyStore.get();
  const responseID: number = surveyReplies.findIndex(
    (item: SurveyReplyItem) => item.id === id,
  );

  surveyReplies[responseID].response = response;
  surveyReplyStore.set(surveyReplies);
}
