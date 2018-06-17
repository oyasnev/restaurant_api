const Router = require('koa-router');
const router = new Router();
const Restaurant = require('../models/restaurant');

router.post('/add', async (ctx) => {
    try {
        const req = ctx.request.body;
        const newRest = new Restaurant();
        newRest.name = req.name;        
        newRest.cuisine = req.cuisine || [];
        newRest.lon = req.lon;
        newRest.lat = req.lat;
        
        await newRest.save();

        ctx.status = 201;
        ctx.body = {
            status: 'success',
            data: newRest
        }
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;