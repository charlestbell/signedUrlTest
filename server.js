import { v4 as uuidv4 } from "uuid";
import { initializeApp, cert } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

import serviceAccount from "./brog-trip-journal-cc46ec503e1d.json" assert { type: "json" };

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: "brog-trip-journal.appspot.com",
});

const bucket = getStorage().bucket();

const fileName = uuidv4();

async function generateV4UploadSignedUrl() {
  // These options will allow temporary uploading of the file with outgoing
  // Content-Type: application/octet-stream header.
  const options = {
    version: "v4",
    action: "write",
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    contentType: "application/octet-stream",
  };

  // Get a v4 signed URL for uploading file
  const [url] = await bucket.file(fileName).getSignedUrl(options);

  console.log("Generated PUT signed URL:");
  console.log(url);
  console.log("You can use this URL with any user agent, for example:");
  console.log(
    "curl -X PUT -H 'Content-Type: application/octet-stream' " +
      `--upload-file my-file '${url}'`
  );
}

generateV4UploadSignedUrl().catch(console.error);
