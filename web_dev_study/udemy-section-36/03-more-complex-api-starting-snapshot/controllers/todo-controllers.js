const Todo = require("../models/to-do-models");

async function getAllTodos(req, res, next) {
   let todos;
   try {
      todos = await Todo.getAllTodos();
   } catch (error) {
      return next(error);
   }

   res.json({
      todos: todos,
   });
}

async function addTodo(req, res, next) {
   const todoText = req.body.text;

   const todo = new Todo(todoText);

   let insertedId;
   try {
      const result = await todo.save();
      insertedId = result.insertedId;
   } catch (error) {
      return next(error);
   }

   todo.id = insertedId.toString();

   res.json({ message: "Added todo successfully!", createdTodo: todo });
}

async function updateTodo(req, res, next) {
   const todoId = req.params.id;
   const newTodo = req.body.text;

   const todo = new Todo(newTodo, todoId);
   try {
      await todo.save();
      return res.json({ message: "Updated todo!" });
   } catch (error) {
      return next(error);
   }
}

async function deleteTodo(req, res, next) {
   const todoId = req.params.id;
   const todo = new Todo(null, todoId);
   try {
      await todo.delete();
      return res.json({ message: "todo Deleted!" });
   } catch (error) {
      return next(error);
   }
}

module.exports = {
   getAllTodos: getAllTodos,
   addTodo: addTodo,
   updateTodo: updateTodo,
   deleteTodo: deleteTodo,
};
