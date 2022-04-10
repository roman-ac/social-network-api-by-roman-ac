const router = require('express').Router();

const {
    getAllUsers
    
} = require('../../controllers/user-controller');

// Directs to: /api/users <GET, POST>
router.route('/').get(getAllUsers);






module.exports = router;
