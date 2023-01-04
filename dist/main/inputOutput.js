import Bill from '../classes/Bill.js';
import input from '../helperFunctions/input.js';
import table from '../helperFunctions/createTable.js';
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
    const { expenses } = readJson();
    const formattedArray = [];
    expenses.forEach(function (item) {
        const space = {};
        const formattedObj = {
            'Bill Name': item.billName,
            'Bill Amount': item.billAmount,
            'Due Date': item.dueDate,
            'Draft Type': item.draftType
        };
        formattedArray.push(formattedObj, space);
    });
    table(formattedArray);
    return;
}
//# sourceMappingURL=inputOutput.js.map