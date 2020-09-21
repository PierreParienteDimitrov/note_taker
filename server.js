// Dependencies
// =============================================
const express = require('express')


// Sets up Express
// =============================================
const app = express()
const PORT = process.env.PORT || 3000


// Sets up data parsing
// =============================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use Public Folder
// =============================================
app.use(express.static("public"))


// API Routes
// =============================================
require("./routes/apiRoutes")(app);


// HTML Routes
// =============================================
require("./routes/htmlRoutes")(app);


// Listener
// =============================================
app.listen(PORT, function () {
    console.log('App is listening on PORT: ' + PORT)
})