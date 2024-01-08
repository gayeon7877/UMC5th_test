// health.route.js

import express from "express";
import { healthController } from "../controllers/health.controller";

export const healthRoute = express.Router();

healthRoute.get('', healthController)