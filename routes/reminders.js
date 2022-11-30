const express = require('express')

const {
    getAllReminders, 
    getSingleReminder, 
    createReminder, 
    updateReminder, 
    deleteReminder
} = require('../controllers/reminder')

const router = express.Router()

router.route('/').get(getAllReminders).post(createReminder)
router.route('/:id').get(getSingleReminder).patch(updateReminder).delete(deleteReminder)

module.exports = router