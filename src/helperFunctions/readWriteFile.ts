import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// dynamically get path to bills.json
const __filename = fileURLToPath(import.meta.url);
const billFilePath = __filename.replace('dist/helperFunctions/readWriteFile.js', 'bills.json');

interface Expense {
	billName: string;
	billAmount: string;
	dueDate: string;
	draftType: string;
	status: string;
  }
  
  interface MoneyManagement {
	payDay: string;
	payPeriod: string;
	checkAmount: string;
	lastDayPaid: string;
  }
  
  interface ReadBill {
	expenses: Expense[];
	moneyManagement: MoneyManagement;
  }

function readJson(): ReadBill {
	let rawdata: string = fs.readFileSync(billFilePath, {encoding: 'utf8', flag: 'r'});
	const data: ReadBill = JSON.parse(rawdata.toString());
	fs.close;
	return data
}


function writeJson(data: any) {
	data.expenses.sort(function(a: any, b: any) {
  		return a.dueDate - b.dueDate;
	});

	const jsonString = JSON.stringify(data);
	fs.writeFileSync(billFilePath, jsonString);
	fs.close;
	return;
}


export { writeJson, readJson, ReadBill, Expense };