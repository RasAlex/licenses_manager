const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get(`/`, (req, res) => {
    // res.send(`Hello there...`)
    res.status(200).json ({message: `Welcome to the Licenses Manager API`})
})

//Routes
app.use(`/api/users/`, require(`./routes/userRoutes`));
app.use(`/api/schedule/`, require(`./routes/scheduleRoutes`));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on the port ${PORT}`));