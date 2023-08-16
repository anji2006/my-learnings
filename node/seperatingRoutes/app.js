const express = require("express");

const app = express();

const testRoute = require("./routes/test");

app.use("/test", testRoute);
// app.use("/test1", testRoute1);
//
//
// app.use("/test2", testRoute3);

app.listen(2006, () => {
  console.log("server is running at 2006");
});
