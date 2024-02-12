import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const mongocred = {
  username : process.env.MONGO_USER,
  password : process.env.MONGO_PSWD,
  cluster  : process.env.MONGO_CLUSTER
}

const uri = `mongodb+srv://${mongocred.username}:${mongocred.password}@${mongocred.cluster}.kb5pjh3.mongodb.net/`;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
