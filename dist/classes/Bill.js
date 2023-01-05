export default class Bill {
    constructor(billName, billAmount, dueDate, draftType, status) {
        this.billName = billName,
            this.billAmount = billAmount,
            this.dueDate = dueDate;
        this.draftType = draftType;
        this.status = status;
    }
    returnBill() {
        return {
            billName: this.billName,
            billAmount: this.billAmount,
            dueDate: this.dueDate,
            draftType: this.draftType,
            status: this.status
        };
    }
}
//# sourceMappingURL=Bill.js.map