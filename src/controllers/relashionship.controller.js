import { Relashionship } from "../models/Relashionship.model.js";

export const createRelashionship = async (req, res) => {
    try {
        const { first_user_id, second_user_id, type } = req.body;
        console.log(type);
        await Relashionship.sync({force: true});

        
        await Relashionship.create({ first_user_id, second_user_id, type });
        return res.status(201).json({ message: "voces sao amigos" })

    } catch (error) {
        return res.status(400).json({ messageError: error.message })
    }
}

export const verifyRelashionship = async(first_user_id, second_user_id) =>{
    const result = await Relashionship.findOne({ 
        where: {
            first_user_id, second_user_id
        }
    });
    return result ? true : false;
}