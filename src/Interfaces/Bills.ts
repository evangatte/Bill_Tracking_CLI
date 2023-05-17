import { Expense } from "./Expense.js";
import { MoneyManagement } from "./MoneyManagement.js";

export interface Bills {
	expenses: Expense[];
	moneyManagement: MoneyManagement;
}