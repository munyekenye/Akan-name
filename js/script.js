//declaring arrays
var daysOfWeek=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

var maleNames=[
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
];
 var femaleNames= [
     "Akosua",
     "Adwoa",
     "Abenaa",
     "Akua",
     "Yaa",
     "Afua",
     "Ama",
 ];
 // calling functions
 function getName (){
     var year=parseInt(document.getElementById("Year").value);
     var Month=parseInt(document.getElementById("Month").value);
     var Day =parseInt(document.getElementById("Day").value);
     var male= document.getElementById ("male");
     var female = document.getElementById ("female");
    }
// validation
if(day<=0 || day>31)
alert ("Please enter date of birth");
else if (month<0|| month>12)
alert ("Please enter month of birth");
var day =new Date(Year + "/"+ month + "/"+ day);
var birthDay=getDay();

if(male.checked==true){
    alert ("Your date of birth") + daysOfWeek[birthDay]+ "Therefore your Akan Name is" + maleNames [birthDay])
}
{
else if(female.checked==true){
    alert ("Your date of birth") + daysOfWeek[birthDay]+ "Therefore your Akan Name is" + femaleNames [birthDay])
}
}