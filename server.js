let express = require("express");
let cors = require("cors");

let poraki = [];

let poraka1 = {
    sender: "David",
    message: "Zdravo"
};

let poraka2 = {
    sender: "Tanasije",
    message: "Kako si?"
};

poraki.push(poraka1);
poraki.push(poraka2);

let server = express();
server.use(express.json());
server.use(express.static("./static"));

server.get("/messages", (req, res) => {
    res.send(messages);
})

server.post("/messages", (req, res) => {

})

server.listen(8080);