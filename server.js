const express = require("express");
const routes = require("./controllers/chart_controller.js");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () =>
    console.log(`Server listening on: http://localhost:${PORT}`)
);