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
	// generators
	[Symbol.iterator]: function* employeeGenerator() {
		let currentEmployee = 0;
		while (currentEmployee < this.employees.length) {
			yield this.employees[currentEmployee];
			currentEmployee++;
		}
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

// generators

for (const employee of company) {
	console.log(employee);
}

console.log([...company]);

// Reflect API
const course = {
	title: 'JavaScript - The Complete Guide',
};

Reflect.setPrototypeOf(course, {
	toString() {
		return this.title;
	},
});

console.log(course.toString());

Reflect.defineProperty(course, 'price', {
	value: 9.99,
	writable: true,
});

console.log(course);

Reflect.deleteProperty(course, 'title');

console.log(course);
