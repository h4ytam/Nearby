const mongoose = require("mongoose");
const MONGOURI =
  "mongodb://haytam:Haytam20@cluster0-shard-00-00-do0lw.mongodb.net:27017,cluster0-shard-00-01-do0lw.mongodb.net:27017,cluster0-shard-00-02-do0lw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
// "mongodb+srv://haytam:Haytam20@cluster0-do0lw.mongodb.net/test?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.log(error);
    // throw error;
  }
};
module.exports = InitiateMongoServer;
