import { createNewBill, listBills, deleteBill, dueSoon, markPaid, markUnpaid, markAllUnpaid } from './main/handleBills.js';
import { exportTest } from './main/moneyManagement.js';
import input from './helperFunctions/input.js';
const dash = "\n============================================================\n";
const cmds = `${dash}Exit: 'exit'\nNew Bill 'new bill'\nList All Bills: list all\nDelete Bill: 'delete bill'\nDue Soon: 'due soon'\nMark a bill as paid: 'mark paid'\nMark bill as unpaid: 'mark unpaid'\nSync to Database: 'sync db'\nMoney Management Menu: 'mman'${dash}`;
const help = "Enter 'help' for a list of commands or enter 'exit' to end program";
async function runProgram() {
    let userInput = await input(help);
    switch (userInput) {
        case 'exit':
            break;
        case 'help':
            console.log(cmds);
            runProgram();
            break;
        case 'due soon':
            dueSoon();
            runProgram();
            break;
        case 'list all':
            listBills('green');
            runProgram();
            break;
        case 'delete bill':
            await deleteBill();
            runProgram();
            break;
        case 'mark paid':
            await markPaid();
            runProgram();
            break;
        case 'mark unpaid':
            await markUnpaid();
            runProgram();
            break;
        case 'mark all unpaid':
            markAllUnpaid();
            runProgram();
            break;
        case 'new bill':
            try {
                await createNewBill();
            }
            catch (e) {
                console.log(e.message);
            }
            runProgram();
            break;
        case 'sync db':
            console.log('nope');
            runProgram();
            break;
        case 'mman':
            exportTest.myFunc('hello woefjwoe');
            runProgram();
            break;
        default:
            console.log('invalid input');
            runProgram();
            break;
    }
    return;
}
runProgram();
//# sourceMappingURL=index.js.map