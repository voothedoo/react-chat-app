import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 30
    },

    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }

);

const userModel = mongoose.model("User", userSchema);

export default userModel;