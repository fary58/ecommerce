const express = require("express");
const cors = require("cors");
const connectDB = require("./dbConnection");
var bodyParser = require("body-parser");
const app = express();
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB();

app.use("/user", require("./routes/userRoute"));

// app.get("/", (req, res) => {
//   res.send({
//     message: "Hello World from Express API backend!",
//   });
// });

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
