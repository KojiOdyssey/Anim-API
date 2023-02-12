import { Request, Response } from "express";

import fs from "node:fs";
import path from "node:path";

function get(req: Request, res: Response) {
  const assetsPath = path.join(process.cwd(), "assets");

  let files: string[];
  try {
    files = fs.readdirSync(assetsPath);
  } catch {
    res.sendStatus(400);
    return;
  }

  res.send({
    actions: files,
    baseUrl: `${req.protocol}://${req.headers.host}/api/:action`,
    method: "GET",
  });
}

function getAction(req: Request, res: Response) {
  const actionPath = path.join(process.cwd(), "assets", req.params.action);

  let files: string[];
  try {
    files = fs.readdirSync(actionPath);
  } catch {
    res.sendStatus(400);
    return;
  }

  const idx = Math.floor(Math.random() * files.length);
  const fileName = files[idx];

  res.send({
    action: req.params.action,
    url: `${req.protocol}://${req.headers.host}/assets/${req.params.action}/${fileName}`,
  });
}

function post(req: Request, res: Response) {
  res.send("Method not implemented.");
}

function put(req: Request, res: Response) {
  res.send("Method not implemented.");
}

function remove(req: Request, res: Response) {
  res.send("Method not implemented.");
}

export default { get, getAction, post, put, remove };
