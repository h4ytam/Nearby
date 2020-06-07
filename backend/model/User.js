const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  preferredShop: [{ type: Schema.Types.ObjectId, ref: "shop" }],
});

module.exports = mongoose.model("user", UserSchema);
