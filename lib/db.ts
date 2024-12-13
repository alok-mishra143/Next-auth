import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    console.log("db connected 🟢");
  } catch (error) {
    console.log("the is occure error in db connection", error);
    return;
  }
};

export default connectDB;
