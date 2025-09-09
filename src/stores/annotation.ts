import { computed } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

import { STORE_PARSER } from "@stores/_constants";

import dataAnnotations from "public/data/annotation.json";
import dataSamples from "public/data/samples.json";

export type SampleID = string;
export type AnnotationID = string;

export type Feature = {
  label: string;
  content: string | number;
};

export type Sample = {
  id: SampleID;
  features: Array<Feature>;
};

export type Annotation = {
  id: AnnotationID;
  label: string;
  options: Array<string>;
  description?: string | null;
};

export type AnnotationReplyItem = {
  id: AnnotationID;
  response: string;
};

export type SampleAnnotationReplyItem = {
  id: SampleID;
  annotations: Array<AnnotationReplyItem>;
};

// Store Management
export const sampleStore = persistentAtom<Array<Sample>>(
  "samples:",
  dataSamples,
  STORE_PARSER,
);

export const annotationsStore = persistentAtom<Array<Annotation>>(
  "annotations:",
  dataAnnotations,
  STORE_PARSER,
);

export const activeAnnotationItemStore = persistentAtom<number>(
  "activeAnnotation:",
  0,
  STORE_PARSER,
);

export const annotationReplyStore = persistentAtom<
  Array<SampleAnnotationReplyItem>
>(
  "annotationReply:",
  sampleStore.get().map((sItem: Sample) => ({
    id: sItem.id,
    annotations: annotationsStore.get().map((aItem: Annotation) => ({
      id: aItem.id,
      response: aItem.options[0],
    })),
  })),
  STORE_PARSER,
);

// Derived Stores
export const annotationsStoreActiveItem = computed(
  activeAnnotationItemStore,
  (index: number): Sample => {
    return sampleStore.get()[index];
  },
);

// Getters
export function getAnnotationReply(
  sID: SampleID,
  aID: AnnotationID,
): AnnotationReplyItem {
  return annotationReplyStore
    .get()
    .find((item: SampleAnnotationReplyItem) => item.id === sID)
    ?.annotations.find(
      (item: AnnotationReplyItem) => item.id === aID,
    ) as AnnotationReplyItem;
}

// Modifiers
export function setAnnotationReply(
  sID: SampleID,
  aID: AnnotationID,
  response: string,
): void {
  const annotationReplies: Array<SampleAnnotationReplyItem> =
    annotationReplyStore.get();
  const sampleIndex: number = annotationReplies.findIndex(
    (item: SampleAnnotationReplyItem) => item.id === sID,
  );
  const annotationIndex: number = annotationReplies[
    sampleIndex
  ].annotations.findIndex((item: AnnotationReplyItem) => item.id === aID);

  annotationReplies[sampleIndex].annotations[annotationIndex].response =
    response;
  annotationReplyStore.set(annotationReplies);
}

export function previousActiveAnnotationItem(): void {
  const val = activeAnnotationItemStore.get();

  if (val > 0) activeAnnotationItemStore.set(val - 1);
}

export function nextActiveAnnotationItem(): void {
  const val = activeAnnotationItemStore.get();

  if (val < sampleStore.get().length - 1)
    activeAnnotationItemStore.set(val + 1);
}
