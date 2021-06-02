
function registrationNumbers(){
    var found = ["CA 555 664", "CA 258 369", "CJ 147 258","CY 555 664", "CJ 258 369"];
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
            } else {
                return "Town is already stored";
            }
        } else {
            return "Invalid Reg Number"
        }
    }

    function storeTown(town){
        var town = town.trim().toUpperCase();

        if(!found.includes(town)){
            found.push(town)
        }
        return;
    }
    
    function getStoreTown(){
        return found.length;
    }

    function filterReg(city){
        
        for(var i = 0; i < found.length; i++){
            if(found[i].startsWith(city) ){
                filter.push(found[i]);
                console.log(filter)
            }
        } return filter;
    }
    return{
        cities,
        storeTown,
        filterReg,
        storeTown,
        getStoreTown,
    }
}