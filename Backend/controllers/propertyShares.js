
const Property = require("../models/property");
const Share = require("../models/shares");



module.exports.createShare = async (req, res) => {
    try {
        const { landId, price, percentage } = req.body;
        const share = new Share({
            landId,
            price,
            percentage
        });
        await share.save();
        res.status(201).json({ message: "Share created successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports.createProperty = async (req, res) => {
    try {
        const { title, description, price, location, image, size, whyInvest, tenancy, calculator, shares,landId } = req.body;
        const property = new Property({
            title,
            description,
            price,
            location,
            image,
            size,
            whyInvest,
            tenancy,
            calculator,
            landId,
            shares
        });
        await property.save();

        res.status(201).json({ message: "Property created successfully" });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
}

module.exports.getProperty = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
