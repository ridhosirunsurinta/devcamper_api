const express = require('express');
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courses');
const Course = require('../models/Course');
const advancedResults = require('../middleware/advancedResults')
const { protect, authorize } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(advancedResults(Course, 'bootcamp'), getCourses)
  .post(protect, authorize('publisher', 'admin'), createCourse); // Protected Route

router
  .route('/:id')
  .get(getCourse)
  .put(protect, authorize('publisher', 'admin'), updateCourse) // Protected Route
  .delete(protect, authorize('publisher', 'admin'), deleteCourse); // Protected Route

module.exports = router;
