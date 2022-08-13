


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

 
  function get_random(list_of_elements){
    index = get_random_index(list_of_elements);
    return list_of_elements[index];
   

  }



let wordText = document.querySelector("#word")

let nounText = document.querySelector("#noun")

let verbText = document.querySelector("#verb")

let adverbText = document.querySelector("#adverb")

let buttons = document.querySelectorAll("button")

let adjectiveText = document.querySelector("#adjective")

let bar_score = document.querySelector(".bar")

 

function increment_scoreBar(){
        if(count_clicked<16){ 

            let x = bar_score.offsetWidth+23
            bar_score.style.width = `${x}px`
            
        }
            
}



function change_random(){
    wordText.innerText = get_random(wordsArray) 
}


change_random()

let count_success = 0 ; 
let count_clicked = 0 ;

buttons.forEach(function (button){
    button.addEventListener("click" , checkFunc)
    
    function checkFunc(){
    if(button.innerText === myObject.wordList[index].pos){

        button.classList.add("succes")
        setTimeout(function(){
            button.classList.remove("succes")
        },2000)
        console.log(count_success+=1) 
        count_clicked+=1
        
        increment_scoreBar()
        
        
    }else if(button.innerText !== myObject.wordList[index].pos){
        button.classList.add("wrong")
        setTimeout(function(){
            button.classList.remove("wrong")
        },2000)

        count_clicked+=1
    }
    
    setTimeout(change_random,2000)
    showResult()
}


})

let scoreResult = document.querySelector("#score_result")


function showResult(){ 

        if (count_clicked==15){
        let div = document.createElement("div")
        div.classList.add("score_container")
        let parg = document.createElement("p")
        parg.innerText = `${count_success} of ${count_clicked}` 
        div.appendChild(parg)
        document.querySelector("#wrap").appendChild(div)
        }
        
    

}


