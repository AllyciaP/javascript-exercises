const sumAll = function (first, end) {

    let sum = 0;

    if (!Number.isInteger(first) || !Number.isInteger(end)) {
        sum = 'ERROR';
    } else {
        if (first < 0 || end < 0) {
            sum = 'ERROR';
        } else {
            if (first > end) {
                for (let i = end; i <= first; i++) {
                    sum += i;
                }
            } else {
                for (let i = first; i <= end; i++) {
                    sum += i;
                }
            }
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
