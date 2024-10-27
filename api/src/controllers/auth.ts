import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User"; // Assuming you have a User model with an email, password, and name field

// Controller for signing in
const sign_in = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({
                success: false,
                msg: "Invalid email or password",
            });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                msg: "Invalid email or password",
            });
        }

        return res.status(200).json({
            success: true,
            msg: "Successfully signed in",
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        });
    } catch (err: any) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: err.message,
            msg: "Error signing in!"
        });
    }
};

// Controller for signing up
const sign_up = async (req: Request, res: Response) => {
    const { email, password, name } = req.body;

    try {
        // Check if the email is already registered
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                msg: "Email is already registered",
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the new user
        const newUser = await User.create({
            email,
            password: hashedPassword,
            name,
        });

        return res.status(201).json({
            success: true,
            msg: "Successfully signed up",
            user: {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name
            }
        });
    } catch (err: any) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: err.message,
            msg: "Error signing up"
        });
    }
};

// Exporting the AuthController
export const AuthController = {
    sign_in,
    sign_up
};
