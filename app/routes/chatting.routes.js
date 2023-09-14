module.exports = app => {
  const chattings = require("../controllers/chatting.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", chattings.create);

  // Retrieve all Tutorials
  router.get("/", chattings.findAll);

  // Delete a Tutorial with id
  router.delete("/:id", chattings.delete);

  app.use("/api/v1/chattings", router);
};
