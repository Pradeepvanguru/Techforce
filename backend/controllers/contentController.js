const Stack = require('../config/contentstack');

// Fetch content for a given content type
const getContent = async (req, res) => {
    const { contentType } = req.params;

    try {
        const Query = Stack.ContentType(contentType).Query();
        const data = await Query.toJSON().find();
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch content", error });
    }
};

// Fetch UI specification (layout JSON)
const getUILayout = async (req, res) => {
    try {
        const Query = Stack.ContentType('ui_layout').Query();
        const layout = await Query.toJSON().find();
        
        res.status(200).json(layout);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch UI layout", error });
    }
};

module.exports = {
    getContent,
    getUILayout
};
