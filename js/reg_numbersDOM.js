let list = document.getElementById("myList");
var checkedRadioBtn = document.querySelector("input[name='town']:checked");
let listCA = document.getElementById("filterCA");
let listCJ = document.getElementById("filterCJ");
let listCY = document.getElementById("filterCY");


    var regStored = JSON.parse(localStorage.getItem('registrations'));
    if(localStorage['registrations']){
        if (document.getElementsByClassName('reg_plate').length){
            document.querySelectorAll(".reg_plate").forEach(e => e.remove())
        }
    
        for(let i = 0; i <regStored.length; i++){
            let li = document.createElement("button");
            li.classList.add("reg_plate");
    
            li.innerText = regStored[i]; 
            list.appendChild(li);
        }
    }




var regNumberInstance = registrationNumbers()
var storeReg = []
function registration(){
  
    var textArea = document.querySelector(".text").value;
    var reg = regNumberInstance.cities(textArea)
    storeReg.push(reg)
    localStorage.setItem("registrations", JSON.stringify(storeReg));
    var getRegNumber = JSON.parse(localStorage.getItem('registrations'));

    if (document.getElementsByClassName('reg_plate').length){
        document.querySelectorAll(".reg_plate").forEach(e => e.remove())
    }

    for(let i = 0; i <getRegNumber.length; i++){
        let li = document.createElement("button");
        li.classList.add("reg_plate");

        li.innerText = getRegNumber[i]; 
        list.appendChild(li);
    }
}

function filterRegTown(){
    var checkedRadioBtn = document.querySelector("input[name='town']:checked");
    var filterStoredReg = JSON.parse(localStorage.getItem('registrations'));
    
    if(checkedRadioBtn){
        //filtered = regNumberInstance.filterReg(checkedRadioBtn.value)
        var selectedTown = checkedRadioBtn.value
        //filtered = filtered
        

        if(selectedTown == "CA"){
            if (document.getElementsByClassName('reg_plate2').length){
                document.querySelectorAll(".reg_plate2").forEach(e => e.remove())
            }
        } 
        else if(selectedTown == "CY"){
            if (document.getElementsByClassName('reg_plate2').length){
                document.querySelectorAll(".reg_plate2").forEach(e => e.remove())
            }
        } else if(selectedTown == "CJ"){
            if (document.getElementsByClassName('reg_plate2').length){
                document.querySelectorAll(".reg_plate2").forEach(e => e.remove())
            }
        }

       for(let i = 0; i < filterStoredReg.length ; i++){
            if(filterStoredReg[i].startsWith(selectedTown)){
                
               if(listCA.style.display = "none"){
                    listCA.style.display = "block";
                    if (!document.getElementsByClassName('reg_plate2').length){
                        listCJ.style.display = "none";
                        listCY.style.display = "none";
                        listCA.style.backgroundColor = "#817900de" 
                    }
               }
                    let li = document.createElement("button");
                    li.classList.add("reg_plate2");

                    li.innerText =  filterStoredReg[i];
                    listCA.appendChild(li);
            } 
        }
    } 
    checkedRadioBtn.checked = false

    if(checkedRadioBtn){
        checkedRadioBtn = document.querySelector("input[name='town']:checked");
    }
}

document.querySelector(".addButton").addEventListener("click", registration);
document.querySelector(".filterBtn").addEventListener("click", filterRegTown);