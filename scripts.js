
let turn = "X";
let gameover = new Audio("materials/gameover.mp3");
let music = new Audio("materials/bgmmsic.mp3");
let turnsound = new Audio("materials/ting.mp3");
let isgameover = false;

music.play()


const changeTurn = ()=> {
    return turn === "X" ? "0" : "X"
}


const checkWin = () => {
    let bt = document.getElementsByClassName('boxtext');
    let wins = [
        // [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        [0, 1, 2, 3, 6, 0],
        [3, 4, 5, 3, 18, 0],
        [6, 7, 8, 3, 30, 0],
        [0, 3, 6, -9, 18, 90],
        [1, 4, 7, 3, 18, 90],
        [2, 5, 8, 15, 18, 90],
        [0, 4, 8, 3, 18, 45],
        [2, 4, 6, 2.4, 18, 135],
    ]

    wins.forEach(e => {
        if ((bt[e[0]].innerText === bt[e[1]].innerText) && (bt[e[2]].innerText === bt[e[1]].innerText) && (bt[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = bt[e[0]].innerText + " Won";
            isgameover = true;
            document.getElementsByTagName('img')[0].style.width = "25vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "30vw";
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') 
        {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnsound.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})


reset.addEventListener('click' , () =>{
    let bt=document.querySelectorAll('.boxtext')
    Array.from(bt).forEach(e => {
        e.innerText=""
    })
    turn="X"
    document.getElementsByClassName("info")[0].innerText= " Turn for X"
    document.getElementsByTagName('img')[0].style.width = "0";
    document.querySelector(".line").style.width = "0vw";
    isgameover=false

})
