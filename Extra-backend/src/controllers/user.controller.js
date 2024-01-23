const asyncHandler = require("../utils/async-handler");

const register = asyncHandler(async (req, res, next) => {
   res.status(200).json({
      message: "ok",
   });
});

module.exports = {
   register,
};
