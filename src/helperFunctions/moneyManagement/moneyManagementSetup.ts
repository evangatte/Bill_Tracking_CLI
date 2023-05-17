import { readJson, writeJson } from "../readWriteFile.js";
import input from "../input.js";
import table from "../createTable.js";

/*** Incomplete ***/

function createDaysTable() {
	type Day = {
		Index: string,
		Day: string
	}
	const tableTest = [{Day: 'Sunday'} ,{Day: 'Monday'}, {Day: 'Tuesday'}, {Day: 'Wednesday'}, {Day: 'Thursday'}, {Day: 'Friday'}, {Day: 'Saturday'}]

	const formattedArray: any = [];
	tableTest.forEach((item: any, index: any) => {
			const space = {}
			const formattedObj: Day = {
				'Index': index,
				'Day': item.Day
			}
	
			formattedArray.push(formattedObj, space);
	});
	table(formattedArray, 'green')
}


export default async function  setUp() {
	const data = readJson();

	let endLoop: boolean = true

	const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	let payPeriod: any;
	let payDay: any;
	let checkAmount: any;
	let lastDayPaid: any

	while (endLoop) {
		const changeOrNot = await input('Do you want to change your Money Management Info? Y/n');

		if (changeOrNot == "Y") {
			let payPeriodLoop: boolean = true;

			// get pay period
			while (payPeriodLoop) {
				const getPayPeriod = await input('Do you get paid weekly or bi weekly? weekly/biweekly');
	
				if (getPayPeriod == 'weekly') {
					payPeriod = 'weekly';
					payPeriodLoop = false;
				} else if (getPayPeriod == 'biweekly') {
					payPeriod = 'biweekly';
					payPeriodLoop = false;
				} else {
					console.log('Invalid Input');
				}
			}
			// get pay day
			let payDayLoop: boolean = true;
			while (payDayLoop) {
				createDaysTable();
				const getPayDayIndex = await input('What day of the week do you get paid? Enter index');
				
				if (!isNaN(getPayDayIndex) && (getPayDayIndex >= 0) && (getPayDayIndex <= 6)) {
					payDay = daysArr[getPayDayIndex];
					payDayLoop = false;
				} else {
					console.log('Invalid Input');
				}
			}

			endLoop = false;

		}  else if (changeOrNot == "n") {
			endLoop = false
		} else {
			console.log('Invalid Input check');
		}


		let checkAmountLoop = true
		while(checkAmountLoop) {
			const getCheckAmount = await input('How Much are your checks?');
			const getLastDayPaid = await input('Whats the date of your last paycheck?');
			checkAmount = getCheckAmount;
			lastDayPaid = getLastDayPaid;
			checkAmountLoop = false;
		}


		endLoop = false;

		// if (payPeriod == 'biweekly') {

		// }
		data.moneyManagement.payDay = payDay
		data.moneyManagement.payPeriod = payPeriod
		data.moneyManagement.checkAmount = checkAmount;
		data.moneyManagement.lastDayPaid = lastDayPaid; 

		writeJson(data)
	}
}

