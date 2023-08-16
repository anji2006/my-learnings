const express = require("express");

// const app = express();

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

const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());


const allowedOrigins = ['http://example.com', 'http://localhost:3000'];

// Enable CORS for specific origins
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);
