const userModel = require("../models/user_model");

module.exports.CreateUser = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !email || !password) {
        throw new Error("Please fill all the Fields");
    }

    // Check if the email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        throw new Error("Email already exists");
    }

    const user = new userModel({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password,
    });

    await user.save(); // Save the user to the database
    return user; // Return the user object
};
