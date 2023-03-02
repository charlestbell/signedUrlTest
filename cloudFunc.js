import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase.js";

const generateV4UploadSignedUrl = httpsCallable(
  functions,
  "generateV4UploadSignedUrl"
);
const signedUrl = await generateV4UploadSignedUrl();
console.log("signedUrl: ", signedUrl);
