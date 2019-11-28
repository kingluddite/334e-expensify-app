const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
// Heroku port
const port = process.env.PORT ? process.env.PORT : 3000;

app.use(express.static(path.join(publicPath)));

// server index.html to all unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is running. You better go catch it! LOL');
});
