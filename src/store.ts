import { map, type PreinitializedMapStore } from "nanostores";

export const store: Record<string, PreinitializedMapStore> = {
  survey: map<Record<string, string>>({}),
  topic: map<Record<string, string>>({}),
  sentiment: map<Record<string, string>>({}),
};
