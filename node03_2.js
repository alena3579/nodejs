// 변수 선언 전용 파일

const odd = '홀수입니다';
const even = '짝수입니다';

// 기존의 js 
module.exports = { 
    odd: odd,
    even: even,
};
// export하는 방법 2
// export.odd = odd; 
// export.even = even; 

// ↓ ES2015
module.exports = { odd, even };