var request = require('request');
var config = require('../config/config');

module.exports = function(app) {
    app.get('/', function(req, res) {
        var options = {
            headers: { "Connection": "close" },
            url: config.baseUrl,
            method: 'get',
            json: true
        };
        request(options, function(err, response, data) {
            console.log(data);
            res.send(data);
        })
    })

    app.get('/girl/:page/:perpage', function(req, res) {
    	var options = {
            headers: { "Connection": "close" },
            url: 'http://122.112.244.235/girl.php?p=' + req.params.page + '&perpage=' + req.params.perpage,
            method: 'get',
            json: true
        };
        request(options, function(err, response, data) {
            console.log(data);
            res.send(data);
        })
    })
}
