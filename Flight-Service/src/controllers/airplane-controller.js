const {StatusCodes} = require('http-status-codes'); 
const {AirplaneService} = require('../services');
const {SuccessResponse, ErrorResponse } = require('../utils/common');


/**
 * POST: /airplanes
 * req-body{moduleNumber: 'airbus320', capacity: 200}
 */

async function createAirplane(req, res){
    try{
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    } 
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * GET /airplanes
 */
async function getAirplanes(req, res){
    try{
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
        
    } catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * GET: /airplanes/:id
 */

async function getAirplane(req, res){
    try{
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
        
    } catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * DELETE : /airplanes/:id
 */

async function destroyAirplane(req, res){
    try{
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
        
    } catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


async function updateAirplane(req, res){
    try{
        const updatedAirplane = await AirplaneService.updateAirplane(req.params.id, {
            capacity: req.body.capacity
          });
        SuccessResponse.data = updatedAirplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
        
    } catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}