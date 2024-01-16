const express = require("express");

const todosController = require("../controllers/todo-controllers");

const router = express.Router();

router.get("/", todosController.getAllTodos);

router.post("/", todosController.addTodo);

module.exports = router;
