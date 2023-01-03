import Bill from '../classes/Bill.js';
import input from '../helperFunctions/input.js';
import { readJson, writeJson } from '../helperFunctions/readWriteFile.js';
export async function createNewBill() {
    const billName = await input('Whats the name of this bill?');
    const billAmount = await input('Whats the amount of this bill?');
    const dueDate = await input('Whats the due date?');
    let draftType = '';
    let condition = false;
    while (!condition) {
        let getDraftType = await input('Is this bill autodrafted or do you pay it manually? a/m (auto or manual)');
        if (getDraftType === 'a') {
            draftType = "Auto-draft";
            condition = true;
        }
        else if (getDraftType === 'm') {
            draftType = 'Manual-draft';
            condition = true;
        }
        else {
            console.log('try again');
        }
    }
    const newBill = new Bill(billName, billAmount, dueDate, draftType);
    const bills = readJson();
    console.log("Before: ", bills);
    bills.expenses.push(newBill.returnBill());
    console.log('After: ', bills);
    writeJson(bills);
    return;
}
export function listBills(dash = '') {
    const bills = readJson();
    console.table(bills.expenses);
    const structDatas = [
        { handler: 'http', endpoint: 'http://localhost:3000/path', method: 'ALL' },
        { handler: 'event', endpoint: 'http://localhost:3000/event', method: 'POST' },
        { handler: 'GCS', endpoint: 'http://localhost:3000/GCS', method: 'POST' }
    ];
}
//# sourceMappingURL=handleBill.js.map