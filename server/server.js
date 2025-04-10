const express = require('express');
const connectDB = require('./config/db');
const roomRouter = require('./routes/rooms')

const app = express()
connectDB();

app.use('/api/rooms', roomRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
})