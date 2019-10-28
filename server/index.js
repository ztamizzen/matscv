const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/hello", (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        greeting: `Hello, ${name}!`
    }));
});

app.get("/api/friends", (req, res) => {
    const friendsList = [
        { id: 1, name: 'Phoebe' },
        { id: 2, name: 'Rachel' },
        { id: 3, name: 'Monica' }
    ];
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(friendsList));
});

app.listen(5000, () =>
    console.log("Running on port 5000")
);
