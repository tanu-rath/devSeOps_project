const express = require("express");
const app = express();

// Disable Express 'X-Powered-By' header for security
app.disable("x-powered-by");

const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hello World from DevSecOps Pipeline ");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
