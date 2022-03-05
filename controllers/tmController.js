const introController = (req, res, next) => {
  res.send("저는 태민이에오!");
};

const tmController = {
  introController,
};

module.exports = tmController;
