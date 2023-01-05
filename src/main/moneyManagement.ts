import { readJson, writeJson } from "../helperFunctions/readWriteFile.js";
import input from '../helperFunctions/input.js';










const dash: string = "\n============================================================\n";
const cmds = `${dash}Change Check Amount/Pay Cycle: 'handle pay'${dash}`
const help = ``

async function moneyMangementMenu() {
	let userInput:string = await input(help)



}

export const moneyManagement = {
	moneyMangementMenu: moneyMangementMenu
}