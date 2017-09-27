var express = require('express'),
    router = express.Router(),
    Teacher = require('./teachers.model.js'),
    nodemailer = require('nodemailer');


router.get('/', function(req, res) {
    console.log('teachers.default.route');
    // var result = Teacher.helloTeacher();
    // console.log("result is " + result);
    //    res.end(result);
    Teacher.helloTeacher(function(response) {
        console.log("result is " + response);
        res.end(response);
    });
});

router.get('/mail', function(req, res) {
    console.log('/teachers/mail');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dilshansurantha@gmail.com',
            pass: 'dilshansurantha2010'
        }
    });

    var mailOptions = {
        from: 'ttesting.android@gmail.com',
        to: 'lanilmail@gmail.com',
        subject: 'DOM Content',
        text: 'That was easy!',
        html: '<table><tr><th>Firstname<th>Lastname<th>Age<tr><td>Jill<td>Smith<td>50<tr><td>Eve<td>Jackson<td>94</table>'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.status(500).end();
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).end();
        }
    });
});

module.exports = router;