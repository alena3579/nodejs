// callback

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


//------ ==> 콜백지옥

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


// 코드가 역순이 되서 가독성이 안좋아짐

// ==> Promise 등장

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


// ---------Promise 구조

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