const express = require("express");
const bodyParser = require("body-parser");
const gptRoutes = require("./src/routes/gptRoutes");

const app = express();

app.use(bodyParser.json());
app.use("/api/gpt", gptRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
