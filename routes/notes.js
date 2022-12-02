const express = require('express')

const {
    getAllNote,
    getSingleNote,
    createNote,
    updateNote,
    deleteNote
} = require('../controllers/notes')

const router = express.Router()

router.route('/').get(getAllNote).post(createNote)
router.route('/').get(getSingleNote).patch(updateNote).delete(deleteNote)

module.exports = router