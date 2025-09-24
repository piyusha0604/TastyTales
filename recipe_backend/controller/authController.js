const bcrypt = require('bcrypt'); 
const User = require('../model/userModel');

exports.getRegister = (req, res) => {
    res.render('register');
};

exports.postRegister = async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return res.send("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });
    res.end('register');
};

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findOne({ username });

    if (foundUser && await bcrypt.compare(password, foundUser.password)) {
        req.session.username = foundUser.username;
    } else {
        return res.send("Invalid username or password");
    }
    res.end("login");
};

exports.logout = (req, res) => {
    req.session.destroy(() => res.send("Logged out"));
};
