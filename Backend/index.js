import express from "express";
import 'dotenv/config';
import cors from "cors";

import { initDB } from "./config/database.js";
import { loggingMiddleware } from "./Middlewares/logging.js";

import { router as weaponRouter } from "./Routes/weapon.js";


initDB();
const app = express();

//Middlewares

app.use(cors());
app.use(express.json());
app.use(loggingMiddleware);

//

app.get('/', (request, response, next) => {
    response.statusCode = 200;
    response.send("Server is running!");
});

//Routes

app.use("/weapons", weaponRouter);

//

app.all("*", (request, response) => {
    response.statusCode = 404;
    response.send('Not Found');
});


app.listen(process.env.APP_PORT, () => {
    console.log(`Listening on port ${process.env.APP_PORT}`);
});