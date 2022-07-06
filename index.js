const express = require('express');
const cors = require('cors');
const CharacterRouter = require('./src/routes/characters.routes')
const connectToDatabase = require('./src/database/database')
 
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase()

app.use('/characters', CharacterRouter );

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`),
);
