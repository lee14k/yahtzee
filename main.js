let displayDice = document.getElementById('dicedisplay')
let savedDiceDisplay = document.getElementById('savedice')
let savedDice = []
let continuedDice
let randomRoll


let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')

let sone = document.getElementById('sone')
let stwo = document.getElementById('stwo')
let sthree = document.getElementById('sthree')
let sfour = document.getElementById('sfour')
let sfive = document.getElementById('sfive')

let positions = [one, two, three, four, five]


let dice=[]

let rollButton = document.getElementById('roll').addEventListener('click', getRoll)

let rolls=0;


function getRoll () {
    if (rolls===0) {
    let diceA = (Math.trunc(Math.random()*6)+1)
    let diceB = (Math.trunc(Math.random()*6)+1)
    let diceC = (Math.trunc(Math.random()*6)+1)
    let diceD = (Math.trunc(Math.random()*6)+1)
    let diceE = (Math.trunc(Math.random()*6)+1)

    dice = [diceA, diceB, diceC, diceD, diceE]
    one.innerText=dice[0]
    two.innerText=dice[1]
    three.innerText=dice[2]
    four.innerText=dice[3]
    five.innerText=dice[4]
rolls++
}else{
    console.log(dice.length)
   

}
//i only want to select the dice that the user has not moved into the saved dice array and create random numbers for those
}

console.log(positions)

positions.forEach(item => {
    item.addEventListener('click', e =>{
            savedDice.push(item.innerText)
            dice.shift(item)
            item.innerText=""
           // savedDiceDisplay.innerText=savedDice
           div = document.createElement('div')
           div.setAttribute("id",'savey')
            savedDice.forEach( function  (index) {
               // div = div.cloneNode()
                div.textContent=index
                savedDiceDisplay.appendChild(div)
             let turtle = document.getElementById('savey')  
             turtle.addEventListener('click', addBack)
function addBack () {
    dice.push(50)
    console.log(dice)
}
            })
            //sone.innerText=savedDice[0]
            //stwo.innerText=savedDice[1]
            //sthree.innerText=savedDice[2]
            //sfour.innerText=savedDice[3]
         
        //    console.log('moved')
           // console.log(dice)
           //console.log(savedDice)
    })

    })



//use current dice array length and only roll those dice 

    //how do i remove an element from the current roll and move it into the saved dice array
    //how do i add it back to the current roll array 
