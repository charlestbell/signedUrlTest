/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';

// The full path of your file inside the GCS bucket, e.g. 'yourFile.jpg' or 'folder1/folder2/yourFile.jpg'
// const fileName = 'your-file-name';

// Imports the Google Cloud client library
const { Storage } = require("@google-cloud/storage");

// Creates a client
const storage = new Storage();

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
  const [url] = await storage
    .bucket(bucketName)
    .file(fileName)
    .getSignedUrl(options);

  console.log("Generated PUT signed URL:");
  console.log(url);
  console.log("You can use this URL with any user agent, for example:");
  console.log(
    "curl -X PUT -H 'Content-Type: application/octet-stream' " +
      `--upload-file my-file '${url}'`
  );
}

generateV4UploadSignedUrl().catch(console.error);
