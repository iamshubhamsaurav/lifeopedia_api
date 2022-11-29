const Todo = require('../models/todo')

//@desc     Get All Todos
//@route    GET /api/v1/todos/
//@access   Public
exports.getAllTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find()
        res.status(200).json({
            success: true,
            count: todos.length,
            data: todos
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Create Todo
//@route    POST /api/v1/todos/
//@access   Private
exports.createTodo = async (req, res, next) => {
    try {
        const todo = await Todo.create(req.body)
        if(!todo) {
            return res.status(404).json({
                success: false,
                message: "Resource not created!"
            })
        }
        res.status(201).json({
            success: true,
            data: todo
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Get Todo
//@route    GET /api/v1/notebooks/:id
//@access   Private
exports.getTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.id)
        if(!todo) {
            return res.status(404).json({
                success: false,
                message: "Resource not found!"
            })
        }
        res.status(200).json({
            success: true,
            data: todo
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Update Todo
//@route    PATCH /api/v1/todos/:id
//@access   Private
exports.updateTodo = async (req, res, next) => {
    try {
        let todo = await Todo.findById(req.params.id)
        if(!todo) {
            return res.status(404).json({
                success: false,
                message: "Resource not found!"
            })
        }
        todo = Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            success: true,
            data: todo
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Delete Todo
//@route    DELETE /api/v1/todos/:id
//@access   Private
exports.deleteTodo = async (req, res, next) => {
    try {
        let todo = await Todo.findById(req.params.id)
        if(!todo) {
            return res.status(404).json({
                success: false,
                message: "Resource not found!"
            })
        }
        await todo.remove()
        res.status(200).json({
            success: true,
            data: todo
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}