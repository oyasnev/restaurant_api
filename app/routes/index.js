const Router = require('koa-router');
const router = new Router();
const Restaurant = require('../models/restaurant');

// ToDo: data validation and sanity checks

router.post('/add', async (ctx) => {
    try {
        const req = ctx.request.body;
        const newRest = new Restaurant();
        newRest.name = req.name;
        newRest.address = req.address;
        newRest.cuisine = req.cuisine || [];
        newRest.lon = req.lon;
        newRest.lat = req.lat;

        await newRest.save();

        ctx.body = {
            status: 'success',
            data: newRest
        }
    } catch (err) {
        ctx.body = {
            status: 'error',
            message: 'could not add the item'
        }
    }
});

router.get('/get/:id', async (ctx) => {
    try {
        const rest = await Restaurant.findById(ctx.params.id);
        ctx.body = {
            status: 'success',
            data: rest
        };
    } catch (err) {
        ctx.body = {
            status: 'error',
            message: 'not found'
        }
    }
});

router.get('/get/viewport/:lon1/:lat1/:lon2/:lat2', async (ctx) => {
    try {
        const rest = await Restaurant.find({ 
            lon: {$gte: ctx.params.lon1, $lte: ctx.params.lon2},
            lat: {$gte: ctx.params.lat1, $lte: ctx.params.lat2}
        });
        ctx.body = {
            status: 'success',
            data: rest
        };
    } catch (err) {
        ctx.body = {
            status: 'error',
            message: 'not found'
        }
    }
});

router.put('/update/:id', async (ctx) => {
    try {
        const req = ctx.request.body;
        let rest = {};
        if (req.name !== undefined) {
            rest.name = req.name;
        }
        if (req.address !== undefined) {
            rest.address = req.address;
        }
        if (req.cuisine !== undefined) {
            rest.cuisine = req.cuisine;
        }
        if (req.lon !== undefined) {
            rest.lon = req.lon;
        }
        if (req.lat !== undefined) {
            rest.lat = req.lat;
        }
        if (req.rating !== undefined) {
            rest.rating = req.rating;
        }
        if (req.votes !== undefined) {
            rest.votes = req.votes;
        }
        rest = await Restaurant.findByIdAndUpdate(ctx.params.id, rest, { new: true });
        ctx.body = {
            status: 'success',
            data: rest
        }
    } catch (err) {
        ctx.body = {
            status: 'error',
            message: 'could not update the item'
        }
    }
});

module.exports = router;