const convertToCelsius = function (tempF) {
  let convertedTemp;
  let newTemp;
  convertedTemp = (tempF - 32) * (5 / 9);

  newTemp = parseFloat(convertedTemp.toFixed(1));

  return newTemp;

};

const convertToFahrenheit = function (tempC) {
  let convertedTemp;
  let newTemp;

  convertedTemp = (tempC * (9 / 5) + 32);

  newTemp = parseFloat(convertedTemp.toFixed(1));

  return newTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
