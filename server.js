const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sum", (req, res) => {
  console.log(req.query);
  const resp = sum(Number(req.query.num1), Number(req.query.num2));
  res.json(resp);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const sum = (a, b) => {
  const res = a + b;
  if (res > 10) {
    return "sok";
  } else if (res < 0) {
    return 0;
  } else {
    return Math.floor(res);
  }
};
