import { MongoClient } from 'mongodb';

declare module 'bun' {
  interface Env {
    MONGO_USERNAME: string;
    MONGO_PASSWORD: string;
    MONGO_PORT: string;
  }
}

const USERNAME = Bun.env.MONGO_USERNAME;
const PASSWORD = Bun.env.MONGO_PASSWORD;
const PORT = Bun.env.MONGO_PORT;

async function initDbConnection() {
  const uri = `mongodb://${USERNAME}:${PASSWORD}@localhost:${PORT}`;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // Perform database operations here
    const db = client.db('TEST');
    const collection = await db.createCollection('testCollection');
    const doc = { name: 'Test Document', createdAt: new Date() };
    const result = await collection.insertOne(doc);
    console.log('Inserted document with _id:', result.insertedId);

    await client.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

initDbConnection();
