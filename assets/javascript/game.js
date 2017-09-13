
    var wordBank = ['chewbacca', 'luke', 'yoda'];
    var guessWord;
    var letterBank = [];
    var wrongAnswers = [];
    var gameStart = false;
    var wordCompare = [];
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var losses = 0;
    var wins = 0;
    var randomNumber = Math.floor(wordBank.length * Math.random()); 
    
    //document.getElementById('chewbacca').style.display = 'none';
    //document.getElementById('luke').style.display = 'none';
    //document.getElementById('yoda').style.display = 'none';
    //document.querySelector('.imageCollection').style.display = 'none';
    
//Function to display no images at opening of page

     

var initialDisplay = function(){
    console.log("initialDisplay")
    for (var i = 0; i < wordBank.length; i++) {
          document.getElementById(wordBank[i]).style.display = 'none';
        };
        document.getElementById("youLose").style.display = 'none';
        document.getElementById("youWin").style.display = 'none';
        document.getElementById("wins").innerHTML = (wins);
        document.getElementById("losses").innerHTML = (losses);
        document.getElementById("playAgain").style.display = 'none';
    };

      initialDisplay();
//press key to begin game



    document.onkeypress = function() {
      //Start Game, if started, then check input for correct/wrong guess.
  

      if(gameStart == false){
        console.log("restart")
        reInit();
        gameInit();
      }else{
        console.log("reRun")
        console.log(event.key);
        isGuessCorrect(event.key);
      }

      gameStart = true;
    };
    var reInit = function(){
      remainingLives = null;
      console.log("reInit");
    }

    var isGuessCorrect = function(key){
      console.log("isGuessCorrect")
      
          if(guessWord.indexOf(key.toLowerCase()) > -1){
        correctAnswer(key);
          } else{
              incorrectAnswer(key);
          };
        if(remainingLives === 0){
        youLose();
        gameStart = false;
      }
      if(wordCompare.length === guessWord.length){
        youWin();
        gameStart = false;        
      }
      gameStart = false;
        };

        var gameInit = function(){
              console.log("gameInit");
              initialDisplay();
          for (var i = 0; i < wordBank.length; i++) {
                    document.getElementById(wordBank[i]).style.display = 'none';
                  };
                  document.getElementById("youLose").style.display = 'none';
                  document.getElementById("youWin").style.display = 'none';


            //var randomNumber = Math.floor(wordBank.length * Math.random());     
                      //test random number generation
                      console.log(randomNumber);
            
            var incorrectGuesses = document.getElementById('lettersGuessed');
            for(var i = 0; i < alphabet.length; i++){
              
              alphabetBank = document.createElement('li');
              alphabetBank.innerHTML = " _ "
              wrongAnswers.push(alphabetBank);
              incorrectGuesses.appendChild(alphabetBank);
              
            }

            guessWord = wordBank[randomNumber].split("");
            var wordBox = document.getElementById('currentWord');
            

            for (var i = 0; i < guessWord.length; i++) {
               word = document.createElement('li');
               word.innerHTML = "  __  "; 
               letterBank.push(word);
               wordBox.appendChild(word);
            }


          remainingLives = Math.floor(guessWord.length*.85);
          document.getElementById('livesRemaining').innerHTML = (remainingLives);
             //document.getElementById(wordBank[randomNumber]).style.display = 'inline-block';

              
        };


// Function to populate guessword with correct letter
    var correctAnswer = function(key){
        console.log("correctAnswer")
          for(var i = 0; i < letterBank.length; i++){

            if(event.key.toLowerCase() === guessWord[i] && letterBank[i].innerHTML === "  __  "){
              wordCompare.push(event.key.toLowerCase())
            }

            if(event.key.toLowerCase() === guessWord[i]){
              letterBank[i].innerHTML = event.key.toLowerCase();
          }else{ console.log(""); 
          };
          
        };  
        for(var j = 0; j < alphabet.length; j++){
              if(event.key.toLowerCase() === alphabet[j]){
            wrongAnswers[j].innerHTML = event.key.toLowerCase();
            }else{ console.log(""); 
            };
            };  
            //gameStart = true; 
      };  

//Function for incorrect answer and populate guessed answers in alphabet and subtract from remaining lives
      var incorrectAnswer = function(key){
          console.log("incorrectAnswer")
            loseLife(event.key);
            for(var i = 0; i < alphabet.length; i++){
              if(event.key.toLowerCase() === alphabet[i]){
            wrongAnswers[i].innerHTML = event.key.toLowerCase();
          
            }else{ console.log(""); 
            };
            
            };

            //gameStart = true;
            
        };

//Function for reducing # of Lives remaining if answer is wrong and not populated in alphabet field
    var loseLife = function(key){
      console.log("loseLife");
      remainingLives--;
      document.getElementById('livesRemaining').innerHTML = (remainingLives);
      console.log(remainingLives)
      
      for(var i = 0; i < alphabet.length; i++){
        if(event.key.toLowerCase() === wrongAnswers[i].innerHTML){
          remainingLives = remainingLives+1;
          document.getElementById('livesRemaining').innerHTML = (remainingLives);
          //Could display shake of already guessed letter in alphabet.
        }else{ 
          console.log("")
        };


      };
    
      //gameStart = true;
    };

    

        var youWin = function(){
          console.log("youWin")
          
          document.getElementById('youWin').style.display = 'inline-block';
      document.getElementById(wordBank[randomNumber]).style.display = 'inline-block';
          //document.getElementById('display').style.display = 'none';
          wins++
          document.getElementById("wins").innerHTML = (wins);
          document.getElementById('getStarted').style.display = 'none';
          document.getElementById("playAgain").style.display = 'inline-block';
        gameStart = false;     
      }


        var youLose = function(){
          console.log("youLose")
          document.getElementById('youLose').style.display = 'inline-block';
          document.getElementById('display').style.display = 'none';
          losses++
          document.getElementById("losses").innerHTML = (losses);   
          document.getElementById('getStarted').style.display = 'none';
          document.getElementById("playAgain").style.display = 'inline-block';     
      gameStart = false;
        }








