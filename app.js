array1 = ["Red",'Blue','Yellow'];

var button = document.getElementById("button");
var color = document.getElementById("color");

button.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = array1[randomNumber];
    color.textContent = array1[randomNumber];
} , false);


function getRandomNumber(){
    return Math.floor(Math.random() * array1.length);
}