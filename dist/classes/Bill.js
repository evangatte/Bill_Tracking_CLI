export default class Bill {
    constructor(billName, billAmount, dueDate, draftType) {
        this.billName = billName,
            this.billAmount = billAmount,
            this.dueDate = dueDate;
        this.draftType = draftType;
    }
    returnBill() {
        return {
            billName: this.billName,
            billAmount: this.billAmount,
            dueDate: this.dueDate,
            draftType: this.draftType
        };
    }
}
//# sourceMappingURL=Bill.js.map