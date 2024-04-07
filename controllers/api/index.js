const router = require('express').Router();
const userRoutes = require('./userRoutes');
const noteRoutes = require('./noteRoutes');

// Prefix all routes defined in `userRoutes.js` with `/users
router.use('/users', userRoutes);
// Prefix all routes defined in `noteRoutes.js` with `/notes
router.use('/notes', noteRoutes);

module.exports = router;