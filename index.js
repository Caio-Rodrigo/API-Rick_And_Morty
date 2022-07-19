require('dotenv').config();
const express = require('express');
const cors = require('cors');
const CharacterRouter = require('./src/characters/routes/characters.routes');
const connectToDatabase = require('./src/database/database');
const UserRouter = require('./src/user/routes/users.routes');
const LoginRouter = require('./src/Login/routes/login.routes');
const Swagger = require('./src/swagger/swagger.routes');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

app.use('/characters', CharacterRouter);
app.use('/users', UserRouter);
app.use('/log', LoginRouter);
app.use('/api', Swagger);

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`),
);
