const express = require('express');
const {
  registerUser,
  loginUser,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
} = require('../controllers/auth');
const { protect } = require('../middleware/auth')

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe); // Protected Route
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);
router.put('/updatedetails', protect, updateDetails); // Protected Route
router.put('/updatepassword', protect, updatePassword); // Protected Route

module.exports = router;
