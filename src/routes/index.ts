import cors from "cors";
import express from "express";

import { loggerHttp } from "../utils/logger";
import api from "./api.route";

function init(app: express.Express) {
  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(loggerHttp);

  // Static Files
  app.use("/assets", express.static("assets"));

  // Routes
  app.use("/api", api);

  app.use((req, res, next) => res.sendStatus(404));
}

export default { init };
