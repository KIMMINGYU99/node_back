const successResponse = (res, statusCode = 200, message = "OK", data = {}) =>
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });

const failResponse = (
  res,
  statusCode = 404,
  message = "Fail",
  code = "실패",
  details = "아무튼 실패"
) =>
  res.status(statusCode).json({
    success: false,
    message,
    error: {
      code,
      details,
    },
  });

module.exports = { failResponse, successResponse };
