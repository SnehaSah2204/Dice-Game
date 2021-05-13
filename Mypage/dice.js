
function doFunction(){
//picking up 1 random number for img 1
var randomNumber1;
randomNumber1=Math.floor(((Math.random()*6)+1));
var randomNumber1img= "/images/dice"+randomNumber1+".png";
document.querySelector(".img1");
document.querySelector(".img1").setAttribute("src",randomNumber1img);

//picking up 1 random number for img 2
var randomNumber2;
randomNumber2=Math.floor(((Math.random()*6)+1));
var randomNumber2img= "/images/dice"+randomNumber2+".png";
document.querySelector(".img2");
document.querySelector(".img2").setAttribute("src",randomNumber2img);
alert("working");

//displaying who wins
if (randomNumber1>randomNumber2)
document.querySelector("h1").textContent="Player 1 Wins!";
if (randomNumber1<randomNumber2)
document.querySelector("h1").textContent="Player 2 Wins!";
if (randomNumber1===randomNumber2)
document.querySelector("h1").textContent="It's a Draw!";
}



// if (randomNumber1===1)
// document.querySelector(".img1").setAttribute("src","/images/dice1.png");
// if (randomNumber1===2)
// document.querySelector(".img1").setAttribute("src","/images/dice2.png");
// if (randomNumber1===3)
// document.querySelector(".img1").setAttribute("src","/images/dice3.png");
// if (randomNumber1===4)
// document.querySelector(".img1").setAttribute("src","/images/dice4.png");
// if (randomNumber1===5)
// document.querySelector(".img1").setAttribute("src","/images/dice5.png");
// if (randomNumber1===6)
// document.querySelector(".img1").setAttribute("src","/images/dice6.png");i
//picking up 1 random number for img 2
// var randomNumber2;
// randomNumber2=Math.floor(((Math.random()*6)+1));
// document.querySelector(".img2");
// if (randomNumber2===1)
// document.querySelector(".img2").setAttribute("src","/images/dice1.png");
// if (randomNumber2===2)
// document.querySelector(".img2").setAttribute("src","/images/dice2.png");
// if (randomNumber2===3)
// document.querySelector(".img2").setAttribute("src","/images/dice3.png");
// if (randomNumber2===4)
// document.querySelector(".img2").setAttribute("src","/images/dice4.png");
// if (randomNumber2===5)
// document.querySelector(".img2").setAttribute("src","/images/dice5.png");
// if (randomNumber2===6)
// document.querySelector(".img2").setAttribute("src","/images/dice6.png");

