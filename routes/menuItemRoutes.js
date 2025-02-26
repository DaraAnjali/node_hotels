const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// POST - Add a new menu item
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('Menu item saved:', response);
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET - Retrieve all menu items
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('All menu items fetched:', data);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:taste', async (req, res) => {
    try {
        const tasteType = req.params.taste.toLowerCase();
        if (["sweet", "spicy", "sour"].includes(tasteType)) {
            const response = await MenuItem.find({ taste: tasteType });
            console.log('Response fetched:', response);
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid taste type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const menuItemId = req.params.id;
        const updatedData = req.body;
        const response = await MenuItem.findByIdAndUpdate(menuItemId, updatedData, { new: true });

        if (!response) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        console.log('Menu item updated:', response);
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE - Remove a menu item by ID
router.delete('/:id', async (req, res) => {
    try {
        const menuItemId = req.params.id;
        const response = await MenuItem.findByIdAndDelete(menuItemId);

        if (!response) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        console.log('Menu item deleted:', response);
        res.status(200).json({ message: 'Menu item deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//anjali
module.exports = router;
