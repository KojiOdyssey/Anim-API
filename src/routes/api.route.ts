import express from "express";

import apiController from "../controllers/api.controller";

const router: express.Router = express.Router();

router.get("/", apiController.get);
router.get("/:action", apiController.getAction);
router.post("/", apiController.post);
router.put("/", apiController.put);
router.delete("/", apiController.remove);

export default router;
