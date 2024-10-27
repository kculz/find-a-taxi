import express, { Request, Response } from "express";
import { AuthController } from "../controllers/auth";

const router = express.Router();

// Define route for sign-in
router.post('/signin', (req: Request, res: Response) => {
    AuthController.sign_in(req, res);
});

// Define route for sign-up
router.post('/signup', (req: Request, res: Response) => {
    AuthController.sign_up(req, res);
});

export const AuthRouter = router;
