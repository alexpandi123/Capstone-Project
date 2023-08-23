import express from "express";
import 'dotenv/config';
import cors from "cors";

import { initDB } from "./config/database.js";
import { loggingMiddleware } from "./Middlewares/logging.js";

import { router as weaponRouter } from "./Routes/weapon.js";
import { router as userRouter} from "./Routes/user.js"
import { errorHandling } from "./Middlewares/errorHandling.js";


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
app.use("/users", userRouter);

//

app.all("*", (request, response) => {
    response.statusCode = 404;
    response.send('Not Found');
});

app.use(errorHandling);

app.listen(process.env.APP_PORT, () => {
    console.log(`Listening on port ${process.env.APP_PORT}`);
});