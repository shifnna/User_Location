
const Location = require("../model/locationSchema.js")

const createLocation = async (req, res) => {
    try {
        const { username, latitude, longitude } = req.body;
        if (!username || latitude == null || longitude == null) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newLocation = new Location({ username, latitude, longitude });
        await newLocation.save();
        res.status(201).json({ message: "Location saved successfully", data: newLocation });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}


const getLocations =  async (req, res) => {
    try {
        const locations = await Location.find();
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

module.exports={
    createLocation,
    getLocations
}