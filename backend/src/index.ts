import "reflect-metadata";


const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const PORT = 8000;

const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use("/api/users", usersRoutes)
app.use("/api/auth", authRoutes)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})