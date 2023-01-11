import express from "express";

const app = express();
app.listen(8000, () => { console.log("server start");})

app.get("/",(req, res) => {
  res.send("hello")
})
