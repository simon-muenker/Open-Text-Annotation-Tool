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

export async function uploadJSON(event: Event): Promise<Object> {
  return new Promise((resolve, reject) => {
    const target = event.target as unknown as { files: File[] };
    const file: File = target?.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      if (!e.target) throw new Error("No event target.");
      if (!e.target.result) throw new Error("No target results.");

      resolve(JSON.parse(e.target.result as string));
    };
    reader.onerror = (err) => reject(err);
    reader.readAsText(file);
  });
}
