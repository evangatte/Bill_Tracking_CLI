import { readJson, writeJson } from "../helperFunctions/readWriteFile.js";
import input from '../helperFunctions/input.js';
import table from "../helperFunctions/createTable.js";
import process from 'process'



/** Incomplete **/



const dash: string = "\n============================================================\n";
const cmds: string = `${dash}Go Back To Main Menu: 'back'\nExit Program: 'exit'\nSet Up Pay Info: 'set up''${dash}`
const help: string = `Enter 'help' for a list of commands or enter 'back' to go back to Main Menu`

async function moneyManagementMenu() {
	let myBool: boolean = false;

	while(!myBool) {
		let userInput:string = await input(help, '\x1b[32m%s\x1b[0m'); // green
			// let userInput:string = await input(help, '\x1b[34m%s\x1b[0m'); // blue
		switch (userInput) {
			case 'help':
				console.log(cmds);
				break;
			case 'back':
				myBool = true;
				break;
				break;
			case 'exit':
				process.exit();
			default:
				console.log('invalid input')
				break;
		}
	}
	
	return
}

export const moneyManagement = {
	moneyManagementMenu: moneyManagementMenu
}
