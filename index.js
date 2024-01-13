var n=Math.floor(Math.random()*6)+1;
var n2=Math.floor(Math.random()*6)+1;
if (n===1) {      
    document.querySelector("img").setAttribute("src", "dice1.png");
  }
 else if (n===2) {      
    document.querySelector("img").setAttribute("src", "dice2.png");
  }
 else if (n===3) {      
    document.querySelector("img").setAttribute("src", "dice3.png");
  }
  else if (n===4) {      
    document.querySelector("img").setAttribute("src", "dice4.png");
  }
  else if (n===5) {      
    document.querySelector("img").setAttribute("src", "dice5.png");
  }
  else if (n===6) {      
    document.querySelector("img").setAttribute("src", "dice6.png");
  }
  
  
if (n2===1) {      
    document.querySelectorAll("img")[1].setAttribute("src", "dice1.png");
  }
 else if (n2===2) {      
    document.querySelectorAll("img")[1].setAttribute("src", "dice2.png");
  }
 else if (n2===3) {      
    document.querySelectorAll("img")[1].setAttribute("src", "dice3.png");
  }
  else if (n2===4) {      
    document.querySelectorAll("img")[1].setAttribute("src", "dice4.png");
  }
  else if (n2===5) {      
    document.querySelectorAll("img")[1].setAttribute("src", "dice5.png");
  }
  else if (n2===6) {      
    document.querySelectorAll("img")[1].setAttribute("src", "dice6.png");
  }
  
 if(n>n2){
  document.querySelector("h1").innerHTML="Player 1 Wins";}
 else if(n<n2){
  document.querySelector("h1").innerHTML="Player 2 Wins";}
  else{
  document.querySelector("h1").innerHTML="DRAW";}
   
  