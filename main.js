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

let positions = [one, two, three, four, five]


let dice=[]

let rollButton = document.getElementById('roll').addEventListener('click', getRoll)


function getRoll () {
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

}

console.log(positions)

positions.forEach(item => {
    item.addEventListener('click', e =>{
            savedDice.push(item.innerText)
            
            savedDiceDisplay.innerText=savedDice

        //    console.log('moved')
           // console.log(dice)
           console.log(savedDice)
    })

    })

    //how do i remove an element from the current roll and move it into the saved dice array
    //how do i add it back to the current roll array 
