function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    if (!height || !weight) {
        document.getElementById('result').innerHTML = "Please enter valid height and weight values.";
        return;
    }

    let bmi = weight / ((height / 100) ** 2);

    document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(1);
}


