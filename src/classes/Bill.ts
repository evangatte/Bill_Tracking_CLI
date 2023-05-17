import { Expense } from "../Interfaces/Expense.js"

export default class Bill implements Expense {
	billName: string
	billAmount: string
	dueDate: string
	draftType: string
	status: string
	
	constructor(billName: string, billAmount: string, dueDate: string, draftType: string, status: string) {
		this.billName = billName,
		this.billAmount = billAmount,
		this.dueDate = dueDate
		this.draftType = draftType
		this.status = status
	}
}