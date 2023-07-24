
randomNumber1 = (Math.floor(Math.random()*6)+1);
var rand_image = "dice"+ randomNumber1 + ".png";
var randno_image = "images/"+ rand_image;


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randno_image);



randomNumber2 = (Math.floor(Math.random()*6)+1);
var rand_image = "dice"+ randomNumber2 + ".png";
var randno_image = "images/"+ rand_image;


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randno_image);

if(randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML="🚩 player 1 wins."
}else if(randomNumber1===randomNumber2){
    document.querySelector("h2").innerHTML="Game tie."
}else {
    document.querySelector("h2").innerHTML="🚩Player 2 wins."
}


