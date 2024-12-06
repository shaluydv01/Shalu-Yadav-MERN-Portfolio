import express from "express";
import { contact }  from "../controllers/user.js"

const router = express.Router();


//User signUp
router.post("/contact", contact);


export default router;