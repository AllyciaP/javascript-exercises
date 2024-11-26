const reverseString = function(inputStr = '') {

    const arrayStr = [];

    for (let i = 0; i <=inputStr.length - 1; i++) {

        arrayStr[i] = inputStr[i];
    }

    let revStr = '';

    for (let i = arrayStr.length-1; i >= 0; i--) {

        revStr += arrayStr[i];
    }

    return revStr;

};

// Do not edit below this line
module.exports = reverseString;
