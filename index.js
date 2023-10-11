const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let target = 'kochi'

form.addEventListener('submit',search )

 function search(e){
    e.preventDefault();
    target=searchField.value
    temper(target)
 }



async function temper(tar){

    try{
    let url=`https://api.weatherapi.com/v1/current.json?key=121b6e55cf2a4752b8b94926231407&q=${tar}&aqi=no`

    let data= await fetch(url)

    let ans=await data.json()
    console.log(ans)



  let temp=ans.current.temp_c
  let cond=ans.current.condition.text
  let loc=ans.location.name
  let time=ans.location.localtime
  let emoji=ans.current.condition.icon

  updateDom(temp,cond,loc,time,emoji)

}
catch(error){
    console.log(error)
}
}

function updateDom(tem,con,lo,tim,emoj){

    const exactTime = tim.split(" ")[1]
    const exactdate = tim.split(' ')[0]




    const exactDay = getDayFullName(new Date(exactdate).getDay())
    console.log(exactDay)
           

    temperatureField.innerText=tem
      cityField.innerText=lo
      dateField.innerText = `${exactTime}   ${exactDay}   ${exactdate}`

      emojiField.src=emoj
      weatherField.innerText=con

}

function getDayFullName(num) {
    switch (num) {
      case 0:
        return "Sunday";
  
      case 1:
        return "Monday";
  
      case 2:
        return "Tuesday";
  
      case 3:
        return "Wednesday";
  
      case 4:
        return "Thursday";
  
      case 5:
        return "Friday";
  
      case 6:
        return "Saturday";
  
      default:
        return "Don't Know";
    }
  }


temper(target)


