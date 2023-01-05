import { createNewBill, listBills, deleteBill, dueSoon, markPaid, markUnpaid, markAllUnpaid } from './main/handleBills.js';
// import { callApi } from './main/syncToDatabase.js';
import input from './helperFunctions/input.js';



const dash: string = "\n============================================================\n";
const cmds: string = `${dash}Exit: 'exit'\nNew Bill 'new bill'\nList All Bills: list all\nDelete Bill: 'delete bill'\nDue Soon: 'due soon'\nMark a bill as paid: 'mark paid'\nMark bill as unpaid: 'mark unpaid'\nSync to Database: 'sync db'${dash}`;
const help: string = "Enter 'help' for a list of commands or enter 'exit' to end program";

async function runProgram() {
	let userInput:string = await input(help)
	switch(userInput) {
		case 'exit':
			break;
		case 'help':
			console.log(cmds)
			runProgram()
			break;
		case 'due soon':
			dueSoon();
			runProgram();
			break;
		case 'list all':
			listBills('green');
			runProgram();
			break;
		case 'delete bill':
			await deleteBill();
			runProgram();
			break;
		case 'mark paid':
			await markPaid();
			runProgram();
			break;
		case 'mark unpaid':
			await markUnpaid();
			runProgram();
			break;
		case 'mark all unpaid':
			markAllUnpaid();
			runProgram();
			break;
		case 'new bill':
			try {
				await createNewBill();
			}
			 catch(e:any) {
				console.log(e.message)
			 }
			runProgram();
			break;
		case 'sync db':
			// callApi();
			console.log('nope')
			runProgram();
			break;
		default:
			console.log('invalid input');
			runProgram();
			break;
	}
	return;
}

runProgram();