function calculateEPF() {
    const salary = parseFloat(document.getElementById('salary').value);
    const age = parseInt(document.getElementById('age').value);
    const percentage = parseFloat(document.getElementById('percentage').value);
    const increase = parseFloat(document.getElementById('increase').value);
    const interest = parseFloat(document.getElementById('interest').value);

    if (!salary || !age || !percentage || !increase || !interest) {
        document.getElementById('result').textContent = 'Please fill in all fields.';
        return;
    }

    const retirementAge = 60;

    const monthsInYear = 12;

    const yearsUntilRetirement = retirementAge - age;
    
    const monthsUntilRetirement = yearsUntilRetirement * monthsInYear;

  
    let totalAmount = 0;
    let currentSalary = salary;


    for (let month = 1; month <= monthsUntilRetirement; month++) {

        const monthlyContribution = (currentSalary * percentage) / 100;
        totalAmount += monthlyContribution;

        totalAmount += totalAmount * (interest / 100 / monthsInYear);

        if (month % monthsInYear === 0) {
            currentSalary += currentSalary * (increase / 100);
        }
    }


    document.getElementById('result').textContent = 'Accumulated EPF Amount: $' + totalAmount.toFixed(2);
}


