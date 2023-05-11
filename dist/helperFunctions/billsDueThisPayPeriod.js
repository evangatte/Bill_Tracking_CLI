function getFridaysArr() {
    var d = new Date(), month = d.getMonth(), fridays = [];
    d.setDate(1);
    while (d.getDay() !== 5) {
        d.setDate(d.getDate() + 1);
    }
    while (d.getMonth() === month) {
        var pushDate = new Date(d.getTime());
        fridays.push(pushDate.getDate());
        d.setDate(d.getDate() + 7);
    }
    return fridays;
}
export function billsDueThisPayPeriod() {
    const fridays = getFridaysArr();
    console.log(fridays);
}
//# sourceMappingURL=billsDueThisPayPeriod.js.map