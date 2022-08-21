// this file contains the user-facing routes 
// such as the homepage and login

const router = require('express').Router();

router.get('/', (req, res) => {
    // render to specify the template we want to use homepage in this instance
    res.render('homepage');
});

module.exports = router;
