const express = require('express');
const config = require('config');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/index');
const path = require('path');

const URI = config.get('mongoUri');

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api', router)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

//Static files
app.use("/stat", express.static(path.resolve(__dirname, 'static')))

const PORT = process.env.PORT || config.get('port') || 80;

async function start () {
  try {
      /*
      UNCOMMENT ONLY AFTER INITIALIZING CREDENTIALS FOR DB
      await mongoose.connect(URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true
      });
      */
      app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  } catch (e) {
      console.log("Server Error", e.message);
      process.exit(1);
  }
}

start();