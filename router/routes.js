import express from "express";
import userController from "../controller/user.controller.js";
// import { createUser } from '../controller/user.controller'


const router = express.Router()


router.post('/users', userController.createUser)

router.get('/users', userController.fetchUsers)

router.get('/user/:id', userController.fetchUser)

router.put('/user/:id', userController.editUser)

router.delete('/user/:id', userController.deleteUser)


export default router