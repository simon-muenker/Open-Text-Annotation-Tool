import { persistentAtom } from "@nanostores/persistent";

import { STORE_PARSER } from "@stores/_constants";

// Store Management
export const isDemoStore = persistentAtom<boolean>(
  "isDemoStore",
  true,
  STORE_PARSER,
);
