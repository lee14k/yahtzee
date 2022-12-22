let displayDice = document.getElementById('dicedisplay')
let savedDiceDisplay = document.getElementById('savedice')
let savedDice = []
let continuedDice
let randomRoll
let roundNumber
let sum
let savedDiceAgain
let savedDiceAgainValues =[]
let dude=[]
let turtle
let cola
let roundTwo = []


let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')

let positions = [one, two, three, four, five]


let dice=[]

let rollButton = document.getElementById('roll').addEventListener('click', getRoll)

let rolls=1;


function getRoll () {
    if (rolls===1 ||  rolls===3) {
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
    console.log(displayDice)
let firstChild = displayDice.firstChild
let firstValue = firstChild.innerText

    console.log(firstChild)  
    console.log(firstValue)
rolls++
}else if(rolls===2){
  if (displayDice.length > 5) {
    console.log('yep')
   console.log(divAgain)
displayDice.removeChild(divAgain)


   }

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

}

//i only want to select the dice that the user has not moved into the saved dice array and create random numbers for those
}


positions.forEach(item => {
    item.addEventListener('click', e =>{
            savedDice.push(item.innerText)
            dice.shift(item)
            item.innerText=""
           // savedDiceDisplay.innerText=savedDice
           div = document.createElement('div')
           div.setAttribute("class",'savey')


           console.log(savedDice)
         console.log(positions)
         console.log(dice)
           
            savedDice.forEach( function  (index) {
               // div = div.cloneNode()
                div.textContent=index
                savedDiceDisplay.appendChild(div)
              //  console.log(index)
                //dude.push(index)

            })   
            turtle = document.getElementsByClassName('savey')
           // console.log(turtle)
            cola=Array.from(turtle)
            //console.log(dude)
//destructure array using [first, second, third, fourth, fifth]
//can set defaults to display 

//dude = cola.values()
  //          for (dude )


            cola.forEach(el => {
                el.addEventListener('click', items =>{
                    //el.classList.toggle('disappear')
                  //  console.log(savedDice)
                    dice.push(parseInt(el.innerText))
                    console.log(dice)
                    positions.push(el)
                    console.log(positions)
                    divAgain=document.createElement('div')
                    divAgain.setAttribute("class", 'addedagain')
                    divAgain.textContent=el.innerText
                    displayDice.appendChild(divAgain)
                    savedDiceDisplay.removeChild(el)
                    console.log(displayDice)
                    //console.log(positions)
            })
            

           // console.log(el.innerHTML)

                })

            })
        })
     
  
             
           //for (i=0;i<turtle.length;i++) {
             //console.log(cola[i].innerText)
             //dude.push(cola[i].innerText) }
          // console.log(dude)
 
               //console.log(i)
              // console.log(savedDiceAgain[i].textContent)
            //  
            //  
              // console.log(savedDiceAgainValues)
               // savedDiceAgain.push(turtle[i].innerText)
          // }
       //  console.log(dude)
         // console.log(savedDiceAgainValues)
           
             //           console.log(items)
//console.log(items.target.innerText)
//console.log(savedDiceAgain)
//console.log(items.target.textContent)                     
             
            
            
          //want to wait until saved dice are added back to save all values to array

      function removeDiceClick (gone) {
        let elements = document.getElementsbyClassName ('addedagain')
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0])
        }
      }


    