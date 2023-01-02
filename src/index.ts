import inquirer from 'inquirer';


async function input() {
	let input = await inquirer.prompt({
		name: ' ',
		type: 'input',
		// default(){
		// 	return '';
		// },
	});
 	return input[' '];
}


class Person {
	firstName: string
	lastName: string
	age: number
	constructor(firstName: string, lastName: string, age: number) {
		this.firstName = firstName,
		this.lastName = lastName,
		this.age = age;
	}

	
}


async function createPerson() {
	console.log('Whats Your first name?: ')
	const firstName: string = await input();

	console.log('Whats Your Last name?')
	const lastName: string = await input();

	console.log('Whats Your age?')
	const age: number = Number(await input());

	const newPerson = new Person(firstName, lastName, age);

	console.log(newPerson)

}

createPerson();