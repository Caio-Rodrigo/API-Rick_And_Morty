const mongoose = require('mongoose');
const wayMongoose = 'mongodb://localhost:27017/rickAndMorty';

function connectToDatabase() {
  mongoose
    .connect(wayMongoose, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to database...'))
    .catch((error) => {
      console.log(`error connecting to database:${error}`);
    });
}

module.exports = connectToDatabase;