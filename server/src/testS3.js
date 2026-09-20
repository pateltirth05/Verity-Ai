import "dotenv/config";
import {
  HeadBucketCommand,
} from "@aws-sdk/client-s3";

import s3 from "./config/s3.js";

const testS3 = async () => {
  try {
    await s3.send(
      new HeadBucketCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
      })
    );

    console.log("VerityAI S3 bucket access successful");
  } catch (error) {
    console.error("S3 bucket access failed:", error.message);
  }
};

testS3();