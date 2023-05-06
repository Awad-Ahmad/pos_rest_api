exports.errorHandler = (err, req, res, next) => {
  res.status(err.statuesCode || 500).json({
    success: false,
    error: err.message || "Server Error",
  });
};
