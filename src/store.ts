import { map, type PreinitializedMapStore } from "nanostores";

export const store: Record<string, PreinitializedMapStore> = {
  survey: map<Record<string, string>>({}),
  topic: map<Record<string, string>>({}),
  sentiment: map<Record<string, string>>({}),
};

export const getCollatedStore = (): Record<string, any> => {
  let output: Record<string, any> = {
    annotation: {},
  };

  for (const [key, value] of Object.entries(store)) {
    if (key == "survey") {
      output[key] = value.value;
    } else {
      output["annotation"][key] = value.value;
    }
  }

  console.debug(output);
  return output;
};
