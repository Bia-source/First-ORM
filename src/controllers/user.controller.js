// importando a representacao da tabela User
import { User } from "../models/User.model.js"

export const createUser = async (req, res) => {
    try {
        const { username } = req.body;
        // verificando se a tabela já existe
        // caso nao exista cria-se
        await User.sync();
        // criando uma variavel para armazenar a resposta 
        // da criacao do usuario no banco de dados
        //              aguarde/ acessando tabela 'User' / passando parametros de criacao
        const newUser = await User.create({username});
        return res.status(201).json({ newUser });
    } catch (error) {
        return res.status(400).json({messageError: error})
    }
}

export const getAllUser = async (req,res) => {
    try {
        // SELECT `id`, `username`, `statusOn`, `createdAt`, `updatedAt` FROM `Users` AS `User`;
        const users = await User.findAll();
        return res.json({users});
    } catch (error) {
        return res.status(400).json({messageError: error})
    }
}

export const deleteUser = () => {

}

export const updatedUser = () => {
    
}