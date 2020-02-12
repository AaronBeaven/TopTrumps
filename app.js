const Player1Image = document.getElementById("Player1Image")
const Player2Image = document.getElementById("Player2Image")
const Player1Wins = document.getElementById("Player1Wins")
const ComputerWins = document.getElementById("ComputerWins")
const video = document.getElementById("video")

Player1Wins.style.display = "none"
ComputerWins.style.display = "none"

// setting what attributes the card had
class TopTrumps {
    constructor(name, speed, PredatorLevel, height, src) {
        this._name = name;
        this._speed = speed;
        this._PredatorLevel = PredatorLevel;
        this._height = height;
        this._src = src;
    }
    get name() {
        return this._name;
    }
    get speed() {
        return this._speed;
    }
    get PredatorLevel() {
        return this._PredatorLevel;
    }
    get height() {
        return this._height;
    }

    get src() {
        return this._src

    }
}
let SpeedStat = document.getElementById("SpeedAttack");
let PredatorLevelStat = document.getElementById("PredatorAttack");
let HeightStat = document.getElementById("HeightAttack");
let SpeedAttackButton = document.getElementById('SpeedAttackButton')


const fullDeck = [
    lion = new TopTrumps("lion", 9, 8, 4, "./images/lion.jpg"),
    ant = new TopTrumps("Ant", 2, 2, 1, "./images/dylan.jpg"),
    cheetah = new TopTrumps("Cheetah", 10, 7, 4, "./images/cheetah.jpg"),
    whale = new TopTrumps("Whale", 5, 9, 10, "./images/whale.jpeg"),
    monkey = new TopTrumps("Monkey", 6, 4, 6, "./images/me.jpg"),
    armadillo = new TopTrumps("Amardillo", 4, 3, 2, "./images/armo.png"),
    polarBear = new TopTrumps("Polar Bear", 7, 8, 6, "./images/polarbear.png"),
    swan = new TopTrumps("Swan", 3, 5, 3, "./images/swan.jpg"),
    duck = new TopTrumps("Duck", 10, 9, 9, "./images/duck.jpg"),
    dog = new TopTrumps("Dog", 2, 3, 2, "./images/dog.jpg")
]

console.log(fullDeck[0]._src)
// shuffle function
function shuffle() {
    fullDeck.sort(() => Math.random() - 0.5);
}
shuffle(fullDeck)
// setting the full deck into deck one and deck two
var deck1 = fullDeck.slice(0, 5);
var deck2 = fullDeck.slice(5, 10);
console.log(deck1)
Player1Image.src = deck1[0]._src;
Player2Image.src = deck2[0]._src;
SpeedStat.textContent = deck1[0].speed;
PredatorLevelStat.textContent = deck1[0].PredatorLevel
HeightStat.textContent = deck1[0].height;

const speedAttack = () => {
    //if statement to see what card wins 
    if (deck1[0].speed < deck2[0].speed) {
        let holdingPile = deck1.shift();
        let tempDeck = deck2.shift()
        console.log(`Deck 1 length: ${deck1.length}`);
        // console.log(`Deck 2 length: ${deck2.length}`);
        deck2.push(tempDeck)
        deck2.push(holdingPile);
        console.log(`Deck 2 length: ${deck2.length}`);
    } else if (deck2[0].speed < deck1[0].speed) {
        const holdingPile = deck2.shift();
        let tempDeck = deck1.shift()

        deck1.push(tempDeck)
        deck1.push(holdingPile);
        console.log(`Deck 1 length: ${deck1.length}`);
        console.log(`Deck 2 length: ${deck2.length}`);
    }
    console.log(deck1)
    console.log(deck2)
}
const PredatorLevelAttack = () => {
    if (deck1[0].PredatorLevel < deck2[0].PredatorLevel) {
        const holdingPile = deck1.shift();
        let tempDeck = deck2.shift()
        console.log(`Deck 1 length: ${deck1.length}`);
        // console.log(`Deck 2 length: ${deck2.length}`);
        deck2.push(tempDeck)
        deck2.push(holdingPile);
        console.log(`Deck 2 length: ${deck2.length}`);
    } else if (deck2[0].PredatorLevel < deck1[0].PredatorLevel) {
        const holdingPile = deck2.shift();
        let tempDeck = deck1.shift()
        deck1.push(tempDeck)
        deck1.push(holdingPile);
        console.log(`Deck 1 length: ${deck1.length}`);
        console.log(`Deck 2 length: ${deck2.length}`);
    }
    console.log(deck1)
    console.log(deck2)
}
// console.log(SpeedAttackButton)
const heightAttack = () => {
    if (deck1[0].height < deck2[0].height) {
        const holdingPile = deck2.shift();
        let tempDeck = deck1.shift()
        console.log(`Deck 1 length: ${deck1.length}`);
        // console.log(`Deck 2 length: ${deck2.length}`);
        deck2.push(tempDeck)
        deck2.push(holdingPile);
        console.log(`Deck 2 length: ${deck2.length}`);
    } else if (deck2[0].height < deck1[0].height) {
        const holdingPile = deck1.shift();
        let tempDeck = deck2.shift()
        deck1.push(tempDeck)
        deck1.push(holdingPile);
        console.log(`Deck 1 length: ${deck1.length}`);
        console.log(`Deck 2 length: ${deck2.length}`);
    }
    console.log(deck1)
    console.log(deck2)
}
const Result = () => {
    if (deck1.length == 0){
        ComputerWins.style.display = "Block"
    }
    else if (deck2.length == 0) {
        Player1Wins.style.display = "Block"
}
}


SpeedAttackButton.addEventListener("click", () => {
    console.log('attack');
    Player1Image.src = deck1[0]._src;
    speedAttack()
    Player1Image.src = deck1[0]._src;
    SpeedStat.textContent = deck1[0].speed;
    PredatorLevelStat.textContent = deck1[0].PredatorLevel
    HeightStat.textContent = deck1[0].height;
    Player2Image.src = deck2[0]._src;
    Result()

})
PredatorLevelButton.addEventListener("click", () => {
    PredatorLevelAttack()
    // if statement to show which player wins 
    SpeedStat.textContent = deck1[0].speed;
    PredatorLevelStat.textContent = deck1[0].PredatorLevel
    HeightStat.textContent = deck1[0].height;
    Player1Image.src = deck1[0].src
    Player2Image.src = deck2[0]._src;
    Result()
})
HeightButton.addEventListener("click", () => {
    heightAttack()
    // if statement to show which player wins 
    Player1Image.style.visibility = "visible"
    HeightStat.textContent = deck1[0].height;
    Player1Image.src = deck1[0]._src;
    SpeedStat.textContent = deck1[0].speed;
    PredatorLevelStat.textContent = deck1[0].PredatorLevel
    HeightStat.textContent = deck1[0].height;
    Player2Image.src = deck2[0]._src;
    Result()
})

pressmeButton.addEventListener("click", () =>{
    URL("https://www.youtube.com/watch?v=PV3_UHG73oQ")
})