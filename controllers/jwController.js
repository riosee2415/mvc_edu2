const introController = (req, res, next) => {
  res.send("저는 정우에오!");
};

const jwController = {
  introController,
};

module.exports = jwController;
