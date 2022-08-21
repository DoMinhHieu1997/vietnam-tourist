
exports.customError = ({code, message}) => {
   const error = new Error(message);
   error.status = code;
   return error;
};
