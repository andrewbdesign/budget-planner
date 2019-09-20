const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
app.get('/', (req, res) => {
  res.send('Hello World')
})

connectDB()

app.use(express.json())

// Routes
app.use('/api/register', require('./routes/api/user'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))