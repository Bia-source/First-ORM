import { Router } from "express";
import { createStatus, getAllStatus } from "../controllers/status.controller.js";

const statusRouter = Router();

statusRouter.post('/status/:user_id', createStatus);
statusRouter.get('/status', getAllStatus);

export { statusRouter }