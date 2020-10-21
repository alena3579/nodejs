



//--------비구조화 할당------------
// = 구조분해 할당

const candyMachine = {
	status: {
		name: 'node',
		count: 5,
	},
	getCandy: function(){
		this.status.count--;
		return this.status.count;	
	},
};

// const status = candyMachine.status;
// const getCandy = candyMachine.getCandy;

// ==> 줄이면?
// candyMachine객체에서 status, getCandy 속성을 꺼내옴
// 속성 많이 꺼내올수록 효율 좋음

const { status, getCandy } = candyMachine;

console.log(getCandy());

//근데 이렇게 getCandy()를 호출하면 this가 뭔지 몰라서 undefined가 나온다
//앞에 candyMachine.getCandy() 이렇게 해주거나
// getCandy.call(cnadyMachine); 이렇게 해줘야 됨

console.log(getCandy.call(candyMachine));

//배열도 비구조화 할당이 가능!
let array = [ 1, {}, '복숭아', true ];
const number= array[0];
const obj= array[1];
const bool= array[array.length -1];
//  ==> 이렇게 
const [number,obj, ,bool] = array;

// 객체는 {}
// 배열은 []




//---------rest 문법--------------
// = spread 
//rest 는 배열 형식이다.

const array2 = ['nodejs', {}, 10, true];
const [node, obj, ...bool] = array2;

// 이렇게 하면 bool에 10, true 배열로 담김

// ==>응용
const p = (x, ...y) => console.log(x, y);
console.log(p(1,2,3,4,5));

//이전 자바스크립트 arguments
function o(){
	console.log(arguments);
}

o(1,2,3,4,5);

// ==>
const o1 = (...rest) => console.log(rest);

o1(3,4,5,6,'test');


//---------참조 변수-------------
const x = { a : 1, b : 'text' };
// x의 참조(할당)된 위치는 변경이 불가능,
// x안의 값 a, b는 변경이 가능
// 참조한 껍데기{}는 변경이 불가능하다.
