import mongoose from "mongoose";


export const UserSchema = mongoose.Schema({
    username: {type: String, require: true},
    password: {type: String, require: true},
    email: {type: String, require: true},
});

export const User = mongoose.model("Users", UserSchema);