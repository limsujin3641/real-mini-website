function getRandomNumberDICE() {
return Math.floor(Math.random() * 12 + 1);

}

randomNum1 = Math.floor(Math.random() * 12 + 1);
randomNum2 = getRandomNumberDICE();

var diceImage1src = "num" + randomNum1 + ".PNG";
var diceImage2src = "num" + randomNum2 + ".PNG";

var diceImage1 = document.querySelectorAll("img")[0];
var diceImage2 = document.querySelectorAll("img")[1];

diceImage1.setAttribute("src", diceImage1src);
diceImage2.setAttribute("src", diceImage2src);


if (randomNum1 > randomNum2)
    document.querySelector('div.box h1').innerHTML = "<참가자1 선>"

else if (randomNum1 < randomNum2)
document.querySelector('div.box h1').innerHTML = "<참가자2 선>"

else if (randomNum1 = randomNum2)
document.querySelector('div.box h1').innerHTML = "<무승부>"
    

window.onload = function() {
var btn = document.getElementById('btn');
btn.onclick = function() {
window.location.reload();
btn.onclick = null;
}



}