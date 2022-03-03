const router = require("express").Router();

const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "angular",
    user: "root",
    password: "Pa$$w0rd"
});

router.get("/", function (request, response) {
    connection.connect(function (err) {
        if (err) {
            console.log("DB Danger!");
        } else {
            console.log("DB Succes!")
        }
    });
    response.send("<h1>API page</h1>")
})

module.exports = router;