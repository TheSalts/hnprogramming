import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
