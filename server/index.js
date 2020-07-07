require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const port = 8080;

mongoose
  .connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@database:27017`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database Connected'))
  .catch((err) => {
    console.log(`Database Connection Failed: ${err}`);
    process.exit(1);
  });

const app = express();

app.use(express.json());

app.use('/api', require('./api'));

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Server running on port: ${port}`));
