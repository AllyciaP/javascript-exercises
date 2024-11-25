const repeatString = function (word = '', number = 3) {

    let newWord = '';

    if (number < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < number; i++) {

            newWord = newWord + word;
        }
    }
    return newWord;
}


// Do not edit below this line
module.exports = repeatString;
