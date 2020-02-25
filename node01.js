//--------비구조화 할당------------

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

const { status, getCandy } = candyMachine;

console.log(getCandy());

//근데 이렇게 getCandy()를 호출하면 this가 뭔지 몰라서 undefined가 나온다
//앞에 candyMachine.getCandy() 이렇게 해주거나
// getCandy.call(cnadyMachine); 이렇게 해줘야 됨

console.log(getCandy.call(candyMachine));




//---------rest문법--------------

const array = ['nodejs', {}, 10, true];
const [node, obj, ...bool] = array;

// 이렇게 하면 bool에 10, true 배열로 담김
// ==>응용

const p = (x, ...y) => console.log(x, y);
console.log(p(1,2,3,4,5));