const debug = require("debug")("app:startup"); // set env 'export DEBUG='app:startup'
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(helmet()); // Secure header

// Log Traffic
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("Morgan enabled...");
}

// Req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(require("./routes"));

const port = process.env.PORT | "3001";

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
