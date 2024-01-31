import User from "../model/user.model.js";


const createUser = async (req, res) => {
    try {
        const { name, email, gender, address, literate } = req.body;

        const user = await User.create({name, email, gender, address, literate})

        res.send(user)        
    } catch (error) {
        console.log(error)
    }
}


const fetchUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll({
            offset: 2,
            limit: 2
        })

        res.status(200).send(allUsers)
    } catch (error) {
        console.log(error)
    }
}


const fetchUser = async (req, res) => {
    const { id } = req.params;

    try {
        const oneUser = await User.findAll({
            where: {
                id
            }
        })

        res.status(200).send(oneUser)
    } catch (error) {
        console.log(error)
    }
}


const editUser = async (req, res) => {
    const { id } = req.params;

    try {
        const updateUser = await User.update(req.body, {
            where: {
                id
            }
        });
        if (!updateUser) return res.status(404).send(`user with id ${id} not found`)

        res.status(200).send({message: 'this user has been updated'})
    } catch (error) {
        console.log(error)
    }
}    


const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteUser = await User.destroy({
            where: {
                id
            }
        });
        if (User.length<1)return res.status(404).send(`user with id ${id} not found`)

        res.status(200).send({message: 'user has been deleted successfully'});
    } catch (error) {
        console.log(error)
    }
}


export default {
    createUser,
    fetchUsers,
    fetchUser,
    editUser,
    deleteUser
}