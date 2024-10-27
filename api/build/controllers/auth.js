"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User")); // Assuming you have a User model with an email, password, and name field
// Controller for signing in
const sign_in = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Check if the user exists
        const user = yield User_1.default.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({
                success: false,
                msg: "Invalid email or password",
            });
        }
        // Compare the password
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
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
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: err.message,
            msg: "Error signing in!"
        });
    }
});
// Controller for signing up
const sign_up = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name } = req.body;
    try {
        // Check if the email is already registered
        const existingUser = yield User_1.default.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                msg: "Email is already registered",
            });
        }
        // Hash the password
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        // Create the new user
        const newUser = yield User_1.default.create({
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
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: err.message,
            msg: "Error signing up"
        });
    }
});
// Exporting the AuthController
exports.AuthController = {
    sign_in,
    sign_up
};
