// @desc    Get All bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
}

// @desc    Create bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamps' });
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: `Update bootcamps ${req.params.id}` });
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: `Delete bootcamps ${req.params.id}` });
}
