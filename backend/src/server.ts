import "reflect-metadata";

import express from "express";
import * as bodyParser from "body-parser";

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT_SERVER ? Number(process.env.PORT_SERVER) : 3333

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});