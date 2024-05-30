function calculateSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const hraPercent = parseFloat(document.getElementById('hra').value);
    const daPercent = parseFloat(document.getElementById('da').value);
    const taPercent = parseFloat(document.getElementById('ta').value);
    const pfPercent = parseFloat(document.getElementById('pf').value);
    const taxPercent = parseFloat(document.getElementById('tax').value);

    if (basicSalary && hraPercent && daPercent && taPercent && pfPercent && taxPercent) {
        // Calculate allowances and deductions
        const hra = (basicSalary * hraPercent) / 100;
        const da = (basicSalary * daPercent) / 100;
        const ta = (basicSalary * taPercent) / 100;
        const pf = (basicSalary * pfPercent) / 100;
        const tax = (basicSalary * taxPercent) / 100;

        // Calculate gross and net salary
        const grossSalary = basicSalary + hra + da + ta;
        const netSalary = grossSalary - pf - tax;

        // Display the result
        document.getElementById('result').textContent = 
            `Gross Salary: $${grossSalary.toFixed(2)} \n Net Salary: $${netSalary.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Please fill in all fields.';
    }
}
let count = 5
console.log(count);