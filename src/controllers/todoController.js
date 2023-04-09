const express = require('express');
const {addNewTodo, deleteTodoById, getAllTodos, updateTodoById} = require('../services/todoService.js')

const todoAddController = async (req, res) =>{
    try{
        const todo = {
            label: req.body.label,
            description: req.body.description
        }
        const todoAdded = await addNewTodo(todo);
        if(!todoAdded){
            return res.status(404).json({'message':'Not found'});
        }else
            return res.status(201).json({'message':todoAdded});
    }catch(err){
        res.status(500).send(err);
    }
}

const getAllTodoController = async(req, res) =>{
    try{
        const todoResult = await getAllTodos();
        if(todoResult){
            return res.status(200).json({'message':todoResult});
        }else{
            return res.status(404).json({'message':'Not found'});
        }
    }catch(err){
        res.status(500).send(err);
    }
}

const todoDeleteController = async (req, res) =>{
    try{
        var filter = req.params.id;

        const deleted = await deleteTodoById(filter);
        if(deleted)        
            res.sendStatus(200);
        else
            res.sendStatus(204);
    }catch(err){
        res.status(500).send(err);
    }
}

const todoUpdateController = async (req, res) =>{
    try{
        const updates = req.body.updates;
        var filter = req.params.id;

        const updated = await updateTodoById(filter, updates);
        if(updated)        
            res.status(200).send({"message": updated});
        else{
            res.status(404).send("Not found!");
        }
    }catch(err){
        res.status(500).send(err);
    }
}

module.exports.todoAddController = todoAddController;
module.exports.getAllTodoController = getAllTodoController;
module.exports.todoDeleteController = todoDeleteController;
module.exports.todoUpdateController = todoUpdateController;