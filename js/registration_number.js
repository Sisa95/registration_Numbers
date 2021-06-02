function registrationNumbers(){
    var found = [];
   

    function cities(city){
        var city =  city.trim()
        found.push(city)
        if(city.startsWith("CY")){
            console.log("Belville")
        } else if(city.startsWith("CJ")){
            console.log("Paarl");
        } else if(city.startsWith("CA")){
            console.log("Cape Town");
        }
    }
    
    function storeTown(){
        return found;
    }
    return{
        cities,
        storeTown,
    }
}