/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km'];
    let validFraction = /^([1-9]\d*(\.\d+)?)[/](\d+(\.\d+)?)$/ //regex match fractions
    let validDecimal = /^\d+(\.\d+)?$/ //regex match decimals
    let number = input.split(/([a-zA-z]+$)/); // split letters from numbers
    number = number.filter(Boolean) // remove empty or white space
    let result = number[0];
    
    //if a number is a valid decimal or number,
    //return number
    if(validDecimal.test(result)) {
      result = Number(number[0])
    //if a number is a fraction, split two numbers between
    //division sign and return fraction
    } else if(validFraction.test(result)) {
        let seperate = result.split('/');
        let fraction = Number(seperate[0]) / Number(seperate[1]);
        result = fraction;
    //if first index of split array is one of the units,
    //return number with 1
    } else if(units.includes(result)) {
        result = 1
    } else {
        result = 'invalid number'
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km'];
    let letter = input.split(/([a-zA-z]+$)/); //split letters between numbers
    letter = letter.filter(Boolean); //remove empty or white space
    let inputUnit = letter[letter.length - 1];
    
    //if no units matches units inside array,
    //return invalid unit
    let unit = inputUnit.toLowerCase();
    if(!units.includes(unit)) {
      return 'invalid unit'
    }
    
    return inputUnit;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    var input = ["mi", "km", "lbs", "kg", "gal", "L"];
    var output = ["km", "mi", "kg", "lbs", "L", "gal"];
    
    let indexOfInput = input.indexOf(initUnit);
    
    if(indexOfInput >= 0) 
      result = output[indexOfInput];
    else 
      result = "invalid unit"
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    unit = unit.toLowerCase();
    var input = ["mi", "km", "lbs", "kg", "gal", "l"];
    var output = ["miles", "kilometers", "pounds", "kilograms", "gallons", "litres"];
    let indexOfInput = input.indexOf(unit);
    if(indexOfInput >= 0) 
      result = output[indexOfInput];
    else 
      result = "invalid unit"
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const convert = {
      gal: 3.78541,
      L: 1/3.78541,
      lbs: 0.453592,
      kg: 1/0.453592,
      mi: 1.60934,
      km: 1/1.60934
    }
    
    var conversion = parseFloat (initNum * convert[initUnit]).toFixed(5)
    if (initNum == "invalid number" && initUnit == "invalid unit") {
      return "invalid number and unit";
    }
    else if (initNum == "invalid number") {
      return "invalid number";
    }
    else if (initUnit == "invalid unit") {
      return "invalid unit";
    }
    else {
      return conversion;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  };
  
}

module.exports = ConvertHandler;
