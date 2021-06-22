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

async function itemId(req, res){
    let responseData = [];
    let  oDataResponse = {};
    const id = req.params.id;
    const meliIdProductEndpoint = `https://api.mercadolibre.com/items/${id}`;
    const meliDescriptionProductsEndpoint = `https://api.mercadolibre.com/items/${id}/description`;
    request(meliIdProductEndpoint, function (error, response, body) {
        if (!error){
            const oData = JSON.parse(body);
            oDataResponse['a'] = oData;
            request(meliDescriptionProductsEndpoint, function (error, response, body) {
                if (!error){
                    const oData2 = JSON.parse(body);
                    oDataResponse['b'] = oData2;
                    oResponse.success(req, res, oDataResponse, null);
                    return;
                    }else{
                        oResponse.error(req, res, 'Error');
                    return;
                }    
            });
        }else{
            oResponse.error(req, res, 'Error');
            return;
        }
    });
}

module.exports = {
    search,
    itemId
}