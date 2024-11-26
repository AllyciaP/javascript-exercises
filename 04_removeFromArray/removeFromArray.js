const removeFromArray = function(checkArr = [v1='', v2='', v3='', v4=''], r1='', r2='', r3='', r4='') {
    
     let newArr = [];

    for (let i = 0; i <= checkArr.length-1; i++) {

        if ((checkArr[i] !== r1) & (checkArr[i] !== r2) & (checkArr[i] !== r3) & (checkArr[i] !== r4)){
            newArr.push(checkArr[i]);
        }
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
