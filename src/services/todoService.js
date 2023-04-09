const Todo = require('../models/todoModel.js');

const getAllTodos = async () =>{
    const todos =  await Todo.find();
    if(todos){
        return todos;
    }
}

const deleteTodoById = async (id) =>{
    const todoDeleted =  await Todo.findOneAndDelete({_id : id});
    if(todoDeleted){
        return todoDeleted;
    }
}

const addNewTodo = async(details) =>{
    const newTodo = new Todo(details);

    const todoAdded = await newTodo.save();
    if(todoAdded){
        return todoAdded;
    }
}

const updateTodoById = async(id, updates) =>{
    const todoUpdated =  await Todo.findOneAndUpdate({_id : id}, updates, {new: true});
    if(todoUpdated){
        return todoUpdated;
    }
}

module.exports.addNewTodo = addNewTodo;
module.exports.getAllTodos = getAllTodos;
module.exports.deleteTodoById = deleteTodoById;
module.exports.updateTodoById = updateTodoById;