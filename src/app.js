const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

// connecting to db

mongoose
  .connect("mongodb://localhost/dbbodega", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB conected"))
  .catch((err) => console.log(err));

//importing routes
const indexRoutes = require("./routes/index");

//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/", indexRoutes);

//starting the server

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
