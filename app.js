const koa = require('koa');
const app = module.exports = new koa();



// listen
app.listen(8000);
console.log('Listening on port 8000');