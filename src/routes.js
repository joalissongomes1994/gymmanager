const express = require("express");
const routes = express.Router();

const instructors = require("./app/controllers/instructors");
const members = require("./app/controllers/members");

//Redireciona para a raiz
routes.get("/", (req, res) => {
  return res.redirect("/instructors");
});

//Rotas de Instrutores
routes.get("/instructors", instructors.index);
routes.get("/instructors/create", instructors.create);
routes.get("/instructors/:id", instructors.show);
routes.get("/instructors/:id/edit", instructors.edit);
routes.post("/instructors", instructors.post);
routes.put("/instructors", instructors.put);
routes.delete("/instructors", instructors.delete);

//Rotas de Instrutores

routes.get("/members", members.index);
routes.get("/members/create", members.create);
routes.get("/members/:id", members.show);
routes.get("/members/:id/edit", members.edit);
routes.post("/members", members.post);
routes.put("/members", members.put);
routes.delete("/members", members.delete);

module.exports = routes;