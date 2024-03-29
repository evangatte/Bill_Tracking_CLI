import { Console } from 'console';
import { Transform } from 'stream';
// import process from 'process';

//Function to create table that doesnt have 'index' column
export default function table(input: object, tableColor: string = ''): void { 
	// @see https://stackoverflow.com/a/67859384
	const ts: Transform = new Transform({ transform(chunk: any, enc: any, cb: any) { cb(null, chunk) } })
	const logger: Console = new Console({ stdout: ts })
	logger.table(input)
	const table: string = (ts.read() || '').toString()
	let result: string = '';
	for (let row of table.split(/[\r\n]+/)) {
	  let r: string = row.replace(/[^┬]*┬/, '┌');
	  r = r.replace(/^├─*┼/, '├');
	  r = r.replace(/│[^│]*/, '');
	  r = r.replace(/^└─*┴/, '└');
	  r = r.replace(/'/g, ' ');
	  result += `${r}\n`;
	}
	
	//remove the very last new line from the table
	const resultLength: number = result.length - 2
	const newTable: string = result.substring(0, resultLength)

	console.log()	

	if (tableColor == 'green') {
		console.log('\x1b[32m%s\x1b[0m', newTable);
	} else if (tableColor == 'blue') {
		console.log('\x1b[34m%s\x1b[0m', newTable);
	} else if (tableColor == 'red') {
		console.log('\x1b[31m%s\x1b[0m', newTable);
	} else {
		console.log(newTable);
	}

	return;
}