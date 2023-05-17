import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Bills } from '../Interfaces/Bills.js';

// dynamically get path to bills.json
const __filename = fileURLToPath(import.meta.url);
const billFilePath = __filename.replace('dist/helperFunctions/readWriteFile.js', 'bills.json');

function readJson(): Bills {
	let rawdata: string = fs.readFileSync(billFilePath, {encoding: 'utf8', flag: 'r'});
	const data: Bills = JSON.parse(rawdata.toString());
	fs.close;

	return data
}

function writeJson(data: Bills): void {
	data.expenses.sort(function(a: any, b: any) {
  		return a.dueDate - b.dueDate;
	});

	const jsonString = JSON.stringify(data);
	fs.writeFileSync(billFilePath, jsonString);
	fs.close;

	return;
}

export { writeJson, readJson, Bills };