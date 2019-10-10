const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

app.use(express.json());

// Routes
app.use('/api/users', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/bill', require('./routes/api/bill'));
app.use('/api/expense', require('./routes/api/expense'));
app.use('/api/dream', require('./routes/api/dream'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
