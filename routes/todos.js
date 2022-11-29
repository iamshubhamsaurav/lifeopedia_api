const express = require('express')

const {
    getAllTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todos')

const router = express.Router()

router.route('/').get(getAllTodos).post(createTodo)
router.router('/:id').get(getTodo).patch(updateTodo).deleteTodo(deleteTodo)

module.exports = router