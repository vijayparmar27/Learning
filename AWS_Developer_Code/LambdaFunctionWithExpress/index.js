const express = require("express");
const serverless = require("serverless-http");

const app = express();
const port = 9000;

const lambdaFunctionEnvironmentName = "default";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const urls = req.originalUrl.split("/");
  console.log("====>> urls :: ", urls);

  if (urls[1] === lambdaFunctionEnvironmentName) {
    req.url = `/${urls[2]}`;
  }
  next();
});

app.get("/api", (req, res) => {
  res.send("---- serverless app is working ......");
});

app.get("/api/:id", (req, res) => {
  const value = req.params.id;

  res.send(`this value from URL :: ${value}`);
});

if (process.env.ENVIRONMENT === "production") {
  module.exports.handler = serverless(app);
} else {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}
