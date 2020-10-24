// callback
// 비동기적으로 작업을 수행하기 위함

Users.findOne('zero',(err, user) => {
	if(err){
		return console.error(err);
	}
	console.log(user);
	Users.update('zero', 'nero', (err, updateUser) => {
		if(err){
			return console.error(err);
		}
		console.log(updateUser);
		Users.remove('nero', (err, removeUser) => {
			if(err){
				return console.error(err);
			}
			console.log(removeUser);
		});
	});
});
console.log('다 찾았니?');

// 콜백이 연달아 이어질때?
//------ ==> 콜백지옥
// 예전 방식 콜백지옥을 회피하는 법 ↓

const afterRemove = (err, removeUser) => {
	console.log(removeUser);
}

const afterUpdate = (err, updateUser) => {
	console.log(updateUser);
	Users.remove('nero', afterRemove);
}

Users.findOne('zero', (err, user) => {
	if(err){
		return console.error(err);
	}
	console.log(user);
	Users.update('zero', 'nero', afterUpdate);
});
console.log('다 찾았니?');


// ==>코드가 역순이 되서 가독성이 안좋아짐

// ==> Promise 등장~!

Users.findOne('zero')
	.then((user) => {
		console.log(user);
		return Users.update('zero', 'nero');
	})
	.then((updateUser) => {
		console.log(updateUser);
		return Users.remove('nero');
	})
	.then((removeUser) => {
		console.log(removeUser);
	})
	.catch((err) => {
		console.error(err);
	});
console.log('다 찾았니?');

// ↓ then, return ?
// 원래 이런 구조였던 것
const Users = {
	findOne() {
		return new Promise((resolve, reject) => {
			if('사용자를 찾았으면'){
				resolve('사용자');
			}else{
				reject('못 찾았어요');
			}
		})
	},
	remove() { return new Promise(...)},
	update() { return new Promise(...)},
}
Users.findOne()
	.then()
	.catch()

// 웬만한 라이버러리들 다 콜백을 프로미스로 바꿀 수 있음
// 깊이도 깊어지지 않고 에러처리도 한번에 할 수 있음
// 보기도 간편 
// ---------Promise 구조 이해하기

//예제 1 
const plus = new Promise((resolve, reject) => {
	const a = 1;
	const b = 2;
	if(a + b > 2){
		resolve(a + b);
	}else{
		reject(a + b);
	}
});

plus
	.then((success) => {
		console.log(success);
	})
	.catch((fail) => {
		console.error(fail);
	})



//예제 2

const condition = true;   // true = resolve, false = reject
const promise = new Promise((resolve, reject) => {
	if(condition){
		resolve('성공');
	}else{
		reject('실패');
	}
});

// 메세지가 하나일 때 
promise
	.then((message) => {
		console.log(message);
	})
	.catch((error) => {
		console.error(error);
	});

// 메세지(함수?)가 여러개일 때
promise
	.then((message) => {
		return new Promise((resolve, reject) => {
			resolve(message);
			//reject 이면 아래 다 건너뛰고 catch로 감
			//resolve하면 다음 then으로 넘어갈수 있으니
			//message는 아래 message2와 같게 됨
		});
	})
	.then((message2) => {
		console.log(message2);
		return new Promise((resolve, reject) => {
			reject(message2);
			//reject 니까 아래 then 건너뛰고 catch로 감
			//reject 하면 catch로 가서 catch의 error와 message2가 같게 됨
			//그냥 그 안의 값을 넘겨주는 것
		});
	})
	.then((message3) => {
		console.log(message3);
	})
	.catch((error) => {
		console.error(error);
	});

// ↓

const handleMessage = (message) => {
	return new Promise((resolve, reject) => {
		resolve(message);
	});
}

promise
	.then(handleMessage)
	// 따로 함수로 빼도 상관 없음
	.then((message2) => {
		console.log(message2);
		return new Promise((resolve, reject) => {
			reject(message2);
		});
	})
	.then((message3) => {
		console.log(message3);
	})
	.catch((error) => {
		console.error(error);
	});


// 무조건 성공하는 프로미스
const successPromise = Promise.resolve('성공')
	.then().catch();
	//붙여서 쓰면됨, 하지만 무조건 성공이면 catch는 의미 없음
	//아래 무조건 실패도 마찬가지로 then이 의미 없음
// 무조건 실패하는 프로미스
const failurePromise = Promise.reject('실패');


//Promise.all([])
Promise.all([Users.findOne(), Users.remove(), User.update()])
	.then((results) => {})
	.catch((error) => {})

	//한번에 모든 프로미스들 실행할 수 있음
	//간편하지만 실패시 모든 결과들이 error에 담기는걸 주의
	//셋 다 성공해야만 results에 결과가 담김
	//콜백에서 라이브러리 쓰지 않는 이상 불가능한 기능



//======== 정리 ===========

//프로미스는 결과를 실행을 했는데 바깥에 보여주지를 않은 것
const promiseLast = new Promise((res, rej) => {
	res('무조건 성공인데~');
});
//이미 성공임을 프로미스는 알고있지만
//바깥에 보여주지 않음
//바로 promiseLast.then 안해도 
//결과를 이미 가지고 있으니
// 한참 코드 아래? (뒤에) promiseLast.then 해도 결과를 표시 할 수 있음
promiseLast.then((z) => {
	console.log(z);
})
//코드 작성중 수정이 용이함
//데이터를 가져오는 부분과 사용하는 부분이 다른 것


// Async/Await




