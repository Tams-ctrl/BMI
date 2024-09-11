function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height) || height === 0) {
        document.getElementById('result').innerHTML = '<div class="alert alert-danger">Please enter valid weight and height values.</div>';
        return;
    }

    const bmi = weight / (height * height);
    let classification = '';

    if (bmi < 18.5) {
        classification = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        classification = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        classification = 'Overweight';
    } else {
        classification = 'Obesity';
    }

    document.getElementById('result').innerHTML = `
        <div class="alert alert-info">
            Your BMI is <strong>${bmi.toFixed(2)}</strong>.<br>
            Classification: <strong>${classification}</strong>
        </div>
    `;}