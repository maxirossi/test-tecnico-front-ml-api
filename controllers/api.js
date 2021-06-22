const Response = require('../helpers/response').Response;
const oResponse = new Response();
const helpers = require('../helpers/helpers');
const request = require('request');

function search(req, res){
    let responseData = [];
    const q = req.query.q;
    const meliSearchProductsEndpoint = `https://api.mercadolibre.com/sites/MLA/search?q=${q}`;
    request(meliSearchProductsEndpoint, function (error, response, body) {
        if (!error){
            const oData = JSON.parse(body);
            oResponse.success( req, res, oData, null );
            return;
            oResponse.success( req, res, body, null );
        }else{
            oResponse.error(req, res, 'Error');
        }
    });
    
}

module.exports = {
    search
}