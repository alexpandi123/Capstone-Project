import express, { request, response }  from "express";
import bcrypt from "bcrypt";

import { User } from "../Models/user.js";


export const router = express.Router();


//GET
router.get("/all-users", async (request, response) =>{
    response.setHeader("Content-Type", "application/json");

    const projectionExpression = {
        __v: 0,
    };

    const users = await User.find({}, projectionExpression);

    if(users.length > 1) {
        console.log(`Fetched ${users.length} users`);
    } else {
        console.log(`Fetched ${users.length} user`);
    }

    response.send(JSON.stringify(users));
});


//POST
router.post('/register-new-user', async (request, response, next) => {
    const { username, email, password } = request.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        next({status: 400, message: "User already exists!"});
        return;
    };

    const hash = await bcrypt.hash(password, 8);

    const user = new User({ username, email, password: hash });
    await user.save();

    response.send("User Created!");
});

router.post('/login', async (request, response, next) => {
    const { email, password } = request.body;

    const user = await User.findOne({ email });

    if (!user) {
        next({ status: 400, message: "Credentials are incorrect" });
        return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        next({ status: 400, message: "Credentials are incorrect"});
        return;
    }

    response.send(`Succesfully Logged in!`);
});

//PUT
router.put("/:userId", async (request, response) => {
    const userData = request.body;

    await User.updateOne({ _id: request.params.userId}, {...userData, modifiedAt: new Date()});

    response.send("Entry updated");
});

//DELETE
router.delete("/:userId", async (request, response) => {
    const user = await User.deleteMany({ _id: request.params.userId});

    response.send(`Deleted ${user.deletedCount} entry`);
});