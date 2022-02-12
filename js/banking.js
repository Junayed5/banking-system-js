document.getElementById("deposite-btn").addEventListener('click',function (){
   const depositeInput      = document.getElementById("deposite-input");
   const depositeInputText  = depositeInput.value;
   const newDeposite        = parseFloat(depositeInputText);

    const depositeOutput      = document.getElementById('deposite-total');
    const depositeOutputText  = depositeOutput.innerText;
    const previousDeposite    = parseFloat(depositeOutputText);

    depositeOutput.innerText =previousDeposite + newDeposite;

    const balanceTotal      = document.getElementById('balance-total');
    const balanceTotalText  = balanceTotal.innerText;
    const fullBalance       = parseFloat(balanceTotalText);

    balanceTotal.innerText = fullBalance + newDeposite;
    //clear input
    depositeInput.value = '';
});


document.getElementById("withdraw-btn").addEventListener('click', function(){

    const withdrawInput     = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const newWithdraw       = parseFloat(withdrawInputText);

    const withdrawTotal     = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdraw  = parseFloat(withdrawTotalText);

    withdrawTotal.innerText =previousWithdraw + newWithdraw;


    const balanceTotal      = document.getElementById('balance-total');
    const balanceTotalText  = balanceTotal.innerText;
    const fullBalance       = parseFloat(balanceTotalText);

    balanceTotal.innerText = fullBalance - newWithdraw; 

    //clear input 
    withdrawInput.value ='';
})