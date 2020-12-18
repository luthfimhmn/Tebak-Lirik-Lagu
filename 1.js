let picture = document.getElementById("questionPic")
let music = document.getElementById("questionMusic")
let answer = document.getElementById("answer")
let hasil = document.getElementById("hasil")


let arrMusicQuestion = [
    "./music/kopdut_question.mp3",
    "./music/lazy_question.mp3",
    "./music/lemontree_question.mp3"
]

let arrPictQuestion = [
    "./img/kopdut_question.jpg",
    "./img/lazy_question.jpg",
    "./img/lemontree_question.jpg"
]

// let arrMusicAnswer=[
//     "./music/kopdut_answer.mp3",
//     "./music/lazy_answer.mp3",
//     "./music/lemontree_answer.mp3"
// ]

// let arrPictAnswer=[
//     "./img/kopdut_answer.jpg",
//     "./img/lazy_answer.jpg",
//     "./img/lemontree_answer.jpg"
// ]

// let hint = ['... kopi dangdut',
// '... all',
// '... tree'
// ]

let realAnswer = [
    'karena tersentuh alunan lagu semerdu kopi dangdut',
    'nothing at all',
    'is just a yellow lemon tree'
]

let point = 0

function changeMusic(){
    answer.placeholder = 'Tulis Jawabanmu Disini!'
    indexRandom =  Math.round(Math.random() * 2);
    music.src = arrMusicQuestion[indexRandom]
    picture.src = arrPictQuestion[indexRandom]

    hasil.setAttribute("class","hilang");
}

function bersih(){
    answer.value = ""
}

function tebak(event) {
    let response = answer.value;

    // if (music.src == './music/lazy_question.mp3' && response.toLowerCase() == realAnswer[1]) {
    //     hasil.setAttribute("class","muncul");
    //     bersih()
    // } 
    
    /// Belum dapet src-nya. gak masuk kondisi.


    if(response.toLowerCase() == realAnswer[0]){
            // masukan class hide jadi available
            hasil.setAttribute("class","muncul");
            bersih()
    }else if(response.toLowerCase() == realAnswer[1]){
            // masukan class hide jadi available
            hasil.setAttribute("class","muncul");
            bersih()
    }else if (response.toLowerCase() == realAnswer[2]){
            // masukan class hide jadi available
            hasil.setAttribute("class","muncul");
            bersih()
    }else{
        hasil.innerText = "Kamu masih salah!"
        hasil.setAttribute("class","muncul");
        bersih()
    }
}






