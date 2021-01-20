var firstRandomNumber = Math.round(Math.random() * 5)+1;
var secondRandomNumber = Math.round(Math.random() * 5)+1;
var src1String = "./images/dice" + firstRandomNumber + ".png";
var src2String = "./images/dice" + secondRandomNumber + ".png";

document.querySelector(".img1").setAttribute("src", src1String);
document.querySelector(".img2").setAttribute("src", src2String );

