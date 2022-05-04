const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

dotenv.config();
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("conected to database"))
  .catch((err) => console.log(err));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);


app.listen("5000", ()=>{
  console.log("Backend is running");
})

app.get("/", (req,res)=>{
  res.send("la pagina de inicio");
})