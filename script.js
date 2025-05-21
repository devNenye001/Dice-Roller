// DICE ROLLER PROGRAM

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values =[];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        images.push(`<img src="/images2/${value}.jpg" alt="Dice ${value}">`);
    }
    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join('');
   
}

function showScreenSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.getElementById("screenSize").textContent = `Screen size: ${width} x ${height}`;
}

window.addEventListener('resize', showScreenSize);
window.addEventListener('load', showScreenSize);