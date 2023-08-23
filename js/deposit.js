// step-1: call the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
// step-2: get the deposit field and amount
// get the amount by using .value
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);
// step-3: get the current deposit amount
// non-input Text element, so use inner text
const depositTotal = document.getElementById('deposit-balance-element');
const previousDepositBalanceString = depositTotal.innerText;
const previousDepositBalance = parseFloat(previousDepositBalanceString);
depositTotal.innerText = newDepositAmount; 
// step-4: add balance to Deposit Total
const currentDepositTotal = previousDepositBalance + newDepositAmount;
depositTotal.innerText = currentDepositTotal;
// step-5: current balance total
const balanceTotal = document.getElementById('total-balance-element');
const previousBalanceTotalString = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//step-6: calculate current balance total
const currentBalanceTotal =  previousBalanceTotal + newDepositAmount;
balanceTotal.innerText = currentBalanceTotal;


// step-7: clear the deposit value
depositField.value = '';

})