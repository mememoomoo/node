const express = require("express");

const PORT = process.env.PORT || 8000;
const app = express();

const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port: ", PORT);
});
