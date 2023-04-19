//Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

//@desc     Registers a new user
//@route    /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    //Validation
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please include all required fields');

    }
    //Check that user is already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error(`User already exists`)
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400);
        throw new Error(`Invalid user data`);
    }
})

//@desc     Login user
//@route    /api/users/login
//@access   Public
const loginUser = asyncHandler(async (req, res) => {
    res.send(`Login User Route`)
})

module.exports = {
    registerUser,
    loginUser,
} 