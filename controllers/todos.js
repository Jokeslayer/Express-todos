  // Convention is to name the model in uppercase and singular
const Todo = require('../models/todos');

function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll()
    });
}

module.exports = {
    index
  };