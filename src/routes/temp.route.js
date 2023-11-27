import express from 'express';
import {tempException} from "../controllers/temp.controller.js";
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

// temp.route.js
router.get('/exception/:flag', tempException);
export default router;
