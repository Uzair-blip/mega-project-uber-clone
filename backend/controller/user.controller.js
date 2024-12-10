const userModel=require("../models/user_model")
const userService=require("../services/user.services")
const {validationResult}=require("express-validator")

module.exports.RegisterUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    const { fullname, email, password } = req.body;

    try {
        const hashedPassword = await userModel.hashPassword(password);

        const user = await userService.CreateUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
        });

        const token = user.generateAuthtoken();
        res.status(201).json({ token, user });
    } catch (error) {
        res.status(400).json({ error: error.message }); // Send the error message in the response
    }
};
