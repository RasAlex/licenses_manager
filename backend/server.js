const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;


const app = express();

app.get(`/`, (req, res) => {
    // res.send(`Hello there...`)
    res.status(200).json ({message: `Welcome to the Licenses Manager API`})
})


app.listen(PORT, () => console.log(`Server started on the port ${PORT}`));