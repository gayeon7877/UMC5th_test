// src/routes/store.route.js
import {reviewPreview} from "../controllers/store.controller.js";
import express from "express";
import asyncHandler from 'express-async-handler'; // 추가한 부분

export const storeRouter = express.Router({mergeParams: true});

storeRouter.get('/reviews', asyncHandler(reviewPreview));
