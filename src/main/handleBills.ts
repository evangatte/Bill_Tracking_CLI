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

	if (expenses.length === 0) {
		console.log('\n\nYou have no bills to list\n');
		return;
	}

	type GetBills = {
		'Index': string
		'Bill Name': string,
		'Bill Amount': string,
		'Due Date': string,
		'Draft Type': string
	}

	// loop through expenses array and format them
	const formattedArray: any = []
	expenses.forEach(function(item: any, index: any) {

		const space = {}
		const formattedObj: GetBills = {
			'Index': index,
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


export async function deleteBill() {
	const bills = readJson();
	const expensesLength = bills.expenses.length

	if (expensesLength === 0) {
		console.log('\n\nYou have no bills to delete\n');
		return;
	}

	listBills()
	
	let billIndex: any
	let myBool = false

	while(!myBool) {
		let getIndex = await input('Enter the index of the bill you want to delete: (or \'cancel\' to exit)');
		console.log(getIndex.length == 0);

		if (getIndex.length === 0) {
			console.log('invalidInput')
		} else if ((isNaN(getIndex) === false) && ((getIndex >= 0) && (getIndex <= expensesLength))) {
			billIndex = getIndex	
			myBool = true
		} else if (getIndex === 'cancel') {
			console.log('Invalid Input')
			myBool = true
		}

	}

	const deleteOrNot = await input(`Delete: ${bills.expenses[billIndex].billName} Y/n`);

	if (deleteOrNot === "Y") {
		bills.expenses.splice(billIndex, 1);
		writeJson(bills);
	}
	return;
}


export function dueSoon() {
	const currentDate = new Date().getDate();
	const { expenses } = readJson();

	type GetBills = {
		'Index': string
		'Bill Name': string,
		'Bill Amount': string,
		'Due Date': string,
		'Draft Type': string
	}
	const formattedArray: any = [];

	expenses.forEach((item: any, index: any) => {
		if ((Number(item.dueDate >= currentDate)) && (Number(item.dueDate - currentDate) <= 5)) {
			const space = {}
			const formattedObj: GetBills = {
				'Index': index,
				'Bill Name': item.billName,
				'Bill Amount': item.billAmount,
				'Due Date': item.dueDate,
				'Draft Type': item.draftType
			}
	
			formattedArray.push(formattedObj, space);
		}
	});
	table(formattedArray)
}




