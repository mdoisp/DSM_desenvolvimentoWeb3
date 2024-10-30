import { Request, Response } from "express";
import { IUser } from "../controller/user.interface";

export const getUser = (_request: Request, response: Response) => {
    const user: IUser = {
        id: 1,
        name: "João",
        age: 22
    };

    response.json(user);
};