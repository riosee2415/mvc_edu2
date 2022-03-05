const db = require("../models");

const getList = (req, res, next) => {
  const select = "SELECT * FROM EMP";

  db.query(select, (error, rows) => {
    return res.send(rows);
  });
};

const empController = {
  getList,
};

module.exports = empController;
