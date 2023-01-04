import fs from 'fs';
import path from 'path';
const billFilePath = path.join('/Users/evangatte/Desktop/CLIs/tscBillCli', 'bills.json');
function readJson() {
    let rawdata = fs.readFileSync(billFilePath, { encoding: 'utf8', flag: 'r' });
    const data = JSON.parse(rawdata.toString());
    fs.close;
    return data;
}
function writeJson(data) {
    const jsonString = JSON.stringify(data);
    fs.writeFileSync(billFilePath, jsonString);
    fs.close;
    return;
}
export { writeJson, readJson };
//# sourceMappingURL=readWriteFile.js.map