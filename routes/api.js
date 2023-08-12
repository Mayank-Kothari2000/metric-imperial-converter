'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      
      if (!initNum && !initUnit) {
        return res.json("invalid number and unit");
      } else if (!initNum) {
        return res.json("invalid number");
      } else if (!initUnit) {
        return res.json("invalid unit");
      }
      
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    
      var response = {
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string
      };
      
      return res.json(response);
    });
    
};
