// importando a representacao da tabela Message
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
        return res.status(201).json({ newMessage, message: "mensagem criada com sucesso" });
    } catch (error) {
        return res.status(400).json({messageError: error.message})
    }
}

export const getAllMessages = async (req,res) => {
    try {
        // SELECT `id`, `username`, `statusOn`, `createdAt`, `updatedAt` FROM `Users` AS `User`;
        const messages = await Message.findAll();
        return res.status(200).json({messages});
    } catch (error) {
        return res.status(400).json({messageError})
    }
}

export const deleteMessage = async (req,res) => {
    const { id } = req.params;
    const message = await Message.findByPk(id);
    await Message.destroy({
        where: {
          id
        },
      });
    return res.status(200).json({message, messageSuccess: 'mensagem deletada com sucesso'})
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