export function countMoney(reservationCount: number): string {
    if(reservationCount === 0) {
        return '0'
    } else {
        return `${40000*reservationCount}`
    }
}