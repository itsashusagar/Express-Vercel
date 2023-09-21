const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://itsashusagar:ashu123@ashu-mongo.lfhzvhf.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Item = mongoose.model('Item', {
  name: String,
  description: String,
});

app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
