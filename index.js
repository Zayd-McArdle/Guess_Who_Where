/* Guess Where
your task is to guess the different features that many people have from different nationalities and countries around the world and also to test the user's general knowledge.
How to play
Type in the required answer below for each question.
HAVE FUN LEARNING.*/


let prompt = require('readline-sync');
const fs = require('fs');
let points= {Rookie: "25 points", Amateur: "45 points", All_star: "65 points", Superstar: "85 points", Master: "100 points"};//This will be given to the user at the start of the game and at the end to reveal the user's results.
let current_question = 1;
const array = ["CONGRATULATIONS!"];
// This will suggest the first round of the game.
function guess(){
  console.log("");
  console.log("   .d88b. 888     888     888     .d8888b   .d8888b      \"┏━━━┓\"");
  console.log("    d88P\"88b888    888     888  Y8b88K       88K         \"┃┏━┓┃\\");
  console.log("   888  888888     888     888   \"Y8888b.  \"Y8888b.       \"┗┛┏┛┃\\"); 
  console.log("    Y88b 888Y88   888     888          X88       X88      \"╋╋┃┏┛\\");
  console.log("      \"Y88888        88888   \"Y88 \"88888P' 88888P'        \"╋╋┏┓\\");
  console.log("         888                                              \"╋╋┗┛\\");
  console.log("   Y8b d88P         ");                        
  console.log("     \"Y88P\"         "); 
}

function saveGame(){
  const content = { score : score };
  const write = JSON.stringify(content);
  const data = fs.writeFileSync('save _file.txt', write);
}

function loadGame(){
 let raw_data = fs.readFlieSync('save_file.txt');
  score = JSON.parse(raw_data);
}

function flame() {
  console.log("");
  console.log(" ");
  console.log("              (  .      )");
  console.log("        )           (              )");
  console.log("          .  '   .   '  .  '  .");
  console.log("     (    , )       (.   )  (   ',    )");
  console.log("   .' ) ( . )    ,  ( ,     )   ( .");
  console.log("   ). , ( .   (  ) ( , ')  .' (  ,    )");
  console.log("   (_,) . ), ) _) _,')  (, ) '. )  ,. (' )");
  console.log(" ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
}

function flag() {
  console.log("");
  console.log(" ");
  console.log("                        /\"" );
  console.log("                       /::\ ");
  console.log("                      /::::\" ");
  console.log("        ,a_a         /\::::/\" ");
  console.log("       {/ ''\_      /\ \::/\ \" ");
  console.log("       {\ ,_oo)    /\ \ \/\ \ \" ");
  console.log("       {/  (_^____/  \ \ \ \ \ \" ");
  console.log("  .=  {/ \___)))*)    \ \ \ \ \/");
  console.log(" (.=.`\{/   /=;  ~/      \ \ \ \/");
  console.log(" \ `\{/(   \/\  /        \ \ \/");
  console.log(" \  `. `\  ) )           \ \/");
  console.log("       // /_/_            \/");
  console.log(" '==''---))))");
}

flag();
for(let i = 0; i < 5; i ++){
  console.log(array);
}//if 0 is less than 5 which it is then it will run the array

let score = 0;
let facts ={A:"Italy is one of the oldest western counties",
            B:"Italy is the fifth largest country in Europe",
            C:"pizza was intevested in rome"}
let facts_2 ={A:" Rome",
             B:" Florence",
             C:" Milan"} 

let facts_3 ={A:" Italy has the oldest population in Europe",
 B:" Rome is over 1,000 years old",
 C: " Italy's flag is green, blue and red"} 
// I'm using an object to store questions for the fire round 
let facts_4 ={A:"Italy is the first most visited country in the world",
B: " Italy's last king ruled for just 34 days",
C: "Italians eat ice cream for dessert"}

let facts_5 ={A:"Uganda has the world’s youngest population!" ,
B: "Lake Victoria is the smallest lake in Uganda",
C: "80% of the Ugandans are Muslims"}

let facts_6 ={A:"Kenya is home to Africa's second-highest mountain", B:"Sudan is a country in East-Africa", C:"Ethiopia native language is Arabic"}
function africa() {
  console.log("");
  console.log("           _ /");
  console.log("   /\----_- - ");
  console.log("  /         \\ ");
  console.log(" /           \\  ");
  console.log(" |            \\_ ");
  console.log(" \___-_        /   ");
  console.log("       \       /     ");
  console.log("        |     |     ");
  console.log("        |     \\  ");
  console.log("         \__/        Africa ");
}
function uganda() {
  console.log("");
  console.log("           _ /");
  console.log("   /\----_- - ");
  console.log("  /         \\ ");
  console.log(" /           \\  ");
  console.log(" |            \\_ ");
  console.log(" \___-_        /   ");
  console.log("       \       /     ");
  console.log("        |     |     ");
  console.log("        |     \\  ");
  console.log("         \__/        Uganda ");
}
function askQuestion(){
    answer = prompt.question("Please type in your answer...");
    if(answer ==  "Africa" || answer == "africa"){
      console.log("YOU WERE RIGHT!");
    }else if(answer == "South africa" || answer == "North africa"){ 
       console.log("YOUR NOT QUIET CLOSE!");
    }
}


let features = {face: "Black", facial: "Oval face shape",  hair_color: "Blacks/waves", Nose: "Nubian nose"};

//('\x1b[32m%s\x1b[0m',  'Africa     South America      North America');
//console.log("/x1b[31m/s")
function options(){
  console.log("");
  console.log(".--.___            ._            _,.__,.___.");
  console.log("/       \         .'  `-._       >_.._       >  _");
  console.log("(         \_       `.      7           \     '-.| \ ");
  console.log("`--.       7        `   _/             )        _> ");
  console.log("    <     /         |  (               (     _ / ");
  console.log("   )    )          ) /                 `\. C.`");
  console.log("\   / /         (/                     ~-.\ ");
  console.log("~-~                                      ` ");
}

function coins(rules){

}
function worldGlobe(text){
    console.log("");
    console.log("");
    console.log("          ,-:` \\;\\',`'-, ");
    console.log("       .\\'-;_,;  ':-;_,'.");
    console.log("       /;   \\'/    ,  _`.-\\");
    console.log("      | \\'`. (`     /` ` \\`|");
    console.log("      |:.  `\\`-.   \\_   / |");
    console.log("      |     (   `,  .`\\ ;\\'|");
    console.log("       \     | .'     `-\\'/");
    console.log("        `.   ;/       .'");
    console.log("           ` '-._____.");
}


//World globe
function textBox(text){
    console.log('\x1b[33m%s\x1b[0m',   '-------------   ');
    console.log('\x1b[32m%s\x1b[0m',  'Main Menu');
    console.log('\x1b[33m%s\x1b[0m',   '-------------   ');
    console.log("");
    console.log("          ,-:` \\;\\',`'-, ");
    console.log("       .\\'-;_,;  ':-;_,'.");
    console.log("       /;   \\'/    ,  _`.-\\");
    console.log("      | \\'`. (`     /` ` \\`|");
    console.log("      |:.  `\\`-.   \\_   / |");
    console.log("      |     (   `,  .`\\ ;\\'|");
    console.log("       \     | .'     `-\\'/");
    console.log("        `.   ;/       .'");
    console.log("           ` '-._____.");
}





function delay(message,time){
  setTimeout(() => {
    console.log(message);
  }, time);
}

function askQuestion(question_number){      //Starts runs the game

  switch(question_number){
    case "start":
      console.clear() 
      guess();
      answer = prompt.question("Please press enter to start the game...");
      console.clear() 

                                 textBox();
      //Displaying the type of options the user could get if completed the game.
      console.log('\x1b[33m%s\x1b[0m',   '\n**********************************   ');
      console.log(" > Rookie:  " + points.Rookie); 
      console.log(" > Amateur: " + points.Amateur);
      console.log(" > All_star: " + points.All_star);
      console.log(" > Superstar: "    + points.Superstar);
      console.log(" > Master: " + points.Master);    
      //Throughout the game the user will get their score displayed to them

      console.log('\x1b[33m%s\x1b[0m',   '**********************************   ');
      console.log('\x1b[32m%s\x1b[0m', ' EACH QUESTION EQUALS 10 POINTS!');


      answer = prompt.question("Please press enter to continue \n");
      askQuestion(0); 
    break;

    case 0: //Choice of which continents.


      console.clear();
      coins("");


      answer = prompt.question("Question 1");
      current_question++;
      console.log('\x1b[32m%s\x1b[0m',  'From the list of features, What continent best describes where I \nmight possibly be from?');
      saveGame();
      answer = prompt.question("Press any key to continue\n")
      console.log('\x1b[33m%s\x1b[0m',   '----------------------   ');
      console.log ("> Race: "  +  features. face);
      console.log ("> Facial: "  +features. facial);
      console.log ("> Hair_color: "  +features.hair_color);
      console.log ("> Nose_feature: "  +features. Nose);
      console.log('\x1b[33m%s\x1b[0m',   '----------------------   ');options("");

      console.log('\x1b[32m%s\x1b[0m',  'Africa     South America      North America');
      answer = prompt.question("Type in your answer\n");
      answer = answer.toLowerCase(); 
      if(answer == "africa"){
        console.log("\nYOU WERE RIGHT!");
        console.log("You scored 10 points");
        score += 10;
        console.log("Current score is... " + score);
        answer = prompt.question("Please press enter to continue...");
        askQuestion(1);
      }else if (answer == "south america" || answer == "north america"){
        console.log("\nYOUR NOT QUITE CLOSE!.");
        console.log("Africa was the answer!");
        console.log("Current score is... " + score);
        answer = prompt.question("Please press enter to continue...");
        askQuestion(1);
      }else{
        console.log("YOUR NOT QUIET CLOSE!.")
        askQuestion(0);
      }

      saveGame();

    break;

    case 1:
      //This bit of code keeps track of the current question and displays it to the user, copy and paste at the beginning of each question.
        console.clear();
        answer = prompt.question("Question 2");
        console.log('\x1b[32m%s\x1b[0m', 'Our country is famous for long-distance running and is one of the poorest countries in the world. \nMost people live from farming or work in the agricultural sector. \nAbout 70% of the land is used for agriculture.'); prompt.question("Press any key to continue\n")
       africa();
       console.log('\x1b[33m%s\x1b[0m',   '----------------------   ');
       console.log('\x1b[32m%s\x1b[0m', ' Pick your guess...');
       console.log('\x1b[33m%s\x1b[0m',   '----------------------   ');
       console.log ("> Kenya");
       console.log ("> Uganda" );
       console.log ("> Ethiopia ");
       console.log ("> Somalia ");
       console.log ("> Rwanda ");
       console.log('\x1b[33m%s\x1b[0m',   '----------------------   ');console.log('\x1b[32m%s\x1b[0m', ' ???????????????');
       console.log('\x1b[33m%s\x1b[0m',   '----------------------   ');
       answer = prompt.question("Which country do you think i'm from?\n");
      answer = answer.toLowerCase();
      if (answer == "uganda"){
        console.log("\nYOU WERE RIGHT!");
        console.log("you scored 10 points");
        score += 10;
        console.log("Current score is..." + score);
        answer = prompt.question("Please press enter to continue...");
        askQuestion(2);
      } else if (answer == "kenya" || answer == "ethiopia" || answer == "somalia" || answer == "rwanda") {
        console.log("\nYOU'RE NOT QUITE CLOSE!");
        console.log("Your current score is... " + score);
        console.log("Uganda was the answer!");
        answer = prompt.question("Please press enter to continue...")
         askQuestion(2);
      }else{
        console.log("That didn't work, please try again. ");  
         askQuestion(1);
      }
      saveGame();

    break;

    case 2://This bit of code is the last question of the first round.
      console.clear();
      answer = prompt.question("Question 3"); //duvall - format question below
      console.log('\x1b[32m%s\x1b[0m', 'As a child, my parents would advise me not to enter certain areas as it was crowded with people and as a kid, I would walk to school barefoot, surprisingly this was good because it toughened my feet for long runs when we had local championship races. '); prompt.question("Press any key to continue\n")
      uganda();
      console.log('\x1b[33m%s\x1b[0m',   '----------------------   ');
      console.log('\x1b[32m%s\x1b[0m', ' Pick your guess...');
      console.log('\x1b[33m%s\x1b[0m',   '----------------------   ');
      console.log ("> North: Kapchorwa ");
      console.log ("> East: Kabale" );
      console.log ("> Central: Kampala ");
      console.log ("> West: Buhweju ");
      console.log('\x1b[33m%s\x1b[0m',   '----------------------   ');console.log('\x1b[32m%s\x1b[0m', ' ???????????????');
      console.log('\x1b[33m%s\x1b[0m',   '----------------------   ');
      answer = prompt.question("Please enter North,East,West or Central...\n");
      answer = answer.toLowerCase();
      if (answer == "north") {
        console.log(array);
        console.log("You scored 10 points");
        score += 10;
        console.log("Current score is..." + score);
        answer = prompt.question("Please press enter for the next round...");
        askQuestion(3);
      } else if (answer == "east" || answer == "central" || answer == "west" ) { //duvall - lowercase the answer
        console.log("\nYOU'RE NOT QUITE CLOSE!");
        console.log("Current score is..." + score);
        console.log("North was the answer!");
        answer = prompt.question("Please press enter for the next round...");
         askQuestion(3);
      }else{
        console.log("That didn't work, please try again. ")  
       askQuestion(2)
      }
      saveGame();



    break;

    case 3: //set round.
     console.clear();
      answer = prompt.question("Round 2...");
      console.log('\x1b[32m%s\x1b[0m',  'From the list of features, which county in europe best describes \nwhere I might possibly be from?');
      prompt.question("Press any key to continue\n")
      console.log('\x1b[33m%s\x1b[0m',   '----------------------   ');
      console.log ("> Race: White (olive skin) "  );
      console.log ("> Facial: Strong jawline "  );       
      console.log ("> Hair_color: Dark hair "  );
      console.log ("> Nose_feature:Roman nose");
      console.log('\x1b[33m%s\x1b[0m',   '----------------------');

      flag("");
      console.log('\x1b[32m%s\x1b[0m',  '>Italy     >Romania      >England    >Spain     >France ');

      answer = prompt.question("Type in your answer...\n"); //duvall - put new line
      answer = answer.toLowerCase();
      if (answer == "italy") {
        console.log("\nYOU WERE RIGHT!");
        console.log("You scored 10 points");
        score += 10;//this will increase the players score by 10 
        console.log("Current score is..." + score);
        answer = prompt.question("Please press enter for the next question....");
        fireRound("start"); //start of fire round below
      }else if (answer == "romania" || answer == "england" || answer == "spain" || answer == "france") {
        console.log("\nYOU'RE NOT QUITE CLOSE!");
        console.log("Current score is..." + score);
        console.log("Italy was the answer!");
        answer = prompt.question("Please press enter for the next question....");
        fireRound("start"); //start of fire round below
      }else{
        console.log("That didn't work, please try again. ")  
         askQuestion(3); //replays Q if answer is not given/wrong
      }
      saveGame();


    break;
   // At this part, I have changed the questions.
  }
}



////////////////////////////////////////////////////////////////////////////////////////////////////

let fireRoundTally = [0,1,2,3] //keep track of questions that have been used
let fireRoundTracker = 0 //keeps track of how many times function has been used

function generateNumber(){
  //Math.floor(Math.random() * (MAX - MIN) + MIN);
  let question_math = Math.floor(Math.random() * (4 - 0) + 0);
  if (fireRoundTally[question_math] == question_math){ //if the random num is equal to the index of the array
    fireRoundTally.splice(question_math, 1, -1); //replaces the index with -1 so it can no longer come up again
    fireRoundTracker += 1 //adds one to tracker each time function is ran
    console.log(fireRoundTally); //to check it has been removed
    return fireRound(question_math); //the random number only gets passed once to the random fire round function to make sure the same question doesn't come up again
  }
  else if (fireRoundTracker >= 4){ //runs if the tracker has reached 3
    fireRound("last question"); //calls the very last question
    return;
  }
  else {
    generateNumber(); //indirectly creates a loop so the random number has to be passed to the 'fire round' function before it stops it self
  }
}

function fireRound(question_number) {
  switch(question_number){
    case "start":
      console.clear();
      //console.log(fireRoundTracker);(used for testing)
      //console.log(fireRoundTally);(used for testing)
      console.log('\x1b[32m%s\x1b[0m',  'Fire round!');
      answer = prompt.question("Question..");
      console. log('\x1b[32m%s\x1b[0m',  'I grew up in a rich culture filled with the most lively of people, who loved eating gelato and pasta all day long. My city is home to many tours...?');
      prompt.question("Press any key to continue\n") 
      flame();
      console.log(facts_2)
      answer = prompt.question("Please enter A or B or C...\n");
      answer = answer.toLowerCase();
      if (answer == "a") {
        console.log("\nYOU WERE RIGHT!");
        console.log("you scored 10 points");
        score += 10;
        console.log("Current score is..." + score);
        answer = prompt.question("Please press enter for the next question....");
         fireRound(generateNumber());
      }else if (answer == "b" || answer == "c") {
        console.log("\nYOU'RE NOT QUITE CLOSE!");
        console.log("Current score is..." + score);
        console.log("A was the answer!");
        answer = prompt.question("Please press enter for the next question....");
        fireRound(generateNumber());
      }else{
        console.log("That didn't work, please try again. ")  
          fireRound(0);
        }
      saveGame();

    break;

    case 0:
      console.clear();
      //console.log(fireRoundTracker); (used for testing)
      //console.log(fireRoundTally); (used for testing)
      answer = prompt.question("Question..");
      console.log('\x1b[32m%s\x1b[0m',  'Which statement is correct about my country?');
      //console.log("Case 0"); (used for testing)
      flame(); 
      console.log(facts)
      answer = prompt.question("Please enter A or B or C...\n");
      answer = answer.toLowerCase();
      if (answer == "b") {
        console.log("\nYOU WERE RIGHT!");
        console.log("you scored 10 points");
        score += 10;
        console.log("Current score is..." + score);
        answer = prompt.question("Please press enter for the next question....");
        fireRound(generateNumber());
      }else if (answer == "a" || answer == "c" ) {
        console.log("\nYOU'RE NOT QUITE CLOSE!");
        console.log("Current score is..." + score);
        console.log("B was the answer!");
        answer = prompt.question("Please press enter for the next question....");
        fireRound(generateNumber());
      }else{
        console.log("That didn't work, please enter A or B or C. ")  
          fireRound(0);
        }
      saveGame();



    break;

    case 1:
      console.clear();
      //console.log(fireRoundTracker); (used for testing)
      //console.log(fireRoundTally); (used for testing)
      answer = prompt.question("Question..");
      console.log('\x1b[32m%s\x1b[0m',  'Which statement is correct about my country?');
      //console.log("Case 1"); (used for testing)
      flame();
      console.log(facts_3);
      answer = prompt.question("Please enter A or B or C...\n");
      answer = answer.toLowerCase();
      if (answer == "a") {
        console.log("\nYOU WERE RIGHT!");
        console.log("you scored 10 points");
        score += 10;
        console.log("Current score is..." + score);
        answer = prompt.question("Please press enter for the next question....");
        fireRound(generateNumber());
      }else if (answer == "b" || answer == "c" ) {
        console.log("\nYOU'RE NOT QUITE CLOSE!");
        console.log("Current score is..." + score);
        console.log("A was the answer!");
        answer = prompt.question("Please press enter for the next question....");
        fireRound(generateNumber());
      }else{
        console.log("That didn't work, please try again. ")  
          fireRound(1);
        }
      saveGame();



      break;

    case 2:
      console.clear();
      //console.log(fireRoundTracker); (used for testing)
      //console.log(fireRoundTally); (used for testing)
      answer = prompt.question("Question..");
      console.log('\x1b[32m%s\x1b[0m',  'Which statement is correct about my country?');
      //console.log("Case 2"); (used for testing)
      flame(); //displays asci art of flame
      console.log(facts_4);
      answer = prompt.question("Please enter A or B or C...\n");
      answer = answer.toLowerCase();
      if (answer == "b") {
        console.log("\nYOU WERE RIGHT!");
        console.log("you scored 10 points");
        score += 10;
        console.log("Current score is..." + score);
        answer = prompt.question("Please press enter for the next question....");
        fireRound(generateNumber());
      }else if (answer == "a" || answer == "c" ) {
        console.log("\nYOU'RE NOT QUITE CLOSE!");
        console.log("B was the answer!");
        answer = prompt.question("Please press enter for the next question....");
        fireRound(generateNumber());
      }else{
        console.log("That didn't work, please try again. ")  
         fireRound(2);
        }
      saveGame();


      break;

    case 3:

      console.clear();
      //console.log(fireRoundTracker); (used for testing)
      //console.log(fireRoundTally); (used for testing)
      answer = prompt.question("Question..");
      console.log('\x1b[32m%s\x1b[0m',  'Which statement is correct about my country?');
      //console.log("Case 3"); (used for testing)
      flame();
      console.log(facts_5);
      answer = prompt.question("Please enter A or B or C...\n");
      answer = answer.toLowerCase();
      if (answer == "a") {
        console.log("\nYOU WERE RIGHT!");
        console.log("you scored 10 points");
        score += 10;
        console.log("Current score is..." + score);
        answer = prompt.question("Please press enter for the next question....");
        fireRound(generateNumber());
      }else if (answer == "b" || answer == "c" ) {
        console.log("\nYOU'RE NOT QUITE CLOSE!");
        console.log("Current score is..." + score);
        console.log("A was the answer!");
        answer = prompt.question("Please press enter for the next question....");
        fireRound(generateNumber());
      }else{
        console.log("That didn't work, please try again. ")  
        fireRound(3);
      }
      saveGame();


      break;

    case "last question":
      console.clear();
      answer = prompt.question("Question..");
      console.log('\x1b[32m%s\x1b[0m',  'Which statement is correct about my country?');
      flame();
      console.log(facts_6);
      answer = prompt.question("Please enter A or B or C...\n");
      answer = answer.toLowerCase();
      if (answer == "a") {
        console.log("\nYOU WERE RIGHT!");
        console.log("you scored 10 points");
        score += 10;
        console.log("Current score is..." + score);
        answer = prompt.question("Please press enter for the next question....");
        fireRound("finish");
      }else if (answer == "b" || answer == "c" ) {
        console.log("\nYOU'RE NOT QUITE CLOSE!");
        console.log("Current score is..." + score);
        console.log("A was the answer!");
        answer = prompt.question("Please press enter for the next question....");
      fireRound("finish");
      }else{
        console.log("That didn't work, please try again. ")  
         fireRound("Last question");
      }
      saveGame();


      break;

    case "finish":
       console.clear();
       console. log('\x1b[32m%s\x1b[0m',  'Congratulations on reaching the end of the game, here is your score');
       prompt.question("Press any key to continue\n") 


      if (score >= 0 && score <= 45){
        console.clear();
        worldGlobe();
        console.log("You're a Rookie");
      }
      else if (score >= 45 && score <= 65){
        console.clear();
         worldGlobe();
        console.log("You're a Amateur");
      }
      else if (score >= 65 && score <= 85){
        console.clear();
        worldGlobe();
        console.log("You're an All Star");
      }
      else if (score >= 85 && score <= 99){
        console.clear();
        worldGlobe();
        console.log("You're a Superstar");
      }
      else if (score >= 100){
        console.clear();
        worldGlobe();
        console.log("You're a master");
      }

      break;

  }


}

//fireRound("start"); //purely for testing fire round
askQuestion("start");





//setTimeout(() => {console.log("Delayed for 1 second.");}, 1000);

// between 4 & 9