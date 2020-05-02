// symbols
const uid = Symbol('uid');

const user = {
	[uid]: 'p1',
	name: 'Adam',
	age: 27,
	[Symbol.toStringTag]: 'User',
};

user.uid = '1';

console.log(user);
console.log(Symbol('uid') === Symbol('uid'));
console.log(user.toString());
