const exchangeRates = {
    AZN: 1,
    USD: 1.7,    
    EUR: 2
  };
let convert = document.getElementById('convert');
convert.addEventListener('click', function () {
const amountInput = document.getElementById('amount').value;
const amount = +amountInput;
const fromCurrency = document.getElementById('fromCurrency').value;
const toCurrency = document.getElementById('toCurrency').value;
const convertedAmount = amount * (exchangeRates[fromCurrency] / exchangeRates[toCurrency]);
document.getElementById('result').innerHTML = convertedAmount;
  });
