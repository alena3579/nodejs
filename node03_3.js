const { odd, even } = require('./node03_2');
const checkNumber = require('./node03');

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    }
    return even;
}

console.log('checkNumber : '+checkNumber(10));
console.log('checkStringOddOrEven : '+checkStringOddOrEven('Hello'));

/*  결과
    홀수입니다   => require 하는 것만으로도 불러온 파일을 전체 실행함.?
    짝수입니다
    checkNumber : 짝수입니다
    checkStringOddOrEven : 홀수입니다
*/