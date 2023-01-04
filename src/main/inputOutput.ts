import Bill from '../classes/Bill.js';
import input from '../helperFunctions/input.js';
import table from '../helperFunctions/createTable.js';
import { readJson, writeJson } from '../helperFunctions/readWriteFile.js';


export async function createNewBill() {
	// get user input
	const billName = await input('Whats the name of this bill?');
	const billAmount = await input('Whats the amount of this bill?');
	const dueDate = await input('Whats the due date?');

	let draftType: string = '';
	let condition: boolean = false
	
	while (!condition) {
		let getDraftType = await input('Is this bill autodrafted or do you pay it manually? a/m (auto or manual)')

		if (getDraftType === 'a') {
			draftType = "Auto-draft"
			condition = true
		} else if (getDraftType === 'm') {
			draftType = 'Manual-draft'
			condition = true
		} else {
			console.log('try again');
		}
	}


	//push new bill into json file
	const newBill = new Bill(billName, billAmount, dueDate, draftType)
	const bills = readJson();
	console.log("Before: ", bills)

	bills.expenses.push(newBill.returnBill());

	console.log('After: ', bills)
	writeJson(bills);
	return;
}



//Print all bills to console
export function listBills(dash: string = '') {
	const { expenses } = readJson();


	// loop through expenses array and format them
	const formattedArray: any = []
	expenses.forEach(function(item: any) {

		type GetBills = {
			'Bill Name': string,
			'Bill Amount': string,
			'Due Date': string,
			'Draft Type': string
		}
		const space = {}

		const formattedObj: GetBills = {
			'Bill Name': item.billName,
			'Bill Amount': item.billAmount,
			'Due Date': item.dueDate,
			'Draft Type': item.draftType
		}

		formattedArray.push(formattedObj, space);
	});
	table(formattedArray)

	return;
}