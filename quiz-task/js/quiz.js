


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

    return  Math.floor(Math.random()*ele.length);
    
  }

  let number_of_random = 0
  function get_random(list_of_elements){
    index = get_random_index(list_of_elements);
    number_of_random++
    console.log(number_of_random)
    return list_of_elements[index];
   

  }



let wordText = document.querySelector("#word")

let nounText = document.querySelector("#noun")

let verbText = document.querySelector("#verb")

let adverbText = document.querySelector("#adverb")

let buttons = document.querySelectorAll("button")

let adjectiveText = document.querySelector("#adjective")

let bar_score = document.querySelector(".bar")

 
let count = 0;
function increment_scoreBar(){
        if(bar_score.offsetWidth<368){ 

            let x = bar_score.offsetWidth+23
            bar_score.style.width = `${x}px`
            count+=1
        }
            
            console.log(count +"of"+wordsArray.length)
        
}



function change_random(){
    wordText.innerText = get_random(wordsArray) 
}


change_random()



buttons.forEach(function (button){
    button.addEventListener("click" , checkFunc)

    function checkFunc(){

    if(button.innerText === myObject.wordList[index].pos){

        
        button.classList.add("succes")
        setTimeout(function(){
            button.classList.remove("succes")
        },2000)
        increment_scoreBar()
        

        
        
        
    }else if(button.innerText !== myObject.wordList[index].pos){
        button.classList.add("wrong")
        setTimeout(function(){
            button.classList.remove("wrong")
        },2000)
        
    }
    
    setTimeout(change_random,2000)
    
}
})


