var util = require('./libs/util')
var fs = require('fs')
 
module.exports = function (filePath) {
		var count = 0
	return function* (next){
		if (!filePath) {
			console.log('err No filePath')
			return
		}
		fs.stat(filePath, function (err, stats) {
		   if (err) {
				fs.open(filePath,'w+',function(err, fd) {
					fs.write(fd, '1',function(){
						fs.close(fd, function(err){
				         if (err){
				            console.log(err);
				         } 
         				console.log("文件关闭成功");
      					})
					})
				})
				count = 1
		   }else{
		   	util.readFileAsync(filePath)
			.then((data) => {
				var data = parseInt(data)
				data ++
				util.writeFileAsync(filePath,data)
				count = data
				return
					})
				}
		})
		this.body = count	
	}
}
