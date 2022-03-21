import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://tnehd1998:shUcYb2fnfXmd2pB@cluster0.bgnuz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  return client;
}
