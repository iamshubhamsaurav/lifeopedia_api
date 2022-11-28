const express = require('express')

const {
    getAllAlbums,
    getSingleAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum
} = require('../controllers/albums')

const router = express.Router()

router.route('/').get(getAllAlbums).post(createAlbum)
router.route('/:id').get(getSingleAlbum).patch(updateAlbum).delete(deleteAlbum)

module.exports = router