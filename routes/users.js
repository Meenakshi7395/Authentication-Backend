import express from "express";
import validator from 'express-validator';
import { authenticateJWT, loginUser } from "../controllers/users.js";
const  { body } = validator;

const router = express.Router();

import { createUser,getAllUsers,getUserById,updateUser,deleteUser} from "../controllers/users.js";

// Routes
router.post('/login',loginUser);
router.get('/', getAllUsers);
router.post('/',createUser);
router.get('/:id', getUserById);
router.patch('/:id',updateUser);
router.delete('/:id', deleteUser);

export default router;