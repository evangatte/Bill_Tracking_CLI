import { Console } from 'console';
import { Transform } from 'stream';

//Function to create table that doesnt have 'index' column
export default function table(input: object) { 
	// @see https://stackoverflow.com/a/67859384
	const ts = new Transform({ transform(chunk: any, enc: any, cb: any) { cb(null, chunk) } })
	const logger = new Console({ stdout: ts })
	logger.table(input)
	const table = (ts.read() || '').toString()
	let result = '';
	for (let row of table.split(/[\r\n]+/)) {
	  let r = row.replace(/[^┬]*┬/, '┌');
	  r = r.replace(/^├─*┼/, '├');
	  r = r.replace(/│[^│]*/, '');
	  r = r.replace(/^└─*┴/, '└');
	  r = r.replace(/'/g, ' ');
	  result += `${r}\n`;
	}
	console.log(result);
}