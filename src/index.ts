
import './styles.css';
import { calculateTipAmount, calculateTotalAmount } from './tipCalculator';
console.log('Ready to Party With Some TypeScript!');

// 1. find the important things on the page
const billAmountInput = document.getElementById('billAmountInput') as HTMLInputElement;
const tipOption1 = document.getElementById('tipOption1') as HTMLInputElement;
const tipOption2 = document.getElementById('tipOption2') as HTMLInputElement;
const tipOption3 = document.getElementById('tipOption3') as HTMLInputElement;
const tipSelection = document.getElementById('tipSelection') as HTMLSpanElement;
const tipPercentage = document.getElementById('tipPercentage') as HTMLSpanElement;
const billAmount = document.getElementById('billAmount') as HTMLSpanElement;
const tipAmount = document.getElementById('tipAmount') as HTMLSpanElement;
const totalAmount = document.getElementById('totalAmount') as HTMLSpanElement;

// 2. Hook up the events
billAmountInput.addEventListener('change', handleBillAmountChange);
tipOption1.addEventListener('click', handleTip1Click);
tipOption2.addEventListener('click', handleTip2Click);
tipOption3.addEventListener('click', handleTip3Click);

function handleBillAmountChange() {

    if (!isNaN(billAmountInput.valueAsNumber)) {
        billAmount.innerText = billAmountInput.valueAsNumber.toFixed(2).toString();
    } else {
        billAmount.innerText = '';
        tipAmount.innerText = '';
        totalAmount.innerText = '';
        alert('Please enter number for the bill amount');
        billAmountInput.innerText = '';
        billAmountInput.focus();
    }

    if (tipSelection.innerText.length > 0) {
        const tip: number = Number(tipSelection.innerText.slice(0, -1));
        tipAmount.innerText = calculateTipAmount(billAmountInput.valueAsNumber, tip).toString();
        totalAmount.innerText = calculateTotalAmount(billAmountInput.valueAsNumber, tip).toString();
    }
}

function handleTip1Click() {
    tipSelection.innerText = tipOption1.innerText;
    tipPercentage.innerText = tipOption1.innerText;

    if (isNaN(billAmountInput.valueAsNumber)) {
        alert('Please enter number for the bill amount');
        billAmountInput.innerText = '';
        billAmountInput.focus();
    } else {
        tipAmount.innerText = calculateTipAmount(billAmountInput.valueAsNumber, 10).toString();
        totalAmount.innerText = calculateTotalAmount(billAmountInput.valueAsNumber, 10).toString();
    }
}

function handleTip2Click() {
    tipSelection.innerText = tipOption2.innerText;
    tipPercentage.innerText = tipOption2.innerText;

    if (isNaN(billAmountInput.valueAsNumber)) {
        alert('Please enter number for the bill amount');
        billAmountInput.innerText = '';
        billAmountInput.focus();
    } else {
        tipAmount.innerText = calculateTipAmount(billAmountInput.valueAsNumber, 15).toString();
        totalAmount.innerText = calculateTotalAmount(billAmountInput.valueAsNumber, 15).toString();
    }
}

function handleTip3Click() {
    tipSelection.innerText = tipOption3.innerText;
    tipPercentage.innerText = tipOption3.innerText;

    if (isNaN(billAmountInput.valueAsNumber)) {
        alert('Please enter number for the bill amount');
        billAmountInput.innerText = '';
        billAmountInput.focus();
    } else {
        tipAmount.innerText = calculateTipAmount(billAmountInput.valueAsNumber, 20).toString();
        totalAmount.innerText = calculateTotalAmount(billAmountInput.valueAsNumber, 20).toString();
    }
}
