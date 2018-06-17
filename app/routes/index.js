const Router = require('koa-router');
const router = new Router();
const Restaurant = require('../models/restaurant');

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
        console.log(err);
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
        console.log(err)
    }
})

module.exports = router;