require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const Routes = require('./routes/main')
const db = require("./Models/db");
const cors = require("cors");
const PORT = process.env.PORT;

db.main();
app.use(bodyParser.json()); 
app.use(cors()); 
app.use(express.urlencoded({ extended: false }));

app.use("/", Routes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  
});
