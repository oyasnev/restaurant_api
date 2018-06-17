const koa = require('koa');
const db = require('./config/db');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const routes = require('./app/routes/index');

const app = module.exports = new koa();
const port = 8000;

// connect to db
// use Mongo as 1) it suits very well for storing POIs
// 2) at free2move you use Mongo, so I decided to try it out
mongoose.connect(db.url);
if (db.importData) {
    require('./app/data/import_data').importData();
}

app.use(bodyParser());

// ToDo: when adding other POIs separate routes correspondingly
app.use(routes.routes());

// listen
app.listen(port, () => {
    console.log('Listening on port ' + port);
});