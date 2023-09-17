// code your solution here
function superbowlWin(record) {
    let yearWon = record.find(r => { return r.result === "W"})
    return yearWon === undefined ? undefined : yearWon.year;
}