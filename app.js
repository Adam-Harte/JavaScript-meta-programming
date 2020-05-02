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

// iterators
const company = {
	curEmployee: 0,
	employees: ['Adam', 'Edgar', 'Silv'],
	next() {
		if (this.curEmployee >= this.employees.length) {
			return { value: this.curEmployee, done: true };
		}
		const returnValue = {
			value: this.employees[this.curEmployee],
			done: false,
		};
		this.curEmployee++;
		return returnValue;
	},
};

console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());

let employee = company.next();

while (!employee.done) {
	console.log(employee.value);
	employee = company.next();
}
