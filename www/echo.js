var exec = require('cordova/exec');

var echo = {
    echo:function(callback,str) {
        exec(callback,function(err) {
			callback('Nothing to echo.');
		}, "Echo", "echo", [str]);
    }
};

module.exports = echo;