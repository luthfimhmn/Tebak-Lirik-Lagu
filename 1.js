let picture = document.getElementById("questionPic")
let music = document.getElementById("questionMusic")
let nextButton = document.getElementById("nextButton")
let answer = document.getElementById("answer")
let hasil = document.getElementById("hasil")


let arrMusic = [
    "./music/kopdut_question.mp4",
    "./music/kopdut_answer.mp4",
    "./music/icanfly.mp3"
]

let arrPict = [
    "./img/kopdut_question.jpg",
    "./img/kopdut_answer.jpg",
    "./img/kopdut_answer.jpg"
]

let arrMusicQues=[

]

let point = 0

function changeMusic(){

    indexRandom =  Math.round(Math.random() * 2);

    console.log(indexRandom);

    music.src = arrMusic[indexRandom]
    picture.src = arrPict[indexRandom]

}


function tebak(event) {
    let response = document.getElementById("answer").value;
    
    if(response.toLowerCase() === 'karena tersentuh alunan lagu semerdu kopi dangdut'){
        console.log('betul sekali luthfi');
        document.getElementById("answer").value = ""
    }
}