import { Router } from "express";
import { createMessage, deleteMessage, getAllMessages, updatedMessage } from "../controllers/message.controller.js";

const messageRouter = Router();

messageRouter.post('/message', createMessage);
messageRouter.get('/message', getAllMessages);
messageRouter.delete('/message/:id', deleteMessage);
messageRouter.patch('/message/:id', updatedMessage);

export { messageRouter }