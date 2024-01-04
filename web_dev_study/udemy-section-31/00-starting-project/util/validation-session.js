function getSessionErrorData(req, defaultValues) {
   let sessionInputData = req.session.inputData;

   if (!sessionInputData) {
      sessionInputData = {
         hasError: false,
         ...defaultValues,
      };
   }

   req.session.inputData = null;

   return sessionInputData;
}

function flashErrorSession(req, data, action) {
   req.session.inputData = {
      hasError: true,
      ...data,
   };

   req.session.save(action);
}

module.exports = {
   getSessionErrorData: getSessionErrorData,
   flashErrorSession: flashErrorSession,
};
