// store.controller.js
import { status } from '../../config/reponse.status.js';
import {CheckFlag, getTempData} from '../services/temp.service.js';
import { response } from '../../config/reponse.js';
import {getReview} from "../providers/store.provider.js";
// store.controller.js

export const reviewPreview = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getReview(req.params.storeId, req.query)));
}