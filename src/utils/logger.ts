import pino from "pino";
import pinoHttp from "pino-http";

const isProd = process.env.NODE_ENV === "production";

const config: pino.LoggerOptions = {
  level: "debug",
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "yyyy-mm-dd HH:MM:ss Z",
      ignore: "pid,hostname",
    },
  },
};

export const logger = pino(isProd ? {} : config);
export const loggerHttp = pinoHttp(isProd ? {} : config);
