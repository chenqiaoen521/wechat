'use strict'
var Koa = require('koa')
var path = require('path')
var middle = require('./day2-middle')
var app = new Koa()
var filePath = path.join(__dirname, './count.txt')
app.use(middle(filePath))
app.listen(80)
console.log('listening on :80')