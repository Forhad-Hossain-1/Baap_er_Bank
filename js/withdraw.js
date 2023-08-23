    // step-1: call the withdraw button
    document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2: get the withdraw field and amount
    // get the amount by using .value
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
        console.log(newWithdrawAmountString);
    // step-3: get the current withdraw amount
    // non-input Text element, so use inner text
    const withdrawTotal = document.getElementById('withdraw-balance-element');
    const previousWithdrawAmountString = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    withdrawTotal.innerText = newWithdrawAmount;
    
    // step-4: deduct balance to withdraw Total
    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = currentWithdrawTotal;
    // step-5: current balance total
    const balanceTotal = document.getElementById('total-balance-element');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //step-6: calculate current balance total
    const currentBalanceTotal =  previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = currentBalanceTotal;
    
    // step-7: clear the withdraw value
        withdrawField.value = '';
    
    })