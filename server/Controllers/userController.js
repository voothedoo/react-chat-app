import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createToken = (_id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _id }, jwtkey, { expiresIn: '3d' });
};

const registerUser = async (req, res) => {

  console.log(req.body);
  console.log(req);

  const { name, email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });

    if (user) return res.status(409).json("Email already in use!");

    if (!name || !email || !password) return res.status(422).json("All fields are required!");

    if (!validator.isEmail(email)) return res.status(422).json("Email must be a valid email!");

    if (!validator.isStrongPassword(password)) return res.status(422).json("Password must be a strong password!");

    user = new userModel({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = createToken(user._id);

    res.status(200).json({ _id: user._id, name, email, token });

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }

};

export { registerUser };