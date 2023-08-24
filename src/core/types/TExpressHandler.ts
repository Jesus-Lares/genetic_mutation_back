import { Request, Response, NextFunction } from "express";

export type TExpressHandler = (req: Request, reply: Response, next: NextFunction) => void;
