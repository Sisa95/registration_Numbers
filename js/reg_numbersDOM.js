let list = document.getElementById("myList");
let list2 = document.getElementById("myList2");
var checkedRadioBtn = document.querySelector("input[name='town']:checked");

var regStored;

if (localStorage['registrations']) {
    regStored = JSON.parse(localStorage.getItem('registrations'));

    if (document.getElementsByClassName('reg_plate').length) {
        document.querySelectorAll(".reg_plate").forEach(e => e.remove())
    }

    for (let i = 0; i < regStored.length; i++) {
        let li = document.createElement("button");
        li.classList.add("reg_plate");

        li.innerText = regStored[i];
        list.appendChild(li);
    }
}

var regNumberInstance = registrationNumbers(regStored)
var storeReg = regStored || []
function registration() {

    var textArea = document.querySelector(".text").value;
    var textError = document.querySelector(".text");

    var reg = regNumberInstance.cities(textArea)

    if (!storeReg.includes(reg)) {
        if (reg == "Invalid Reg Number" || reg == "Town is already stored") {

            if (reg == "Invalid Reg Number") {
                textError.style.color = "red";
                textError.style.fontFamily = "impact"
                textError.style.border = "2px solid red"
                textError.value = reg
            } else if (reg == "Town is already stored") {
                let li = document.createElement("p");
                li.classList.add("reg_plateError");
                li.innerText = reg;
                list2.appendChild(li);

                setTimeout(function () {
                    document.querySelector(".reg_plateError").remove()
                }, 2500)
            }

            setTimeout(function () {
                document.querySelector(".text").value = ""
                textError.style.color = "rgb(3, 3, 46)";
                textError.style.border = "";
            }, 2500)
            return;
        }
        storeReg.push(reg)
    }

    localStorage.setItem("registrations", JSON.stringify(storeReg));
    var getRegNumber = JSON.parse(localStorage.getItem('registrations'));

    if (document.getElementsByClassName('reg_plate').length) {
        document.querySelectorAll(".reg_plate").forEach(e => e.remove())
    }
    if (document.getElementsByClassName('reg_plateError').length) {
        document.querySelectorAll(".reg_plateError").forEach(e => e.remove())
    }

    for (let i = 0; i < getRegNumber.length; i++) {

        let li = document.createElement("button");
        li.classList.add("reg_plate");

        li.innerText = getRegNumber[i]
        list.appendChild(li);
    }
    document.querySelector(".text").value = ""
}

function filterRegTown() {
    var regStored = JSON.parse(localStorage.getItem('registrations'));
    var checkedRadioBtn = document.querySelector("input[name='town']:checked");
    var filterStoredReg = JSON.parse(localStorage.getItem('registrations'));

    if (checkedRadioBtn) {
        var selectedTown = checkedRadioBtn.value;
        var find = regNumberInstance.filterReg(selectedTown);

        if (selectedTown == "All") {
            if (document.getElementsByClassName('reg_plate').length) {
                document.querySelectorAll(".reg_plate").forEach(e => e.remove())
            }
            if (document.getElementsByClassName('reg_plateError').length) {
                document.querySelectorAll(".reg_plateError").forEach(e => e.remove())
            }

            if(filterStoredReg == null){
                let li = document.createElement("p");
                li.classList.add("reg_plateError");
                li.innerText = "No Registration Numbers Stored";
                list.appendChild(li);
                checkedRadioBtn.checked = false
                return
            }

            for (let i = 0; i < regStored.length; i++) {
                let li = document.createElement("button");
                li.classList.add("reg_plate");

                li.innerText = regStored[i];
                list.appendChild(li);
            }
            checkedRadioBtn.checked = false
            return;
        } 

        if (find.length === 0) {
            if (checkedRadioBtn){
                if (document.getElementsByClassName('reg_plate').length) {
                    document.querySelectorAll(".reg_plate").forEach(e => e.remove())
                }
            }
            if (document.getElementsByClassName('reg_plateError').length) {
                document.querySelectorAll(".reg_plateError").forEach(e => e.remove())
            }
            let li = document.createElement("p");
            li.classList.add("reg_plateError");
            li.innerText =  "Sorry Registrations From This Town Don't Exist";
            list.appendChild(li);
            checkedRadioBtn.checked = false                
            return
        }

        if (document.getElementsByClassName('reg_plate').length) {
            document.querySelectorAll(".reg_plate").forEach(e => e.remove())
        }

        if (document.getElementsByClassName('reg_plateError').length) {
            document.querySelectorAll(".reg_plateError").forEach(e => e.remove())
        } 
        for (let i = 0; i < filterStoredReg.length; i++) {
            if (filterStoredReg[i].startsWith(selectedTown)) {
                let li = document.createElement("button");
                li.classList.add("reg_plate");
                li.innerText = filterStoredReg[i];
                list.appendChild(li);
                checkedRadioBtn.checked = false;
            }
        }
    }   
}

document.querySelector(".addButton").addEventListener("click", registration);
document.querySelector(".filterBtn").addEventListener("click", filterRegTown);