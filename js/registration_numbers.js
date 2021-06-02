// alert()
// function registrationNumbers(){
//     var found = [];
   

//     function cities(location, city){
//         var city =  city.trim().toUpperCase();
        
//         if(city.startsWith("CY")){
//             return "Belville"
//         } else if(city.startsWith("CJ")){
//             return "Paarl";
//         } else if(city.startsWith("CA")){
//             return "Cape Town";
//         }
//     }

//     function storeTown(town){
//         var town = town.trim().toUpperCase();
//         if(!found.includes(town)){
//             found.push(town)
//         } else {
//             return "Town is already stored";
//         }
//     }
    
//     function getStoreTown(){
//         return found;
//     }

//     function filterReg(city){
//         var selectedCity = city
//         for(var i = 0; i < found.length; i++){
//             if(selectedCity == found[i].startsWith("CY")){
//                 console.log(found[i] + " from bellville")
//             } else if(selectedCity == found[i].startsWith("CJ")){
//                 console.log(found[i] + " from paarl")
//             } else if(selectedCity == found[i].startsWith("CA")){
//                 console.log(found[i] + " from cape town")
//             }
//         }
//     }
//     return{
//         cities,
//         storeTown,
//         filterReg,
//         storeTown,
//         getStoreTown,
//     }
// }