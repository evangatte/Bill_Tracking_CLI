import { Console } from 'console';
import { Transform } from 'stream';
export default function table(input, tableColor = '') {
    const ts = new Transform({ transform(chunk, enc, cb) { cb(null, chunk); } });
    const logger = new Console({ stdout: ts });
    logger.table(input);
    const table = (ts.read() || '').toString();
    let result = '';
    for (let row of table.split(/[\r\n]+/)) {
        let r = row.replace(/[^┬]*┬/, '┌');
        r = r.replace(/^├─*┼/, '├');
        r = r.replace(/│[^│]*/, '');
        r = r.replace(/^└─*┴/, '└');
        r = r.replace(/'/g, ' ');
        result += `${r}\n`;
    }
    const resultLength = result.length - 2;
    const newTable = result.substring(0, resultLength);
    console.log();
    if (tableColor == 'green') {
        console.log('\x1b[32m%s\x1b[0m', newTable);
    }
    else if (tableColor == 'blue') {
        console.log('\x1b[34m%s\x1b[0m', newTable);
    }
    else if (tableColor == 'red') {
        console.log('\x1b[31m%s\x1b[0m', newTable);
    }
    else {
        console.log(newTable);
    }
    return;
}
//# sourceMappingURL=createTable.js.map