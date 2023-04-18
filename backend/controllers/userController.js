//Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
const asyncHandler = require('express-async-handler');

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
    else {
        return res.status(200).json({ message: `looks good ${name}` });
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