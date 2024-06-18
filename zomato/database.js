import mongoose from "mongoose";
const connectDatabase = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB_URI}`);
    console.log("connected to database");
  } catch (error) {
    console.log(`error in databse : ${error}`);
  }
};

export default connectDatabase;
