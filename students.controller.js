var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
	console.log('students.default.route');
    res.end('students.default.route');
});

module.exports = router;