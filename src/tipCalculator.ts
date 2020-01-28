export function calculateTipAmount(billAmount: number, tipPercentage: number) {
    return (billAmount * (tipPercentage / 100));
}

export function calculateTotalAmount(billAmount: number, tipPercentage: number) {
    return (billAmount + calculateTipAmount(billAmount, tipPercentage));
}
