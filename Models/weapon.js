import mongoose from "mongoose";

export const weaponSchema = mongoose.Schema({
    name: {type: String, require: true},
    countryOfOrigin: {type: String, require: true},
    designYear: {type: String, require: true},
    effectiveFiringRange: {type: String, require: true},
    rateOfFire: {type: String, require: true},
    type: {type: String, require: true},
    description: {type: String, require: true},
    image: {type: String, require: true},
    modifiedAt: Date,
});

export const Weapon = mongoose.model("Weapons", weaponSchema);