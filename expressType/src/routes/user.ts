import { Router } from "express";
import { getUser } from "../controller/user.controller"

const router = Router();

router.get('/user/:id', getUser);

export default router;
