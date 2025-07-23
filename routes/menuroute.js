const express = require('express');
const router = express.Router();
const menuitem = require('../models/menuitem')
router.get('/', async (req, res) => {
    try {
        const data = await menuitem.find()
        console.log('data fatched ')
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
})
router.post('/', async (req, res) => {
    try {
        const data = req.body
        const menu = new menuitem(data)
        const result = await menu.save()
        console.log('item saved');
        res.status(200).json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'server error' })


    }
});
router.get('/:tastetype', async (req, res) => {
    try {
        const tastetype = req.params.tastetype;
        if (tastetype == 'spicy' || tastetype == 'sweet' || tastetype == 'sour') {
            const respond = await menuitem.find({ taste: tastetype })
            console.log('item fatched ');
            res.status(200).json(respond)
        } else {
            res.status(404).json({ error: 'not found' })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' })

    }
})
router.put('/:id', async (req, res) => {
    try {
        const menuid = req.params.id;
        const updatemenu = req.rody;
        const respond = await menuitem.findByIdAndUpdate(menuid, updatemenu, {
            new: true, 
            runValidators: true
        })
         console.log('updated');
        res.status(200).json(respond)
        if (!respond) {
            return res.status(404).json({ error: 'menu not found' })
        }
       
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' })
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const respond = await menuitem.findByIdAndDelete(id)
        console.log('item deleted');
        res.status(200).json(respond)
        if (!respond) {
            return res.status(404).json({ error: 'person not found' })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' })



    }
})
module.exports = router;