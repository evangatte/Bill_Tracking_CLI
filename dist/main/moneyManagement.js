import input from '../helperFunctions/input.js';
import process from 'process';
import setUp from "../helperFunctions/moneyManagement/moneyManagementSetup.js";
import { billsDueThisPayPeriod } from "../helperFunctions/billsDueThisPayPeriod.js";
const dash = "\n============================================================\n";
const cmds = `${dash}Go Back To Main Menu: 'back'\nExit Program: 'exit'\nSet Up Pay Info: 'set up''${dash}`;
const help = `Enter 'help' for a list of commands or enter 'back' to go back to Main Menu`;
async function moneyManagementMenu() {
    let myBool = false;
    while (!myBool) {
        let userInput = await input(help, '\x1b[32m%s\x1b[0m');
        switch (userInput) {
            case 'help':
                console.log(cmds);
                break;
            case 'back':
                myBool = true;
                break;
            case 'set up':
                await setUp();
                break;
            case 'exit':
                process.exit();
            case 'test':
                billsDueThisPayPeriod();
                break;
            default:
                console.log('invalid input');
                break;
        }
    }
    return;
}
export const moneyManagement = {
    moneyManagementMenu: moneyManagementMenu
};
//# sourceMappingURL=moneyManagement.js.map