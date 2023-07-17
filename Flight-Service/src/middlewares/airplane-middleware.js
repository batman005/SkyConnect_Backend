const { StatusCodes } = require("http-status-codes");
const {ErrorResponse} = require('../utils/common');
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req,res, next){
    if(!req.body.modelNumber){
        ErrorResponse.message =  'Something went wrong while creating airplane';
        ErrorResponse.error = new AppError(['ModelNumber not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST) 
                .json(ErrorResponse);
    }
    next();
}
function validateUpdateRequest(req, res, next) {
    if(!req.body.capacity) {
        ErrorResponse.message = 'Something went wrong while updateing airplane';
        ErrorResponse.error = new AppError(['Capacity not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}


module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}