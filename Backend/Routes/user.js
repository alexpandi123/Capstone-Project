import express, { request, response }  from "express";
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
router.post("/add-new-user", async (request, response) =>{
    response.setHeader("Content-Type", "application/json");

    const { username, password } = request.body;
    const user = new User({username, password});
    await user.save();

    response.send("User Added succesfully!");
});

//PUT
router.put("/:userId", async (request, response) => {
    const userData = request.body;

    await User.updateOne({ _id: request.params.userId}, {...userData, modifiedAt: new Date()});

    response.send("Entry updated");
});

//DELETE
router.delete("/:userId", async (request, response) => {
    const user = await user.deleteMany({ _id: request.params.userId});

    response.send(`Deleted ${user.deletedCount} entry`);
});