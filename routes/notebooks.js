const express = require('express')

const {
    getAllNotebooks,
    getSingleNotebook,
    createNotebook,
    updateNotebook,
    deleteNotebook
    } = require('../controllers/notebooks')

const router = express.Router()

router.route('/').get(getAllNotebooks).post(createNotebook)
router.route('/:id').get(getSingleNotebook).patch(updateNotebook).delete(deleteNotebook)

module.exports = router