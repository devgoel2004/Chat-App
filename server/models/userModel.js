const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      default:
        "data:image/png;base64,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",
    },
  },
  {
    timeStamps: true,
  }
);
userModel.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userModel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userModel);
module.exports = User;
