document.getElementById('calculate').addEventListener('click', function() {
    const income = parseFloat(document.getElementById('income').value);
    // Simple tax calculation example
    const tax = income * 0.2;
    document.getElementById('result').innerText = `Your tax is: $${tax.toFixed(2)}`;
});