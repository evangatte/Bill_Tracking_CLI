import { createNewBill, listBills, deleteBill, dueSoon, markPaid, markUnpaid, markAllUnpaid } from './main/handleBills.js';
import { moneyManagement } from './main/moneyManagement.js'
import input from './helperFunctions/input.js';

const dash: string = "\n============================================================\n";
const cmds: string = `${dash}Exit: 'exit'\nNew Bill 'new bill'\nList All Bills: list all\nDelete Bill: 'delete bill'\nDue Soon: 'due soon'\nMark a bill as paid: 'mark paid'\nMark bill as unpaid: 'mark unpaid'\nMark all bills unpaid: 'mark all unpaid'\nSync to Database: 'sync db'\nMoney Management Menu: 'mman'${dash}`;
const help: string = "Enter 'help' for a list of commands or enter 'exit' to end program";

async function runProgram(): Promise<void> {
    let stopLoop: boolean = false;

	while(!stopLoop) {
		// let userInput:string = await input(help, '\x1b[32m%s\x1b[0m'); 	// green
		let userInput:string = await input(help); 	// green
		switch(userInput) {
			case 'exit':
				stopLoop = true
				break;
			case 'help':
				console.log(cmds)
				break;
			case 'due soon':
				dueSoon();
				break;
			case 'list all':
				listBills();
				break;
			case 'delete bill':
				await deleteBill();
				break;
			case 'mark paid':
				await markPaid();
				break;
			case 'mark unpaid':
				await markUnpaid();
				break;
			case 'mark all unpaid':
				await markAllUnpaid();
				break;
			case 'new bill':
				try {
					await createNewBill();
				}
				catch(e:any) {
					console.log(e.message)
				}
				break;
			case 'sync db':
				console.log('not configured yet')
				break;
			case 'mman':
				await moneyManagement.moneyManagementMenu();
				break;
			default:
				console.log('invalid input');
				break;
		}
	}
}

runProgram();