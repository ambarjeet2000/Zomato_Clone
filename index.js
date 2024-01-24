import { city } from "./city.js";
import {popularcity} from "./popularcity.js";
import restaurant from "./restaurant.js";

let LocalitiesContainerEl = document.querySelector(".localities_container")

let htmlLocalitiesList = city.map((el)=>{
        return `
        <div class="localities_list">
        <div class="localities_card">
            <h3>${el.name}</h3>
            <p>${el.place ? el.place + "places"  : ""} </p>
        </div>
        <i class="fa-solid fa-angle-right"></i>
    </div>
        `
}).join("")

LocalitiesContainerEl.innerHTML = htmlLocalitiesList



let popularCityHTML = document.getElementById("popularcityId")

let popularCityHTMLLInk = "";

for(let i = 0; i < popularcity.length; i++) {
    console.log(popularcity[i])
    popularCityHTMLLInk += `
    <a class="popularcityName" href=${popularcity[i].link}>${popularcity[i].decs}</a>
    <span class="dot" >•</span>
    `
}

popularCityHTML.innerHTML = popularCityHTMLLInk;


let toggle = true;
document.getElementById("popularCityListID").addEventListener("click", () =>{
    if(toggle){
        popularCityHTML.style.display = "block"
        toggle != toggle
        toggle = false
    }
    else{
        popularCityHTML.style.display = "none"
        toggle = true
    }
})

console.log(popularcity);

console.log(restaurant);
