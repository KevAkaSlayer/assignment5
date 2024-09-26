function getAmount(id){
    const amount = document.getElementById(id).value;
    
    if(isNaN(amount) || amount < 0){
        alert('Please enter a valid amount');
        document.getElementById('inputN').value = '';
        return;
    }
    else if(amount > totalAmount()){
        alert('You do not have enough money in your account');
        document.getElementById('inputN').value = '';
        return;
    }
    else return parseInt(amount);
}

function showAmount(id){
   const data =  parseInt(document.getElementById(id).innerText);
   return data;
}

function totalAmount(){
    const total = parseInt(document.getElementById('credit').innerText)
    return total;
}

function orgName(id){
    const name = document.getElementById(id).innerText;
    return name;
}

const select = document.getElementById('history');



document.getElementById("NBtn").addEventListener("click", function () {
  if (totalAmount() > 0 && totalAmount() >= getAmount("inputN")) {
    const noaAmount = getAmount("inputN");
    const noaTotal = showAmount("nCash");
    const noaTotalAmount = noaAmount + noaTotal;
    total = totalAmount() - noaAmount;
    document.getElementById("nCash").innerText = noaTotalAmount;
    document.getElementById("credit").innerText = total;
    document.getElementById("inputN").value = "";
    const name = orgName("noakhali");
    select.innerHTML += `<div class="border border-green-100 rounded-lg flex flex-col p-5 gap-3">
                                <h3 class="text-xl font-bold md:text-3xl">${noaAmount} Taka is Donated in "${name}"</h3>
                                <p class="text-md">Date : ${Date()}</p>
                             </div>`;
    }
    
});



document.getElementById('FBtn').addEventListener('click', function(){
    if(totalAmount() > 0 && totalAmount() >= getAmount('inputF')){
         const feniAmount = getAmount('inputF');
         const feniTotal = showAmount('fCash');
         const feniTotalAmount = feniAmount + feniTotal;
         total = totalAmount() -  feniAmount;
         document.getElementById('fCash').innerText = feniTotalAmount;
         document.getElementById('credit').innerText = total;
         document.getElementById('inputF').value = '';
         const name = orgName('feni');
         select.innerHTML += `<div class="border border-green-100 rounded-lg flex flex-col p-5 gap-3">
                         <h3 class="font-bold text-3xl">${feniAmount} Taka is Donated in "${name}"</h3>
                         <p class="text-md">Date : ${Date()}</p>
                     </div>`;     

    }
    
 });

 
 document.getElementById('PBtn').addEventListener('click', function(){
    if(totalAmount() > 0 && totalAmount() >= getAmount('inputP')){
         const proAmount = getAmount('inputP');
         const proTotal = showAmount('pCash');
         const proTotalAmount = proAmount + proTotal;
         total = totalAmount() -  proAmount;
         document.getElementById('pCash').innerText = proTotalAmount;       
         document.getElementById('credit').innerText = total;
         document.getElementById('inputP').value = '';
         const name = orgName('protest');
         select.innerHTML += `<div class="border border-grey-100 rounded-lg flex flex-col p-5 gap-3">
                         <h3 class="font-bold text-3xl">${proAmount} Taka is Donated in "${name}"</h3>
                         <p class="text-md">Date : ${Date()}</p>
                     </div>`;
    }
    
 });
 
