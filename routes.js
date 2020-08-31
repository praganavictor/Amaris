const express = require("express");
const UrlController = require("./src/controllers/UrlController");

const routes = express.Router();

routes.get("/urls", UrlController.index);
routes.get("/url/:id", UrlController.show);
routes.post("/url", UrlController.store);
routes.put("/url/:id", UrlController.update);
routes.delete("/url/:id", UrlController.destroy);

routes.get("/:search", UrlController.search);

module.exports = routes;
