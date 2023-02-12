import "dotenv/config";

import express from "express";

import routes from "./routes";
import { logger } from "./utils/logger";

const app: express.Express = express();
routes.init(app);

const port = process.env.PORT || 3000;
app.listen(port, () => logger.info(`listening on port ${port}`));
