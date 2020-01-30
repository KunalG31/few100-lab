import './styles.css';
import { calculateTipAmount, calculateTotalAmount } from './tipCalculator';
console.log('Ready to Party With Some TypeScript!');

// 1. find the important things on the page
const billAmountInput = document.getElementById('billAmountInput') as HTMLInputElement;
const errorMessage = document.getElementById('errorMessage') as HTMLSpanElement;
const tipOption1 = document.getElementById('tipOption1') as HTMLInputElement;
const tipOption2 = document.getElementById('tipOption2') as HTMLInputElement;
const tipOption3 = document.getElementById('tipOption3') as HTMLInputElement;
const tipSelection = document.getElementById('tipSelection') as HTMLSpanElement;
const tipPercentage = document.getElementById('tipPercentage') as HTMLSpanElement;
const billAmount = document.getElementById('billAmount') as HTMLSpanElement;
const tipAmount = document.getElementById('tipAmount') as HTMLSpanElement;
const totalAmount = document.getElementById('totalAmount') as HTMLSpanElement;

errorMessage.hidden = true;

// 2. Hook up the events
billAmountInput.addEventListener('change', handleBillAmountChange);
tipOption1.addEventListener('click', handleTip1Click);
tipOption2.addEventListener('click', handleTip2Click);
tipOption3.addEventListener('click', handleTip3Click);

function handleBillAmountChange() {

    if (isNaN(billAmountInput.valueAsNumber) || Math.sign(billAmountInput.valueAsNumber) !== 1) {
        billAmount.innerText = '';
        tipAmount.innerText = '';
        totalAmount.innerText = '';
        billAmountInput.value = '';
        billAmountInput.style.borderColor = '#FF0000'; // making border color red on error
        billAmountInput.style.boxShadow = '#FF0000'; // making box shadow color red on error
        billAmountInput.focus();
        errorMessage.hidden = false;
    }

    if (Math.sign(billAmountInput.valueAsNumber) === 1) {
        errorMessage.hidden = true;
        billAmountInput.style.borderColor = '#72A4D2'; // making border color blue on valid
        billAmountInput.style.boxShadow = '#72A4D2'; // making box shadow blue on valid
        billAmount.innerText = billAmountInput.valueAsNumber.toFixed(2).toString();
        if (tipSelection.innerText.length > 0) {
            const tip: number = Number(tipSelection.innerText.slice(0, -1));
            tipAmount.innerText = calculateTipAmount(billAmountInput.valueAsNumber, tip).toFixed(2).toString();
            totalAmount.innerText = calculateTotalAmount(billAmountInput.valueAsNumber, tip).toFixed(2).toString();
        }
    }
}

function handleTip1Click() {
    tipSelection.innerText = tipOption1.innerText;
    tipPercentage.innerText = tipOption1.innerText;

    tipOption1.disabled = true;
    tipOption2.disabled = false;
    tipOption3.disabled = false;

    tipOption1.classList.add('selectedBtn');
    if (tipOption2.classList.contains('selectedBtn')) {
        tipOption2.classList.remove('selectedBtn');
    }
    if (tipOption3.classList.contains('selectedBtn')) {
        tipOption3.classList.remove('selectedBtn');
    }

    if (!isNaN(billAmountInput.valueAsNumber)) {
        tipAmount.innerText = calculateTipAmount(billAmountInput.valueAsNumber, 10).toFixed(2).toString();
        totalAmount.innerText = calculateTotalAmount(billAmountInput.valueAsNumber, 10).toFixed(2).toString();
    } else {
        errorMessage.hidden = false;
        billAmountInput.innerText = '';
        billAmountInput.focus();
    }
}

function handleTip2Click() {
    tipSelection.innerText = tipOption2.innerText;
    tipPercentage.innerText = tipOption2.innerText;

    tipOption1.disabled = false;
    tipOption2.disabled = true;
    tipOption3.disabled = false;

    tipOption2.classList.add('selectedBtn');
    if (tipOption1.classList.contains('selectedBtn')) {
        tipOption1.classList.remove('selectedBtn');
    }
    if (tipOption3.classList.contains('selectedBtn')) {
        tipOption3.classList.remove('selectedBtn');
    }

    if (!isNaN(billAmountInput.valueAsNumber)) {
        tipAmount.innerText = calculateTipAmount(billAmountInput.valueAsNumber, 15).toFixed(2).toString();
        totalAmount.innerText = calculateTotalAmount(billAmountInput.valueAsNumber, 15).toFixed(2).toString();
    } else {
        errorMessage.hidden = false;
        billAmountInput.innerText = '';
        billAmountInput.focus();
    }
}

function handleTip3Click() {
    tipSelection.innerText = tipOption3.innerText;
    tipPercentage.innerText = tipOption3.innerText;

    tipOption1.disabled = false;
    tipOption2.disabled = false;
    tipOption3.disabled = true;

    tipOption3.classList.add('selectedBtn');
    if (tipOption1.classList.contains('selectedBtn')) {
        tipOption1.classList.remove('selectedBtn');
    }
    if (tipOption2.classList.contains('selectedBtn')) {
        tipOption2.classList.remove('selectedBtn');
    }

    if (!isNaN(billAmountInput.valueAsNumber)) {
        tipAmount.innerText = calculateTipAmount(billAmountInput.valueAsNumber, 20).toFixed(2).toString();
        totalAmount.innerText = calculateTotalAmount(billAmountInput.valueAsNumber, 20).toFixed(2).toString();
    } else {
        errorMessage.hidden = false;
        billAmountInput.innerText = '';
        billAmountInput.focus();
    }
}
