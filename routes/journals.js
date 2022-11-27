const express = require('express')

const journalController = require('../controllers/journals')

const router = express.Router()

router.route('/')
    .get(journalController.getAllJournals)
    .post(journalController.createJournal)

router.route('/:id')
    .get(journalController.getSingleJournal)
    .patch(journalController.updateJournal)
    .delete(journalController.deleteJournal)

module.exports = router