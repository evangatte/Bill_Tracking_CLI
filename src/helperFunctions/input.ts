import inquirer from "inquirer";


export default async function input(output: string = '')  {
	if (output.length != 0) {
		console.log(output);
	}

	let input = await inquirer.prompt({
		name: ' ',
		type: 'input',
		// default(){
		// 	return '';
		// },
	});
 	return input[' '];
}