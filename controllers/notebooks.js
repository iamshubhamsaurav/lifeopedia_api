const Notebook = require('../models/notebook')

//@desc     Get All Notebooks
//@route    GET /api/v1/notebooks/
//@access   Public
exports.getAllNotebooks = async (req, res, next) => {
    try {
        const notebooks = await Notebook.find()
        res.status(200).json({
            success: true,
            count: notebooks.length,
            data: notebooks
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Get Single Notebook
//@route    GET /api/v1/notebooks/:id
//@access   Public
exports.getSingleNotebook = async (req, res, next) => {
    try {
        const notebook = await Notebook.findById(req.params.id)
        if(!notebook) {
            return res.status(404).json({
                success: true,
                message: "Page Not Found"
            })
        }
        res.status(200).json({
            success: true,
            data: notebook
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Create Notebook
//@route    POST /api/v1/notebooks/
//@access   Private
exports.createNotebook = async (req, res, next) => {
    try {
        const notebook = await Notebook.findById(req.params.id)
        if(!notebook) {
            return res.status(404).json({
                success: true,
                message: "Page Not Found"
            })
        }
        res.status(201).json({
            success: true,
            data: notebook
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Update Notebook
//@route    PATCH /api/v1/notebooks/:id
//@access   Private
exports.updateNotebook = async (req, res, next) => {
    try {
        let notebook = await Notebook.findById(req.params.id)
        if(!notebook) {
            return res.status(404).json({
                success: true,
                message: "Page Not Found"
            })
        }
        notebook = await Notebook.findByIdAndUpdate(req.paramsw.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            success: true,
            data: notebook
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Delete Notebook
//@route    DELETE /api/v1/notebooks/:id
//@access   Private
exports.deleteNotebook = async (req, res, next) => {
    try {
        let notebook = await Notebook.findById(req.params.id)
        if(!notebook) {
            return res.status(404).json({
                success: true,
                message: "Page Not Found"
            })
        }
        notebook = await Notebook.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "Notebook Deleted",
            data: notebook
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}