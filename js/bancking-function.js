function getInputValue(inputIdName) {
    const inputValue        = document.getElementById(inputIdName);
    const inputValueText    = inputValue.value;
    const newInput          = parseFloat(inputValueText);

    inputValue.value ='';

    return newInput;

    
};

function pushDashboard(pushId, newInput) {
    const totalValue  = document.getElementById(pushId);
    const totalValueText = totalValue.innerText;
    const previusTotal   = parseFloat(totalValueText);

    totalValue.innerText = previusTotal + newInput;
}

function totalBalance(newInput,isAdd) {
    const totalBalanceId = document.getElementById('balance-total');
    const totalBalanceText = totalBalanceId.innerText;
    const totalBalance = parseFloat(totalBalanceText);

    if (isAdd == true) {
        totalBalanceId.innerText = totalBalance + newInput;
    } else {
        totalBalanceId.innerText = totalBalance - newInput;
    }
}






document.getElementById("deposite-btn").addEventListener('click',function(){
    const  newInput = getInputValue("deposite-input");
    pushDashboard("deposite-total",newInput);
    totalBalance(newInput,true);
});



document.getElementById("withdraw-btn" ).addEventListener('click',function(){
    const newInput =  getInputValue("withdraw-input");
    pushDashboard("withdraw-total",newInput);
    totalBalance(newInput,false);
})