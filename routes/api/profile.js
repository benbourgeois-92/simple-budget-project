const express = require('express');
const router = express.Router();


//GET api/users
//Test route
//Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;