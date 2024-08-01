// importando a representacao da tabela User
import { Message } from "../models/Message.model.js";

export const createMessage = async (req, res) => {
    try {
        const { user_sender_id, user_receiver_id, body } = req.body;
        // verificando se a tabela já existe
        // caso nao exista cria-se
        await Message.sync();
        // criando uma variavel para armazenar a resposta 
        // da criacao da mensagem no banco de dados
        //              aguarde/ acessando tabela 'Message' / passando parametros de criacao
        const newMessage = await Message.create({user_sender_id, user_receiver_id, body});
        return res.status(201).json({ newMessage });
    } catch (error) {
        return res.status(400).json({messageError: error.message})
    }
}

export const getAllMessages = async (req,res) => {
    try {
        // SELECT `id`, `username`, `statusOn`, `createdAt`, `updatedAt` FROM `Users` AS `User`;
        const messages = await Message.findAll();
        return res.json({messages});
    } catch (error) {
        return res.status(400).json({messageError})
    }
}

export const deleteMessage = async (req,res) => {
    const { id } = req.params;
    await Message.destroy({
        where: {
          id
        },
      });
    return res.json({message: 'mensagem deletada com sucesso'})
}

export const updatedMessage = async (req,res) => {
    const { id } = req.params;
    const { body } = req.body;
    await Message.update(
        { body },
        {
          where: {
            id
          },
        },
      );
    return res.json({message: 'mensagem editada com sucesso'})
}