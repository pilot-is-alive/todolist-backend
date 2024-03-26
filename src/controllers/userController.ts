import { Request, Response } from "express";
import * as userService from "../services/userService";

export default async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch(error) {
        console.error("Error creating user:", error);
        res.status(500).send('Server Error');
    }
}