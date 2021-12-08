var playerScore = 0;
var botScore = 0;
var maxScore = 3;
var currentScore=0;
var deckOfCards = [];
var imgP = document.createElement("img");
var imgB = document.createElement("img");

	imgP.src = "cards/36.png";
	imgB.src = "cards/36.png";
	imgP.className = "playerIMG";
	imgB.className = "playerIMG";
	document.getElementById("playerNumber").appendChild(imgP);
	document.getElementById("botNumber").appendChild(imgB);
function inputName(){
	let age = prompt('Input your name', 'Player');
	document.getElementById("playerName").innerHTML = age;
	document.getElementById("playerScore").innerHTML = playerScore;
	document.getElementById("botScore").innerHTML = botScore;
	document.getElementById("numberOfStep").innerHTML = "Спроба " + currentScore + " з " + maxScore;
	for(var i =0;i<36;i++){
		deckOfCards[i] = i;
	}
}
function generateNumbers(){
	
	
	imgP.className = "playerIMG";
	imgB.className = "playerIMG";
	document.getElementById("playerNumber").appendChild(imgP);
	document.getElementById("botNumber").appendChild(imgB);
	
	let currentCard = Math.floor(Math.random()*35);
	do{
		currentCard = Math.floor(Math.random()*35);
	}while(deckOfCards[currentCard]==-1);
	if(currentCard<20){
		playerScore += Math.floor(currentCard/4)+6;
	}
	else if(currentCard<32){
		playerScore += Math.floor((currentCard-20)/4)+2;;
	}
	else{
		playerScore+=11;
	}
	document.getElementById("playerScore").innerHTML = playerScore;	
	imgP.src = "cards/" + currentCard +".png";
	deckOfCards[currentCard] = -1;
	
	do{
		currentCard = Math.floor(Math.random()*35);	
	}while(deckOfCards[currentCard]==-1)

	if(currentCard<20){
		botScore += Math.floor(currentCard/4)+6;
	}
	else if(currentCard<32){
		botScore += Math.floor((currentCard-20)/4)+2;
	}
	else{
		botScore +=11;
	}
	imgB.src = "cards/"+ currentCard +".png";
	document.getElementById("botScore").innerHTML = botScore;
	deckOfCards[currentCard] = -1;
	currentScore++;
	document.getElementById("numberOfStep").innerHTML = "Спроба " + currentScore + " з " + maxScore;
	
	if(currentScore==maxScore){
		if(playerScore>botScore){
			alert("Player WIN")
		}
		else if(playerScore<botScore){
			alert("Bot WIN")
		}
		else{
			alert("DRAW")
		}
		document.getElementById("playerScore").innerHTML = 0;
		document.getElementById("botScore").innerHTML = 0;
		botScore =0;
		playerScore = 0;
		currentScore=0;
		imgP.src = "cards/36.png";
		imgB.src = "cards/36.png";
		document.getElementById("numberOfStep").innerHTML = "Спроба " + currentScore + " з " + maxScore;
	}
	
}