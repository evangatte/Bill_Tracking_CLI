export default class Bill {
	billName: string
	billAmount: string
	dueDate: string
	draftType: string
	// status: string
	constructor(billName: string, billAmount: string, dueDate: string, draftType: string) {
		this.billName = billName,
		this.billAmount = billAmount,
		this.dueDate = dueDate
		this.draftType = draftType
		// this.status = status
	}

	returnBill(): { billName: string; billAmount: string; dueDate: string; draftType: string } {
		return {
			billName: this.billName,
			billAmount: this.billAmount,
			dueDate: this.dueDate,
			draftType: this.draftType
		}
	}
}