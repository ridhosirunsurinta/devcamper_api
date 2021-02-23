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
const { protect } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(advancedResults(Course, 'bootcamp'), getCourses)
  .post(protect, createCourse); // Protected Route

router
  .route('/:id')
  .get(getCourse)
  .put(protect, updateCourse) // Protected Route
  .delete(protect, deleteCourse); // Protected Route

module.exports = router;
