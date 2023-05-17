import { createNewBill, listBills, deleteBill, dueSoon, markPaid, markUnpaid, markAllUnpaid } from '../helperFunctions/handleBills.js';
import { moneyManagement } from './moneyManagement.js';
import input from '../helperFunctions/input.js';
const dash = "\n============================================================\n";
const cmds = `${dash}Exit: 'exit'\nNew Bill 'new bill'\nList All Bills: list all\nDelete Bill: 'delete bill'\nDue Soon: 'due soon'\nMark a bill as paid: 'mark paid'\nMark bill as unpaid: 'mark unpaid'\nMark all bills unpaid: 'mark all unpaid'\nSync to Database: 'sync db'\nMoney Management Menu: 'mman'${dash}`;
const help = "Enter 'help' for a list of commands or enter 'exit' to end program";
export async function runProgram() {
    let stopLoop = false;
    while (!stopLoop) {
        let userInput = await input(help);
        switch (userInput) {
            case 'exit':
                stopLoop = true;
                break;
            case 'help':
                console.log(cmds);
                break;
            case 'due soon':
                dueSoon();
                break;
            case 'list all':
                listBills();
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
                console.log('not configured yet');
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
//# sourceMappingURL=mainMenu.js.map