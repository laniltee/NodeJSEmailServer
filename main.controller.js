var express = require('express'),
    router = express.Router(),
    students_controller = require('./students.controller'),
    teachers_controller = require('./teachers.controller');

router.use('/students', require('./students.controller'));
router.use('/teachers', require('./teachers.controller'));

router.get('/', function(req, res) {
	console.log('router.default.route');
    res.end('router.default.route');
});

module.exports = router;