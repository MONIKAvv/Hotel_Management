// API ENd POINTS

const express = require('express')
const router = express.Router()
const roomModel = require('../models/room')

router.get('/get_all_rooms', async(req, res) => {
  try {
    const rooms = await roomModel.find({});
    return res.send(rooms)
  } catch (error) {
    return res.status(400).json({message: error});
    
  }
})

module.exports = router;