// promise way
const asyncHandler = (requestHandler) => {
   (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
   };
};

// another way is to use asyn await, for that we one step deeper function
const asyncHandler2 = (fn) => async (req, res, next) => {
   try {
      await fn(req, res, next);
   } catch (error) {
      res.status(err.code || 500).json({
         success: false,
         message: err.message,
      });
   }
};

// not passing the second async handler.
module.exports = asyncHandler;
