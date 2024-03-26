var randomNumber1 = Math.floor(Math.random() * 6 );
var list1 = ["/images/dice6.png" , "/images/dice5.png", "/images/dice4.png", "/images/dice3.png", "/images/dice2.png" , "/images/dice1.png" ];

 randimg = list1[randomNumber1];

 dice16 = document.querySelectorAll("img")[0].setAttribute("src", randimg);

 
var randomNumber2 = Math.floor(Math.random() * 6 );

 randimgg = list1[randomNumber2];

 dice26 = document.querySelectorAll("img")[1].setAttribute("src" , randimgg);


if(randimg>randimgg){
    document.querySelector("h1").innerText= "PLayer 1 WIns" 
} else if(randimgg>randimg) {
    document.querySelector("h1").innerText= "PLayer 2  WIns" 

} else {
    document.querySelector("h1").innerText= "draw" 

}


