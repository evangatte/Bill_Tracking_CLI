import { createNewBill, listBills, deleteBill, dueSoon } from './main/handleBills.js';
import input from './helperFunctions/input.js';
const dash = "\n============================================================\n";
const cmds = `${dash}Exit: 'exit'\nNew Bill 'new bill'\nList All Bills: list all\nDelete Bill: 'delete bill'\nDue Soon: 'due soon'${dash}`;
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
            listBills();
            runProgram();
            break;
        case 'delete bill':
            await deleteBill();
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
        default:
            console.log('invalid input');
            runProgram();
            break;
    }
    return;
}
runProgram();
//# sourceMappingURL=index.js.map