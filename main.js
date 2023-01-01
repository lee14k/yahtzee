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
let dice=[]
let rollButton = document.getElementById('roll').addEventListener('click', getRoll)
let positions = [one, two, three, four, five]
let displayDiceLength 

let rolls=0;

function generateDice () {
  return (Math.trunc(Math.random()*6)+1)
}




function getRoll () {
 displayDiceLength = displayDice.children.length

  if(displayDiceLength > 5){
    console.log('tit')
    let node = document.getElementsByClassName("addedagain");
    console.log(node)
    //toggle the display on nodes above to hidden
 // node.parentNode.removeChild(node);

    displayDice.removeChild('div')
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
  positions.forEach(item => {
    item.innerText = generateDice()
  })
  
        }

console.log(rolls)
rolls++


//let firstChild = displayDice.firstChild
//let firstValue = firstChild.innerText

 




//i only want to select the dice that the user has not moved into the saved dice array and create random numbers for those



positions.forEach(item => {
    item.addEventListener('click', e =>{
        div = document.createElement('div')
        savedDiceDisplay.appendChild(div)
        div.textContent=item.innerText
        div.setAttribute("class",'savey')
      

        console.log(div)
            savedDice.push(item.innerText)
            console.log(savedDice)
            item.innerText=""
        
           console.log(savedDiceDisplay)
           
           turtle = document.getElementsByClassName('savey')
           cola=Array.from(turtle)
           cola.forEach(el => {
            console.log(el)
            el.addEventListener('click', items =>{
               savedDiceDisplay.removeChild(el)
                //el.classList.toggle('disappear')
              //  console.log(savedDice)
                dice.push(parseInt(el.innerText))
                positions.push(el)
                divAgain=document.createElement('div')
                divAgain.setAttribute("class", 'addedagain')
                divAgain.textContent=el.innerText
                displayDice.appendChild(divAgain)
                
                //console.log(positions)
        })

    })

      

    console.log(cola)

            
           // console.log(el.innerHTML)

                })

            })
        
     

      function removeDiceClick () {
        let elements = document.getElementsbyClassName ('addedagain')
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0])
        }
      }


    