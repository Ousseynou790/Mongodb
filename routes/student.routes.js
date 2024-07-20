module.exports = app => {
  const students = require("../controllers/student.controller.js");
  let router = require("express").Router();

  // Create a new Student
  router.post("/", students.create);

  // Retrieve all Students
  router.get("/", students.findAll);

  router.delete("/", students.deleteAll);
  router.delete("/:id", students.delete);

  app.use("/api/students", router);
};
