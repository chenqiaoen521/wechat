'use strict'
var Koa = require('koa')
var path = require('path')
var wechat = require('./wechat/g')
var util = require('./libs/util')
var wechat_file = path.join(__dirname, './config/wechat.txt')
var config = {
	wechat: {
		appID: 'wx662f1d3348a3fd1a',
		appSecret: '73d458579f96b44e11ab2f644bac4eeb',
		token: 'imooc274078815',
		getAccessToken () {
			return util.readFileAsync(wechat_file)
		},
		saveAccessToken (data) {
			data = JSON.stringify(data)
			return util.writeFileAsync(wechat_file, data)
		}
	}
}

var app = new Koa()
app.use(wechat(config))
app.listen(1234)
console.log('listening on : 1234')