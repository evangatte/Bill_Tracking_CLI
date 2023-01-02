import inquirer from 'inquirer';
async function input() {
    let input = await inquirer.prompt({
        name: ' ',
        type: 'input',
    });
    return input[' '];
}
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.age = age;
    }
}
async function createPerson() {
    console.log('Whats Your first name?: ');
    const firstName = await input();
    console.log('Whats Your Last name?');
    const lastName = await input();
    console.log('Whats Your age?');
    const age = Number(await input());
    const newPerson = new Person(firstName, lastName, age);
    console.log(newPerson);
}
createPerson();
//# sourceMappingURL=index.js.map