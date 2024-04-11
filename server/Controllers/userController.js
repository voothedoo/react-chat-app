import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createToken = (_id) => {
  const jwtKey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _id }, jwtKey, { expiresIn: '3d' });
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });

    if (user) return res.status(409).json({ error: "This email is already registered." });

    if (!name || !email || !password) return res.status(422).json({ error: "All fields are required." });

    if (!validator.isEmail(email)) return res.status(422).json({ error: "Email must be a valid email." });

    if (!validator.isStrongPassword(password)) return res.status(422).json({ error: "Password must be a strong password." });

    user = new userModel({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = createToken(user._id);

    res.status(200).json({ _id: user._id, name, email, token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }

};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });
    if (!user) return res.status(401).json({ error: "You have entered an invalid email or password." });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(401).json({ error: "You have entered an invalid email or password." });

    const token = createToken(user._id);
    res.status(200).json({ _id: user._id, name: user.name, email, token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }

};

const findUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userModel.findById(userId);
    res.status(200).json(user);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
};

export { registerUser, loginUser, findUser, getUsers };