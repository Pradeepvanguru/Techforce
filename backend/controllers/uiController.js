const UILayout = require('../models/UILayout'); // Import the UILayout schema

// Fetch the UI layout for a specific page
exports.getUILayout = async (req, res) => {
    const { pageType } = req.params; // Expecting a pageType parameter in the request

    try {
        const layout = await UILayout.findOne({ pageType });
        if (!layout) {
            return res.status(404).json({ message: 'UI Layout not found' });
        }
        res.status(200).json(layout);
    } catch (error) {
        console.error('Error fetching UI Layout:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Create or update a UI layout
exports.saveUILayout = async (req, res) => {
    const { pageType, layoutJSON } = req.body;

    try {
        // Check if a layout for this page type already exists
        let layout = await UILayout.findOne({ pageType });

        if (layout) {
            // Update existing layout
            layout.layoutJSON = layoutJSON;
            layout.updatedAt = Date.now();
        } else {
            // Create a new layout
            layout = new UILayout({
                pageType,
                layoutJSON,
            });
        }

        // Save to the database
        await layout.save();
        res.status(200).json({ message: 'UI Layout saved successfully', layout });
    } catch (error) {
        console.error('Error saving UI Layout:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a UI layout
exports.deleteUILayout = async (req, res) => {
    const { pageType } = req.params;

    try {
        const layout = await UILayout.findOneAndDelete({ pageType });

        if (!layout) {
            return res.status(404).json({ message: 'UI Layout not found' });
        }

        res.status(200).json({ message: 'UI Layout deleted successfully' });
    } catch (error) {
        console.error('Error deleting UI Layout:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
