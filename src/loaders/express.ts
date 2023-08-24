
import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import routes from "../api/index";
import config from "../config/index";

const expressLoader = () => {
  const app = express();

  app.get("/status", (req, res) => {
    res.status(200).end();
  });

  app.head("/status", (req, res) => {
    res.status(200).end();
  });

 
  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  // Load API routes
  app.use(config.api.prefix, routes());


  app.use((req, res, next) => {
    const err = new Error("Not Found");
    res.status(404);
    next(err);
  });

 
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    return next(err);
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });

  return app;
};

export default expressLoader;
