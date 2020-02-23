// get external npm package
const router = require("express").Router();
// get internal database models
const db = require("../models");

// retrieves all books in the database 
router.get("/books", (req, res) => {
  db.Exercise.find({})
    .then(dbExercises => {
      res.json(dbExercises);
    })
    .catch(err => {
      res.json(err);
    });
});