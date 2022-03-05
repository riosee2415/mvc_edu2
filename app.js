const express = require("express");
const morgan = require("morgan");

const tmRouter = require("./routers/tmRouter");
const mRouter = require("./routers/mRouter");
const jwRouter = require("./routers/jwRouter");

const app = express();

app.use(morgan("dev"));

app.use("/tm", tmRouter);
app.use("/m", mRouter);
app.use("/jw", jwRouter);

app.listen(4000, () => {
  console.log("4000 PORT SERVER START!");
});
