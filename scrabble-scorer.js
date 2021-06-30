// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let choice = 0


const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  let points = 0;

	for (let i = 0; i < word.length; i++) {
 
	  for (let pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			// letterPoints += `Points for '${word[i]}': ${pointValue}\n`
     points += Number(pointValue);
		 }
 
	  }
	}
	return points;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let answer ="";

function initialPrompt() {
  answer = input.question("Let's play some scrabble! Enter a word: ");
};


function simpleScore(word){
  word = word.toUpperCase();
  let points = 0

  for (i = 0; i< word.length; i++){
    points = i +1;
  }
  return points;
};

// Checks each character for vowels returns score

function vowelBonusScore(word){
  word = word.toUpperCase();
  let points = 0

  for(i=0; i < word.length; i++){
   let vowels = 'AEIOU'
    if(vowels.includes(word[i])){
       points += 3;
    } else {
      points += 1;
    }
    
  }
  return points;
}

let newPointStructure = transform(oldPointStructure);


function scrabbleScore(word){ 
  word = word.toLowerCase()
  let points = 0;

  for(i = 0; i < word.length; i++){
    points += newPointStructure[word[i]]
}
// console.log(points)
return points
}

let score = 0;


const scoringAlgorithms = [

  {
    name: 'Simple Scorer',
    description: 'Each letter is worth 1 point.',
    scoringFunction: simpleScore
  },

  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, cons((onants are 1 pt.',
    scoringFunction: vowelBonusScore
  },

  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoringFunction: scrabbleScore
  }
  


];

// console.log(scoringAlgorithms[1].scoringFunction('Bunny'))

function scorerPrompt() {
  let index = input.question(`Which scoring algorithm would you like to use?\n
0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2: `);

console.log();
index = Number(index);
choice = index
// console.log(tortoiseOne["name"])
// let chosenAlgo = scoringAlgorithms[index]['scoringFunction']();
let scorer = scoringAlgorithms[choice];
// let word = ''
// scorer.scoreFunction(word, newPointStructure)
score = Number(scorer.scoringFunction(answer));

console.log(`Algorithm: ${scorer.name}\n`);
console.log(`Scoring for '${answer}': ${score} `);
   
};

// objectName["new-key"] = propertyValue;

function transform(arr){
    let newObj = {}

  for (let points in arr){
    let newKey = arr[points];
     
     for (i = 0; i < arr[points].length; i++){
       newObj[newKey[i].toLowerCase()] = Number(points);
     }
  }
      // console.log(newObj)
  return newObj
}
// console.log(transform(oldPointStructure));



function runProgram() {
   initialPrompt();
   scorerPrompt();
  
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

