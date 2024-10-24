const express = require("express");
const cors = require("cors");
const connectDB = require("./dbConnection");
require("dotenv").config();
var bodyParser = require("body-parser");
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB();

app.use("/user", require("./routes/userRoute"));
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/productRouter'))

// app.get("/", (req, res) => {
//   res.send({
//     message: "Hello World from Express API backend!",
//   });
// });

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
