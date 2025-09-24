const express = require('express');
const connectMongo = require('./db/db_config');
const recipeRoutes = require('./routes/recipeRoutes');
const authRoutes = require('./routes/authRoutes');

const session = require('express-session');
const cors = require('cors');
const app = express();

// connect to DB
connectMongo();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false,
}));


// routes
app.use('/recipes', recipeRoutes);   // ✅ plural
app.use('/auth', authRoutes);

app.listen(4000, () => {
  console.log('Server is running on port 4000...');
});
