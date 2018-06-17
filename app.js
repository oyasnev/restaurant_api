const koa = require('koa');
const db = require('./config/db');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const routes = require('./app/routes/index');

const app = module.exports = new koa();
const port = 8000;

// connect to db
mongoose.connect(db.url);

app.use(bodyParser());

app.use(routes.routes());

// listen
app.listen(port, () => {
    console.log('Listening on port ' + port);
});