import inquirer from "inquirer";
export default async function input(output = '') {
    if (output.length != 0) {
        console.log(output);
    }
    let input = await inquirer.prompt({
        name: ' ',
        type: 'input',
    });
    return input[' '];
}
//# sourceMappingURL=input.js.map