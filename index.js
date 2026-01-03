/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEL = document.getElementById("input-el")
let btnEl = document.getElementById("btn-el")
let lengthEL = document.getElementById("length-el")
let volumeEL = document.getElementById("volume-el")
let massEL = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

btnEl.addEventListener("click", function() {
   let baseValue = Number(inputEL.value)
   let feet = (baseValue * meterToFeet).toFixed(3)
   let meter = (baseValue / meterToFeet).toFixed(3)
   let liter = (baseValue * literToGallon).toFixed(3)
   let gallon = (baseValue / literToGallon).toFixed(3)
   let kilogram = (baseValue * kilogramToPound).toFixed(3)
   let pound = (baseValue / kilogramToPound).toFixed(3)
   lengthEL.textContent = 
    `${baseValue} meter = ${feet} feet | 
    ${baseValue} feet = ${meter} meter`
   volumeEL.textContent =
    `${baseValue} liter = ${liter} gallon |
    ${baseValue} gallon = ${gallon} liter`
   massEL.textContent =
    `${baseValue} kilogram = ${kilogram} pound |
    ${baseValue} pound = ${pound} kilogram` 
})

