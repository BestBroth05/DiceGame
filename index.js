var img = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var numberRandom1 = Math.floor(Math.random() * img.length);
var randomElement1 = img[numberRandom1];
document.querySelector("img.img1").setAttribute("src", randomElement1);

var img2 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var numberRandom2 = Math.floor(Math.random() * img2.length);
var randomElement2 = img2[numberRandom2];
document.querySelector("img.img2").setAttribute("src", randomElement2);


if (randomElement1 > randomElement2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomElement1 < randomElement2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}