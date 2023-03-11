import mongoose from "mongoose";

// Create a function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/foodBanking", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection error:", error);
    process.exit(1);
  }
};

export { connectDB };
