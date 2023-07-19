import mongoose from "mongoose";

export const initDB = () => {
    mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@capstone-project.4mbjvxa.mongodb.net/`
    )
};