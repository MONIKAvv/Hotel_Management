
const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  maxCount: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  rentPerDay: {
    type: Number,
    required: true
  },
  imageUrl: [],
  currentBookings: [],
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }

}, {
  timestamps: true,
})
// this is model and must need to create
const RoomModel = mongoose.model("rooms", RoomSchema)
module.exports = RoomModel;