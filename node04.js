// 노드 내장 객체

// 1. Global (node04_2 참조)
// 브라우저의 전역객체 = window
// 노드의 전역객체 = global

console.log(global);

// window.setTimeout 하지 않고 
// setTimeout 그냥 쓰듯이
// 전역객체란 어디서든 불러서 쓸 수 있는 것

const a = require('./node04_2');

global.message = '안녕하세요';
console.log('a : '+a());

// 누구나 글로벌 객체에 접근이 가능하고 
// 바꿀 수 있기 때문에
// 잘 사용하지 않는 것을 추천함



// 2. Console 객체
// terminal에서 node만 치면 node 프롬프트 창이 됨,,
const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside : {
            key : 'value',
        },
    },
};

// time - timeEnd 는 안에 든 인자가 같아야 짝을 찾음
console.time('전체 시간');

console.log(string, number, boolean);
console.error('에러메세지입니다');

console.time('for 시간 측정');
for(let i=0; i<=100000; i++) {
    continue;
}
console.timeEnd('for 시간 측정');

console.timeEnd('전체 시간');

// dir 은 객체 로그 찍을 때 활용도 좋음
console.dir(obj, { color: false, depth: 2 });
console.dir(obj, { color: true, depth: 1 });

// trace 에러 위치 추적
// 어떤 경로를 거쳐서 함수 사용되는지 확인 할 수 있음
function c() {
    console.trace('에러위치 추적');
}
function b() {
    c();
}
b();


// 3. 타이머 (setTimeout, setImterval, setImmediate)
const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초 마다 실행');
}, 1000);

// 타이머 취소할 때
//clearTimeout(timeout);
//clearInterval(interval);

const timeout2 = setTimeout(() => {
    console.log('실행 되지 않습니다.');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

// 즉시 실행되게 하기 위함
// 비동기로 실행시 코드의 영향 받지 않고
// 바로 실행 되도록 setTimeout(0) 이런거 대신 사용
const im = setImmediate(() => {
    console.log('즉시 실행');
});
clearImmediate(im);


// 04. 노드 기본 제공 객체 ? 함수 ?
// __filename, __dirname

console.log('===file. '+__filename);  // 파일경로
console.log('===folder. '+ __dirname);  // 폴더경로

// 노드는 브라우저 바깥에서 돌아가니까
// 어디서 돌아가는지 확인 할 때

// 05. Process
// global.process
// global 생략 가능
// thread보다 큰 개념
// 하나의 프로그램 개념
// 노드가 지금 실행하는 js들의 정보가 담김

//node 콘솔에서
process.version  // 노드 설치된 버전
process.arch     // 아키텍처 윈도우 비트수
process.platform // 운영체제정보
process.pid      // 현재 사용되는 프로세스 아이디
process.uptime() // 현재 노드 프로그램 실행된지 얼마나 지났는지 
process.cwd()    // 지금 노드 프로그램을 어디서 실행하고 있는지 (__dir이랑 좀 다름) 이건 노드가 어디서 실행되고 있는지
process.execPath // 노드가 설치된경로
process.cpuUsage() // 현재 cpu 사용량
process.exit()   // 프로세스 종료

//웹프로그래밍은 잘 쓸 일이 없음
//노드로 데스크탑 프로그램 만들거나 돌릴때 사용





