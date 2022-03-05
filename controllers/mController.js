const introController = (req, res, next) => {
  res.send("저는 민이에오!");
};

const mController = {
  introController,
};

module.exports = mController;
