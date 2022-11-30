const Reminder = require('../models/reminder')

//@desc     Get All Reminders
//@route    GET /api/v1/reminders/
//@access   Public
exports.getAllReminders = async (req, res, next) => {
    try {
        const reminders = await Reminder.find()
        res.status(200).json({
            success: true,
            count: reminders.length,
            data: reminders
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Create Reminder
//@route    POST /api/v1/reminders/
//@access   Private
exports.createReminder = async (req, res, next) => {
    try {
        const reminder = await Reminder.create(req.body)
        if(!reminder) {
            return res.status(404).json({
                success: false,
                message: "Resource not created!"
            })
        }
        res.status(201).json({
            success: true,
            data: reminder
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Get Reminder
//@route    GET /api/v1/reminders/:id
//@access   Public
exports.getSingleReminder = async (req, res, next) => {
    try {
        const reminder = await Reminder.findById(req.params.id)
        if(!reminder) {
            return res.status(404).json({
                success: false,
                message: "Resource not found!"
            })
        }
        res.status(200).json({
            success: true,
            data: reminder
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Update Reminder
//@route    PATCH /api/v1/reminders/:id
//@access   Private
exports.updateReminder = async (req, res, next) => {
    try {
        let reminder = await Reminder.findById(req.params.id)
        if(!reminder) {
            return res.status(404).json({
                success: false,
                message: "Resource not found!"
            })
        }
        reminder = Reminder.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            success: true,
            data: reminder
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
}

//@desc     Delete Reminder
//@route    DELETE /api/v1/reminders/:id
//@access   Private
exports.deleteReminder = async (req, res, next) => {
    try {
        let reminder = await Reminder.findById(req.params.id)
        if(!reminder) {
            return res.status(404).json({
                success: false,
                message: "Resource not found!"
            })
        }
        await reminder.remove()
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