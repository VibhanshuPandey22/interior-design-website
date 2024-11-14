import mongoose from "mongoose";

let isConnected = false;

export const connectToMongoDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "kaizen",
    });
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
