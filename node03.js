// 노드 모듈 시스템

// 선언한 변수를 다른 파일에서 사용하고 싶을때
// 기존의 js는 html에서 script로 파일을 불러와서 작성해야 사용이 가능

//노드는 require함수로 다른 script를 불러와서 사용이 가능

const { odd, even } = require('./node03_2');   
// .js(확장자) 생략 가능 
// 파일구조 찾아갈 수 있음 = ./../node03 이런식으로

console.log(odd);
console.log(even);

// 여기서 또 module.exports 가능
function checkOddOrEven(num) {
    if(num % 2) {    //홀수면
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;



