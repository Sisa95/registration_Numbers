
function registrationNumbers(regStored){
    var found =regStored || []
    var filter = []
   

    function cities(city){
        var city =  city.trim().toUpperCase();
        var regEx = /^((CA|CJ|CY)\s([0-9]){3}\s([0-9]){3})$/;
        var regEx2 = /^((CA|CJ|CY)\s([0-9]){3}\-([0-9]){3})$/;
        var regEx3 = /^(CA|CJ|CY)\s[0-9]{6}$/;
        var isValid = regEx.test(city)
        var isValid2 = regEx2.test(city)
        var isValid3 = regEx3.test(city)
        
        if(isValid || isValid2 || isValid3){
            if(!found.includes(city)){
                found.push(city)
                return city;
            } else if(found.includes(city)){
                return "Town is already stored";
            }
        } else {
            return "Invalid Reg Number";
        }
    }

    function allTowns(){
        return found;
    }
    
    function getStoreTown(){
        if(filter.length == 0){
            return "Town not stored"; 
         }
        return filter;
    }

    function filterReg(city){
        filter = [];
        var regNo = "";
        for(var i = 0; i < found.length; i++){
            if(found[i].startsWith(city) ){
                filter.push(found[i]);
                regNo = found[i]
            }
        }
        return filter
    }


    return{
        cities,
        allTowns,
        getStoreTown,
        filterReg,
    }
}
