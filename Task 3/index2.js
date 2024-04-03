var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all",true); //open url
//Load response 
xhr.onload=function() {

//console.log("XMLHTTP request - status ", xhr.status);
var countries = JSON.parse(xhr.responseText);
countries.forEach(country => {
   // console.log(country.name.common + " :"+ country.flag +" :"+ country.region + " :"+ country.subregion);
  //  console.log(country.name.common + " :"+ country.region);
   // console.log(country.name.common + " :"+ country.subregion);
   
    for (var i=0 ; i< countries.length ;i++) {
        console.log(countries[i].name.common + ", FLAG  :"+ countries[i].flag +", REGION :"+ countries[i].region + ", SUBREGION :"+ countries[i].subregion +", POPULATION :"+ countries[i].population);
         

    }
}); 
};   
xhr.send(); // send  