import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not set in .env.local");
}

const client = new MongoClient(uri);
const clientPromise = client.connect();

export async function getDb() {
  return (await clientPromise).db(
    process.env.MONGODB_DB_NAME || "career_compass_ai"
  );
}

