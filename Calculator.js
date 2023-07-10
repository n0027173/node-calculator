class Calculator {
     addNumbers = (num1, num2) => { 
        return num1 + num2; 
      }; 
      subtractNumbers = (num1, num2) => { 
        return num1 - num2; 
      }; 
      multiplyNumbers = (num1, num2) => { 
        return num1 * num2; 
      };
      divideNumbers = (num1, num2) => { 
        return num1 / num2; 
      };
      areaOfCircle = (num1) => { 
        return num1 * num1 * 3.14; 
      };
      areaOfRectangle = (num1, num2) => { 
        return num1 * num2; 
      };   
}

module.exports = Calculator;