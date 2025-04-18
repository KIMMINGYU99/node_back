const successResponse = (message, data = null) => {
  return {
    success: true,
    message,
    data,
  };
};

const errorResponse = (message) => {
  return {
    success: false,
    message,
  };
};
module.exports = { errorResponse, successResponse };
