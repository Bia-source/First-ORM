import { Status } from "../models/Status.model.js";


export const createStatus = async (req,res) => {
    try {
        const { file, subtitle } = req.body;
        const { user_id } = req.params;

        await Status.sync();

        await Status.create({file, subtitle, user_id})
        return res.status(201).json({message: "status criado com sucesso"});
    } catch (error) {
        return res.status(400).json({messageError: error.message});
    }
}

// necessita de saber quem é o usuario que esta querendo
// visualizar os status
export const getAllStatus = async (req,res) => {
    const { user_id } = req.query;
    const status = await Status.findAll({
        where: {
            user_id
        }
    });

    // apenas amigos podem visualizar status?
    // apenas amigos podem mandar mensagem?
    return res.status(200).json({status});
}