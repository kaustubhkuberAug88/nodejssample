const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models/database/database.js");

//db.sequelize.authenticate()
db.sequelize.sync({
    logging: console.log
})  
.then(() => {
    console.log("database connection is successful.");
})
.catch((err) => {
    console.error(err);
});

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

// simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to NodeJS Express MySQL CRUD App!!" });
// });

// setup the api
require('./app/api')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});
