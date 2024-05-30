function calculate() {
    
    let yearlyInvestment = parseFloat(document.getElementById('investment').value);
    let interestRate = parseFloat(document.getElementById('interest').value) / 100;
    let tenure = parseInt(document.getElementById('tenure').value);

   
    let maturityValue = yearlyInvestment * (((Math.pow((1 + interestRate), tenure) - 1) / interestRate) * (1 + interestRate));


    let totalDeposits = yearlyInvestment * tenure;

    let totalInterest = maturityValue - totalDeposits;

    
    document.getElementById('investedAmount').value = totalDeposits.toFixed(2);
    document.getElementById('totalInterest').value = totalInterest.toFixed(2);
    document.getElementById('maturityValue').value = maturityValue.toFixed(2);
}

