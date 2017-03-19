'use strict'
let Koa = require('koa')

let app = new Koa()
app.use(function *(next) {
	console.log(this.query)
	this.body = this.query.echo
})
app.listen(80)
console.log('listening on :80')