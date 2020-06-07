const mongoose = require("mongoose");

const ShopSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("shop", ShopSchema);
