require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const {requireAuth, checkUser} = require("./Middleware/authMiddleware");

const port = process.env.PORT || 3000;

const app = express();


// middleware
app.use(express.static('public'));
app.use(express.json())
app.use(cookieParser());
// view engine
app.set('view engine', 'ejs');


// connect the app to the database
const dbURI = process.env.DATABASE_URL;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port),
    console.log(`running at port ${port}`))
    .catch((err) => console.log(err))

// routes
app.get("*", checkUser); 
app.get('/', (req, res) => res.render('home'));
app.get('/notes',requireAuth, (req, res) => res.render('notes'));
app.use(authRoutes);
