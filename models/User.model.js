const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      minlength: 2,
      maxlength: 20,
      trim: true
    },
    email: {
      type: String
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
