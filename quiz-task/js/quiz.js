


let jsonFile = ` {
    "wordList": [
        {
            "id": 1,
            "word": "slowly",
            "pos": "adverb"
        },
        {
            "id": 2,
            "word": "ride",
            "pos": "verb"
        },
        {
            "id": 3,
            "word": "bus",
            "pos": "noun"
        },
        {
            "id": 4,
            "word": "commute",
            "pos": "verb"
        },
        {
            "id": 5,
            "word": "emissions",
            "pos": "noun"
        },
        {
            "id": 6,
            "word": "walk",
            "pos": "verb"
        },
        {
            "id": 7,
            "word": "fast",
            "pos": "adjective"
        },
        {
            "id": 8,
            "word": "car",
            "pos": "noun"
        },
        {
            "id": 9,
            "word": "crowded",
            "pos": "adjective"
        },
        {
            "id": 10,
            "word": "arrival",
            "pos": "noun"
        },
        {
            "id": 11,
            "word": "emit",
            "pos": "verb"
        },
        {
            "id": 12,
            "word": "independent",
            "pos": "adjective"
        },
        {
            "id": 13,
            "word": "convenient",
            "pos": "adjective"
        },
        {
            "id": 14,
            "word": "lane",
            "pos": "noun"
        },
        {
            "id": 15,
            "word": "heavily",
            "pos": "adverb"
        }
    ]
    
} `
 
let myObject = JSON.parse(jsonFile)

console.log(myObject.wordList)

let wordsArray = []
for(let x of myObject.wordList ){
    wordsArray.push(x.word)   
}



function get_random_index (ele) {
    return Math.floor((Math.random()*ele.length));
    
  }

  function get_random(list_of_elements){
    index = get_random_index(list_of_elements);
    return list_of_elements[index];
  }


let wordText = document.querySelector("#word")

let nounText = document.querySelector("#noun")

let verbText = document.querySelector("#verb")

let adverbText = document.querySelector("#adverb")

let adjectiveText = document.querySelector("#adjective")

wordText.innerText = get_random(wordsArray) 


var index = myObject.wordList.map(function(e) { return e.word; }).indexOf(wordText.innerText);



nounText.addEventListener( "click" , checkFunc )

function checkFunc(){

    if(nounText.innerText === myObject.wordList[index].pos ){
        console.log("sucsees")
    }
    wordText.innerText = get_random(wordsArray)
    

}

