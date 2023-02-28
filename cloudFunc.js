import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase.js";

const generateSignedUrl = httpsCallable(functions, "generateSignedUrl");
const signedUrl = await generateSignedUrl({ fileName: "test.txt" });
console.log("signedUrl: ", signedUrl);
