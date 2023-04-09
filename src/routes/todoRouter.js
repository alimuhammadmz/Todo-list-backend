const express = require("express");
const {todoAddController, todoDeleteController, todoUpdateController, getAllTodoController} = require('../controllers/todoController');

const router = express.Router();

router.post('/create', todoAddController);
router.get('/', getAllTodoController);
router.put('/update/:id', todoUpdateController);
router.delete('/delete/:id', todoDeleteController);

module.exports = router;