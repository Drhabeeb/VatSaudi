document.getElementById('vat-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const totalAmount = parseFloat(document.getElementById('total-amount').value);

    if (isNaN(totalAmount) || totalAmount <= 0) {
        alert('Please enter a valid total amount');
        return;
    }

    const vatRate = 15; // Fixed VAT rate
    const vatAmount = (totalAmount * vatRate) / (100 + vatRate);
    const amountBeforeVAT = totalAmount - vatAmount;

    document.getElementById('vat-amount').textContent = vatAmount.toFixed(2);
    document.getElementById('amount-before-vat').textContent = amountBeforeVAT.toFixed(2);

    document.getElementById('result').classList.remove('hidden');
});