import { Router } from "express";
import { createRelashionship } from "../controllers/relashionship.controller.js";

const relashionshipRouter = Router();

relashionshipRouter.post('/relashion', createRelashionship);

export { relashionshipRouter }