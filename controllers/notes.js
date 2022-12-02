const Note = require('../models/note')

//@desc     Get Notes
//@route    GET /api/v1/notes/
//@access   Public
exports.getAllNote = async (req, res, next) => {
    try {
        const notes = await Note.find()
        res.status(200).json({
            success: true,
            count: notes.length,
            data: notes
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Get Note
//@route    GET /api/v1/notes/:id
//@access   Public
exports.getSingleNote = async (req, res, next) => {
    try {
        const note = await Note.findById(req.params.id)
        if(!note) {
            return res.status(404).json({
                success: false,
                message: "Page Not Found"    
            })
        }
        res.status(200).json({
            success: true,
            data: note
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Create Note
//@route    POST /api/v1/notes/
//@access   Private
exports.createNote = async (req, res, next) => {
    try {
        const note = await Note.create(req.body)
        if(!note) {
            return res.status(404).json({
                success: false,
                message: "Page Not Found"    
            })
        }
        res.status(200).json({
            success: true,
            data: note
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}


//@desc     Update Note
//@route    PATCH /api/v1/notes/:id
//@access   Private
exports.updateNote = async (req, res, next) => {
    try {
        let note = await Note.findById(req.params.id)
        if(!note) {
            return res.status(404).json({
                success: false,
                message: "Page Not Found"    
            })
        }
        note = await Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            success: true,
            data: note
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Delete Note
//@route    DELETE /api/v1/notes/:id
//@access   Private
exports.deleteNote = async (req, res, next) => {
    try {
        let note = await Note.findById(req.params.id)
        if(!note) {
            return res.status(404).json({
                success: false,
                message: "Page Not Found"    
            })
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            data: note
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}