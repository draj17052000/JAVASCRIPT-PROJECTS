function calculate() {
    let principal = document.getElementById("principal-amount").value;
    let interestRate = document.getElementById("interest-rate").value;
    let timePeriod = document.getElementById("time-period").value;

   
    let principalAmount = parseFloat(principal);
    let interestRateAmount = parseFloat(interestRate) / 100; 
    let timePeriodAmount = parseFloat(timePeriod);

    
    let totalAmount = principalAmount * (1 + interestRateAmount * timePeriodAmount);
    let totalInterest = totalAmount - principalAmount;

    
    document.getElementById("principal-result").value = principalAmount.toFixed(2);
    document.getElementById("total-interest").value = totalInterest.toFixed(2);
    document.getElementById("total-amount").value = totalAmount.toFixed(2);
}
