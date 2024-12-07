const express = require("express");
const app = express();

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.use("/hello2", (req, res) => {
//   res.send("Hello Hello");
// });

// app.use("/hello1", (req, res) => {
//   res.send("Hello Hello 2");
// });

app.use(
  "/user",
  (req, res, next) => {
    console.log("hanler 1");
    next();
  },

  (req, res, next) => {
    console.log("handler 2");
    next();
    res.send("Hello");
  },
  (req, res) => {
    console.log("handler 3");
    res.send("Logged in");
  }
);

app.listen(3000, () => {
  console.log("Server is live on port 3000");
});
