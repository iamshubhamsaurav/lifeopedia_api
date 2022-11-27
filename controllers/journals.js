const Journal = require('../models/journal')

//@desc     Get all Journals
//@route    GET /api/v1/journals/
//@access   Public
exports.getAllJournals = async (req, res, next) => {
    try {
        const journals = await Journal.find()
    res.status(200).json({
        success: true,
        count: journals.length,
        data: journals
    })
    } catch (error) {
      res.status(500).json({
        success: true,
        message: "Server Error!"
      })  
    }
}


//@desc     Get Single Journals
//@route    GET /api/v1/journals/:id
//@access   Private
exports.getSingleJournal = async (req, res, next) => {
    try {
        const journal = await Journal.findById(req.params.id)
        if(!journal) {
            return res.status(404).json({
                success: false,
                message: 'Page not found!'
            })
        }
        res.status(200).json({
            success: true,
            data: journal
        })
    } catch (error) {
      res.status(500).json({
        success: true,
        message: "Server Error!"
      })  
    }
}

//@desc     Create New Journal
//@route    POST /api/v1/journals/
//@access   Private
exports.createJournal = async (req, res, next) => {
    try {
        const journal = await Journal.create(req.body)
        if(!journal) {
            return res.status(404).json({
                success: false,
                message: 'Page not found!'
            })
        }
        res.status(201).json({
            success: true,
            data: journal
        })
    } catch (error) {
      res.status(500).json({
        success: true,
        message: "Server Error!"
      })  
    }
}

//@desc     Update Journal
//@route    PATCH /api/v1/journals/:id
//@access   Private
exports.updateJournal = async (req, res, next) => {
    try {
        let journal = await Journal.findById(req.params.id)
        if(!journal) {
            return res.status(404).json({
                success: false,
                message: 'Page not found!'
            })
        }

        journal = await Journal.findByIdAndUpdate(req.paraams.id, req.body, {
            runValidators: true,
            new: true
        })

        res.status(200).json({
            success: true,
            data: journal
        })
    
    } catch (error) {
      res.status(500).json({
        success: true,
        message: "Server Error!"
      })  
    }    
}

//@desc     Delete Journal
//@route    DELETE /api/v1/journals/:id
//@access   Private
exports.deleteJournal = async (req, res, next) => {
    try {
        let journal = await Journal.findById(req.params.id)
        if(!journal) {
            return res.status(404).json({
                success: false,
                message: 'Page not found!'
            })
        }
        journal = await Journal.findByIdAndDelete(req.params.id)
        res.status(203).json({
            success: true,
            message: "Resource Deleted",
            data: journal
        })
    } catch (error) {
      res.status(500).json({
        success: true,
        message: "Server Error!"
      })  
    }    
}