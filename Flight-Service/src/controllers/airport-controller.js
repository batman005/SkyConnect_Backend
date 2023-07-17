const { StatusCodes } = require('http-status-codes');
const { AirportService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


/**
 * POST: /airports
 * req-body{name: 'IGI', cityID: 5, code: 'DEL}
 */

async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId,
        });
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
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
 * GET /airports
 */
async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);

    } catch (error) {
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
 * GET: /airports/:id
 */

async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);

    } catch (error) {
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
 * DELETE : /airports/:id
 */

async function destroyAirport(req, res) {
    try {
        const airports = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airports;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}



/**
 * PATCH : /airports/:id 
 * req-body {name: Kalyani Airport,code:KLY,address:KAlyani West BEngal,cityId:3}
 */
async function updateAirport(req, res) {
    try {
        
        const airport = await AirportService.updateAirport(req.params.id,
            {
                name:req.body.name,
                code:req.body.code,
                address:req.body.address,
                cityId:req.body.cityId,
            },
        );
        SuccessResponse.data = airport;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}