const Album = require('../models/album')

//@desc     Get All Notebooks
//@route    GET /api/v1/notebooks/
//@access   Public
exports.getAllAlbums = async (req, res, next) => {
    try {
        const albums = await Album.find()
        res.status(203).json({
            success: true,
            count: albums.length,
            data: albums
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
exports.getSingleAlbum = async (req, res, next) => {
    try {
        const album = await Album.findById(req.params.id)
        if(!album) {
            return res.status(404).json({
                success: false,
                message: "Resource not found"
            })
        }
        
        res.status(203).json({
            success: true,
            data: album
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Create An Album
//@route    POST /api/v1/album/
//@access   Private
exports.createAlbum = async (req, res, next) => {
    try {
        const album = await Album.create(req.body)
        if(!album) {
            return res.status(404).json({
                success: false,
                message: "Resource not created"
            })
        }
        res.status(203).json({
            success: true,
            data: album
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Update An Album
//@route    PATCH /api/v1/album/:id
//@access   Private
exports.updateAlbum = async (req, res, next) => {
    try {
        let album = await Album.findById(req.params.id)
        if(!album) {
            return res.status(404).json({
                success: false,
                message: "Resource not found"
            })
        }
        album = await Album.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(203).json({
            success: true,
            data: album
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Delete An Album
//@route    DELETE /api/v1/album/:id
//@access   Private
exports.deleteAlbum = async (req, res, next) => {
    try {
        let album = await Album.findById(req.params.id)
        if(!album) {
            return res.status(404).json({
                success: false,
                message: "Resource not found"
            })
        }
        album = await Album.findByIdAndDelete(req.params.id)
        res.status(203).json({
            success: true,
            data: album
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}