import mongoose from "mongoose";

export const initDB = () => {
    mongoose.connect(
        `mongodb+srv://testingclusteralex:JlGltFmPXwUzC7Ff@capstone-project.4mbjvxa.mongodb.net/`
    )
};