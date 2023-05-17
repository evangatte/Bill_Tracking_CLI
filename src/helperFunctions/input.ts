import inquirer from "inquirer";


export default async function input(output: string = '', color: string = '', ): Promise<any>  {

	if (color.length != 0 && output.length != 0) {
		console.log(color, output);
	} else if (color.length == 0 && output.length != 0) {

		console.log(output);
	} else {

	}

	let input = await inquirer.prompt({
		name: ' ',
		type: 'input',
	});

 	return input[' '];
}
