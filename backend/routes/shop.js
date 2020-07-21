const express = require("express");
const router = express.Router();
const Shop = require("../model/Shop");
const User = require("../model/User");

router.get("/allShop", async (req, res) => {
  try {
    const shops = await Shop.find();
    res.status(200).json(shops);
  } catch (error) {
    res.status(500).json({
      message: "no shops are available",
    });
  }
});
router.get("/preferredShop/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await User.findById(userId).populate("preferredShop");

    res.status(200).json(data.preferredShop);
  } catch (error) {
    res.status(404).send();
  }
});

router.post("/likeShop/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const shopId = req.body.id;
    // const { shopId } = req.body;
    const singleUser = await User.findById(userId);

    if (singleUser.preferredShop.includes(shopId)) {
      return res.status(500).json({ message: "You already liked this shop" });
    }
    singleUser.preferredShop.push(shopId);
    await singleUser.save();
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({
      message: "User Not found",
    });
  }
});

router.delete("/removeShop/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const shopId = req.body.id;
    console.log(userId);
    console.log(shopId);
    const user = await User.findById(userId);
    user.preferredShop = user.preferredShop.filter(
      (id) => id.toString() !== shopId
      //
    );
    await user.save();

    return res.json(user);
  } catch {
    return res.status(500).json({ message: "User not found" });
  }
});

// router.post("/addShops", (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "shops are empty",
//     });
//   }
//   const shops = new Shop({
//     title: req.body.title,
//     description: req.body.description,
//     image: req.body.image,
//   });
//   shops
//     .save()
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send({
//         message: "cant add shops",
//       });
//     });
// });
module.exports = router;
