require('dotenv').config();
const express = require('express');
const cors = require('cors');
const CharacterRouter = require('./src/characters/routes/characters.routes');
const connectToDatabase = require('./src/database/database');
const UserRouter = require('./src/user/routes/users.routes')


const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

app.use('/characters', CharacterRouter);
app.use('/users', UserRouter);


app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`),
);
