import express, { Request, Response } from "express";
import login from "./login.route";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/login", login);

export default app;
