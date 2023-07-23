const express = require("express");

const app = express();

app.listen(8999, () => {
  console.log("this is appis listening at port: 8999");
});

app.get("/", (req, res) => {
  // Set a custom header
  res.setHeader("X-Custom-Header", "Custom Header Value");

  // Set multiple headers using an object
  res.set({
    "Cache-Control": "no-cache",
    "Content-Type": "text/plain",
  });

  // Send a JSON response
  res.json({ message: "Hello, Express!" });

  // Set a cookie
  res.cookie("user", "john_doe", { maxAge: 900000, httpOnly: true });

  // End the response
  res.end();
});

// Middleware to parse request body as JSON
app.use(express.json());
