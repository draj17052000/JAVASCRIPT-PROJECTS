let amountInput = document.querySelector(".amount-input");
let interestRateInput = document.querySelector(".interest-input");
let tenureInput = document.querySelector(".Tenure-input");
let image = document.querySelector("image")

let loanEmiValue = document.querySelector(".loan-emi .VALUE");
let totalAmountValue = document.querySelector(".Total.Amount .VALUE");
let totalInterestValue = document.querySelector(".Total.Interest .VALUE");

let calculateButton = document.querySelector(".calculate");

const calculateEmi = (loanAmount, interestRate, tenure) => {
    let interest = interestRate / 12 / 100;
    let emi = loanAmount * interest * Math.pow(1 + interest, tenure) / (Math.pow(1 + interest, tenure) - 1);
    return emi;
};

const update = (emi) => {
    let loanAmount = parseFloat(amountInput.value);
    let tenure = parseFloat(tenureInput.value);

    loanEmiValue.innerHTML = Math.round(emi);
    let totalAmount = Math.round(emi * tenure);
    totalAmountValue.innerHTML = totalAmount;
    let totalInterestPayable = Math.round(totalAmount - loanAmount);
    totalInterestValue.innerHTML = totalInterestPayable;
};

function init() {
    let loanAmount = parseFloat(amountInput.value);
    let interestRate = parseFloat(interestRateInput.value);
    let tenure = parseFloat(tenureInput.value);

    let emi = calculateEmi(loanAmount, interestRate, tenure);
    update(emi);
}




