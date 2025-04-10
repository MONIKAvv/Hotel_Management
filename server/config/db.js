const mongoose = require('mongoose')
const db = `mongodb+srv://monika:monika@testingnodemongodb.5qvsm.mongodb.net/My_Room`;

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async() => {

  try {
    await mongoose.connect(db);
    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.log("MongoDB is not connected ", error);
  }
}
module.exports = connectDB;