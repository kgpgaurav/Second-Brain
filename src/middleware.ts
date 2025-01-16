import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_secret } from "./config";

export const userMiddleware= (req: Request, res: Response, next: NextFunction)=>{
    const header = req.headers["authorization"]
    const decoded=jwt.verify(header as string, JWT_secret)

    if (decoded) {
        //@ts-ignore
        req.userId=decoded.id;
        next()
    } else {
        res.status(403).send("Authorization header missing or invalid or you are not logged in");
    }
}