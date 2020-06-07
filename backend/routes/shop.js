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
router.get("/preferredShop", async (req, res) => {
  try {
    const userId = req.body.id;
    const singleUser = await User.findById(userId)
      .populate("preferredShop")
      .exec((err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json(data.preferredShop);
        }
      });
  } catch (error) {
    res.status(404);
  }
});
router.post("/likeShop/:id", async (req, res) => {
  try {
    const userId = req.body.id;
    const shopId = req.params.id;
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

router.delete("/removeShop/:id", async (req, res) => {
  try {
    const userId = req.body.id;
    const shopId = req.params.id;

    const user = await User.findById(userId);
    user.preferredShop = user.preferredShop.filter(
      (id) => id.toString() !== shopId
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
