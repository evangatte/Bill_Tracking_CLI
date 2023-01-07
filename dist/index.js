import { createNewBill, listBills, deleteBill, dueSoon, markPaid, markUnpaid, markAllUnpaid } from './main/handleBills.js';
import { moneyManagement } from './main/moneyManagement.js';
import input from './helperFunctions/input.js';
const dash = "\n============================================================\n";
const cmds = `${dash}Exit: 'exit'\nNew Bill 'new bill'\nList All Bills: list all\nDelete Bill: 'delete bill'\nDue Soon: 'due soon'\nMark a bill as paid: 'mark paid'\nMark bill as unpaid: 'mark unpaid'\nSync to Database: 'sync db'\nMoney Management Menu: 'mman'${dash}`;
const help = "Enter 'help' for a list of commands or enter 'exit' to end program";
const testBranch = 'for a test branch';
async function runProgram() {
    let myBool = false;
    while (!myBool) {
        let userInput = await input(help, '\x1b[32m%s\x1b[0m');
        switch (userInput) {
            case 'exit':
                myBool = true;
                break;
            case 'help':
                console.log(cmds);
                break;
            case 'due soon':
                dueSoon();
                break;
            case 'list all':
                listBills('green');
                break;
            case 'delete bill':
                await deleteBill();
                break;
            case 'mark paid':
                await markPaid();
                break;
            case 'mark unpaid':
                await markUnpaid();
                break;
            case 'mark all unpaid':
                await markAllUnpaid();
                break;
            case 'new bill':
                try {
                    await createNewBill();
                }
                catch (e) {
                    console.log(e.message);
                }
                break;
            case 'sync db':
                console.log('nope');
                break;
            case 'mman':
                await moneyManagement.moneyManagementMenu();
                break;
            default:
                console.log('invalid input');
                break;
        }
    }
}
runProgram();
//# sourceMappingURL=index.js.map