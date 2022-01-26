import { Document, model, Schema } from "mongoose";

export interface userDoc extends Document {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const userSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

export const User = model<userDoc>("User", userSchema);
