let list = document.getElementById("myList");
var checkedRadioBtn = document.querySelector("input[name='town']:checked");
let list2 = document.getElementById("filterList");
    

var regNumberInstance = registrationNumbers()
function registration(){
  
    var textArea = document.querySelector(".text").value;

    let li = document.createElement("button");
    li.classList.add("reg_plate");
    
    li.innerText = regNumberInstance.cities(textArea) 
    list.appendChild(li);
}

function filterRegTown(){
    var checkedRadioBtn = document.querySelector("input[name='town']:checked");
    
    if(checkedRadioBtn){

        document.querySelector(".filterBtn").innerText = "Show"
    
        let li = document.createElement("button");
        li.classList.add("reg_plate2");

        li.innerText = regNumberInstance.filterReg(checkedRadioBtn.value) 
        list2.appendChild(li); 
    } 
    checkedRadioBtn.checked = false

    if(checkedRadioBtn){
        checkedRadioBtn = document.querySelector("input[name='town']:checked");
        regNumberInstance.filterReg(checkedRadioBtn.value)
    }
}

// function clearFilter(){
//     $('.reg_plate2').remove();
// }

document.querySelector(".addButton").addEventListener("click", registration);
document.querySelector(".filterBtn").addEventListener("click", filterRegTown);