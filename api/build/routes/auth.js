"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controllers/auth");
const router = express_1.default.Router();
// Define route for sign-in
router.post('/signin', (req, res) => {
    auth_1.AuthController.sign_in(req, res);
});
// Define route for sign-up
router.post('/signup', (req, res) => {
    auth_1.AuthController.sign_up(req, res);
});
exports.AuthRouter = router;
