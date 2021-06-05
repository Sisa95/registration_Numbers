let list = document.getElementById("myList");
var checkedRadioBtn = document.querySelector("input[name='town']:checked");
let listCA = document.getElementById("filterCA");
let listCJ = document.getElementById("filterCJ");
let listCY = document.getElementById("filterCY");
    

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
        filtered = regNumberInstance.filterReg(checkedRadioBtn.value)

        if(checkedRadioBtn.value == "CA"){
            if (document.getElementsByClassName('reg_plate2').length){
                document.querySelectorAll(".reg_plate2") .forEach(e => e.remove())
                alert("DELETED") 
            }
        } 
        else if(checkedRadioBtn.value == "CY"){
            if (document.getElementsByClassName('reg_plate2').length){
                document.querySelectorAll(".reg_plate2") .forEach(e => e.remove())
                alert("DELETED") 
            }
        } else if(checkedRadioBtn.value == "CJ"){
            if (document.getElementsByClassName('reg_plate2').length){
                document.querySelectorAll(".reg_plate2") .forEach(e => e.remove())
                alert("DELETED")
            }
        }

       for(var i = 0; i < regNumberInstance.getFilterLength(); i++){
            if(checkedRadioBtn.value == "CA"){
               if(listCA.style.display = "none"){
                    listCA.style.display = "block";
                    if (!document.getElementsByClassName('reg_plate2').length){
                        alert("keep CA")
                        listCJ.style.display = "none";
                        listCY.style.display = "none";
                        listCA.style.backgroundColor = "silver"
    
                        let li = document.createElement("button");
                        li.classList.add("reg_plate2");
    
                        li.innerText =  filtered[i];
                        listCA.appendChild(li);
                    }
               }
                  
            } else if(checkedRadioBtn.value == "CY"){
                if(listCY.style.display = "none"){
                    listCY.style.display = "block";
                    if(!document.getElementsByClassName('reg_plate2').length){
                        alert("keep CY")
                        listCA.style.display = "none";
                        listCJ.style.display = "none";
                        listCY.style.backgroundColor = "silver"
                        
                        let li = document.createElement("button");
                        li.classList.add("reg_plate2");
        
                        li.innerText =  filtered[i];
                        listCY.appendChild(li);
                    }
                }
               
            } else if(checkedRadioBtn.value == "CJ"){
                if(listCJ.style.display = "none"){
                    listCJ.style.display = "block";
                    if(!document.getElementsByClassName('reg_plate2').length){
                        alert("Keep CJ")
                        listCA.style.display = "none";
                        listCY.style.display = "none";
                        listCJ.style.backgroundColor = "silver"

                        let li = document.createElement("button");
                        li.classList.add("reg_plate2");

                        li.innerText =  filtered[i];
                        listCJ.appendChild(li); 
                    }
                }                
            }
        }
    } 
    checkedRadioBtn.checked = false

    if(checkedRadioBtn){
        checkedRadioBtn = document.querySelector("input[name='town']:checked");
        // regNumberInstance.filterReg(checkedRadioBtn.value)
    }
}

document.querySelector(".addButton").addEventListener("click", registration);
document.querySelector(".filterBtn").addEventListener("click", filterRegTown);