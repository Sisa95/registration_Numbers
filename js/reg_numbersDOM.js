let list = document.getElementById("myList");
var checkedRadioBtn = document.querySelector("input[name='town']:checked");
let list2 = document.getElementById("filterList");
    

var regNumberInstance = registrationNumbers()
function registration(){
  
    var textArea = document.querySelector(".text").value;

    let li = document.createElement("button");
    li.classList.add("btn-success")
    
    li.innerText = regNumberInstance.cities(textArea) 
    list.appendChild(li);
}

function filterRegTown(){
    var checkedRadioBtn = document.querySelector("input[name='town']:checked");

    if(checkedRadioBtn){
        
        document.querySelector(".filterBtn").innerText = "Show All Town"
        var countMax = regNumberInstance.getStoreTown();
        for (var i = 0; i < countMax; i++){
            let li = document.createElement("button");
    
            li.innerText = regNumberInstance.filterReg(checkedRadioBtn.value) 
            list2.appendChild(li);
        } 
        
    } 
    checkedRadioBtn.checked = false
}

document.querySelector(".addButton").addEventListener("click", registration);
document.querySelector(".filterBtn").addEventListener("click", filterRegTown);