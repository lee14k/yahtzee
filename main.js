const displayDice = document.getElementById("display-dice");
const savedDiceDisplay = document.getElementById("savedice");
const rollButton = document.getElementById("roll");
const positions = [one, two, three, four, five];
const maxRolls = 3;
let rolls = 0;
let dice = [];
rollButton.addEventListener("click", rollDice);

function generateDice() {
  return Math.trunc(Math.random() * 6) + 1;
}
function rollDice() {
  if (rolls >= maxRolls) {
    return; // Limit the number of rolls per turn
  }
console.log(rolls)
  // Filter out the saved dice from the positions array
  const remainingPositions = positions.filter((item) => !item.innerText);

  // Roll only the remaining dice
  remainingPositions.forEach((item, index) => {
    const newValue = generateDice();
    dice[index] = newValue;
    item.innerText = newValue;
  });

  rolls++;

  // Display the rolled dice
  displayDiceValues();
}

function displayDiceValues() {
  positions.forEach((item,index)=>{
    item.innerText=dice[index]
  })
}

function saveDie(item,index){
  const savedValue=parseInt(item.innerText);
  dice.splice(index,1);
  item.innerText="";
  const savedDie=document.createElement('div')
  savedDie.textContent=savedValue;
  savedDie.classList.add('savey')
  savedDiceDisplay.appendChild(savedDie);
}

function addBackDie(item,index){
  const savedValue=parseInt(item.innerText);
  dice.push(savedValue)
  item.remove()
  displayDiceValues()
}

savedDiceDisplay.addEventListener('click',(e)=>{
  if (e.target.classList.contains('savey')){
    const index = Array.from(savedDiceDisplay.children).indexOf(e.target);
    const savedDie=savedDiceDisplay.children[index];
    addBackDie(savedDie,index)
  }
})

positions.forEach((item,index) => {
  item.addEventListener("click", () => {
    saveDie(item,index);
  });
});
