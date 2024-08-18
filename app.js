const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');

dotenv.config();

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use express-ejs-layouts middleware
app.use(expressLayouts);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use bodyParser to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection setup
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Use routes defined in 'routes/index.js'
app.use('/', indexRoutes);

// Set the server to listen on the provided PORT or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
