let picture = document.getElementById("questionPic")
let music = document.getElementById("questionMusic")
let nextButton = document.getElementById("nextButton")


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

let point = 0


// if(tebak === play fullsong)

function changeMusic(){

    indexRandom =  Math.round(Math.random() * 2);

    console.log(indexRandom);

    music.src = arrMusic[indexRandom]
    picture.src = arrPict[indexRandom]

}