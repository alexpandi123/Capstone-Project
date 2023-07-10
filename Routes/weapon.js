import express, { request, response }  from "express";
import { Weapon } from "../Models/weapon.js";
import { RESERVATIONS_PAGE_SIZE } from "../config/constants.js";

export const router = express.Router();


// GET
router.get("/", async (request, response) => {
    response.setHeader("Content-Type", "application/json");
    
    const page = request.query.page || 1;

    const projectionExpression = {
        __v: 0,
        modifiedAt: 0,
    };

    const weapons = await Weapon
    .find({}, projectionExpression)
    .sort({name: 1})
    .skip((page - 1) * RESERVATIONS_PAGE_SIZE)
    .limit(RESERVATIONS_PAGE_SIZE);

    if(weapons.length > 1) {
        console.log(`Fetched ${weapons.length} weapons`);
    } else {
        console.log(`Fetched ${weapons.length} weapon`);
    }

    response.send(JSON.stringify(weapons));
});

router.get("/:weaponId", async (request, response) => {
    response.setHeader("Content-Type", "application/json");

    const weapon = await Weapon.find({ _id: request.params.weaponId});

    response.send(JSON.stringify(weapon));
});


// POST
router.post("/add-weapon", async (request, response) => {
    const { name, countryOfOrigin, designYear, effectiveFiringRange, rateOfFire, type, description } = request.body;
    console.log(request.body);

    const weapon = new Weapon({name, countryOfOrigin, designYear, effectiveFiringRange, rateOfFire, type, description});
    await weapon.save();

    response.send("Weapon Added successfully!");
});


//PUT
router.put("/:weaponId", async (request, response) => {
    const weaponData = request.body;

    await Weapon.updateOne({ _id: request.params.weaponId}, {...weaponData, modifiedAt: new Date()});

    response.send("Entry updated");
});


//DELETE
router.delete("/:weaponId", async (request, response) => {
    const weapon = await Weapon.deleteMany({ _id: request.params.weaponId});

    response.send(`Deleted ${weapon.deletedCount} entry`);
});