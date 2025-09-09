import fvs from "file-saver";
import hashing from "object-hash";

export function downloadAsJSON(object: any) {
  fvs.saveAs(
    new Blob([JSON.stringify(object, null, 4)], {
      type: "application/json",
    }),
    Date.now() + hashing.sha1(object) + ".json",
  );
}
