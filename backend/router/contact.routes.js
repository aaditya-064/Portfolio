import express from "express";

const router = express.Router();
import { postInfo, getInfo } from "../controller/contact.controller.js";

router.post("/post", postInfo);
router.get("/get", getInfo);

export default router;
