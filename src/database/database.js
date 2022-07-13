const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to database...'))
    .catch((error) => {
      console.log(`error connecting to database:${error}`);
    });
}

module.exports = connectToDatabase;
