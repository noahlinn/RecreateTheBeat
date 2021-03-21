const levelTitle = document.querySelector('#levelHeader')
const levelContainer = document.querySelector('.level')
const gridBox = document.querySelectorAll('.gridBox')
const submitButton = document.querySelector('#checkForWin')
const playBackButton = document.querySelector('#playBack')
const playButton = document.querySelector('.playBeat')
const hhSound = document.querySelector('.hhsound')
const snSound = document.querySelector('.snaresound')
const kickSound = document.querySelector('.kicksound')
const rideSound = document.querySelector('.ridesound')
let playCurrentGrid = 0
let level = 1
let isPlaying = null



// class Level {
//     constructor(winCombintation)
// }




let currentGrid = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

const winLevel1 = [
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

const winLevel2 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0
]


// let 



sequence = () =>{
    let each = playCurrentGrid % 16
    liveBox = document.querySelectorAll(`.box${each}`)  

    liveBox.forEach((note) => {

        if (note.classList.contains('active')){
            // note.classList.add('moving')
            if (note.classList.contains('hh')){
                hhSound.currentTime = 0
                hhSound.play();
            }
            if (note.classList.contains('sn')){
                snSound.currentTime = 0
                snSound.play()

            }
            if (note.classList.contains('ba')){
                kickSound.currentTime = 0
                kickSound.play()

            }
            if (note.classList.contains('ri')){
                rideSound.currentTime = 0
                rideSound.play()

            }

        }
        // else{note.classList.add('moving')}
    })
    playCurrentGrid++
    // console.log(liveBox)
}
//starts the sequence function 
rock = () => {
    let tempo = 150;
    if (isPlaying){
        clearInterval(isPlaying);
        isPlaying = null;
    }
    else{
        isPlaying = setInterval(()=>{
            sequence();
        }, tempo);
    }
}
//load page
const initialize = event => {
    addClickToGrid(gridBox, currentGrid)
}
//checks for a win
const checkForWin = (current, win) => {
    if (current.length !== win.length) return false;
	for (var i = 0; i < current.length; i++) {
		if (current[i] !== win[i]){ alert('Try Again!'); return false;}
	}
        alert(`That is the correct beat!`);console.log('shit yea')
        level ++
        // console.log(level)
        resetBoard()
        clearLevels()   
        changeLevelHeader()

};
//resets board to default
const resetBoard = () => {
    for(i=0; i<currentGrid.length;i++){
        gridBox[i].classList.remove('fill', 'active')
        currentGrid[i] = 0
    }
}
//adds color fill to clicked box and updates class number in array 
const addFill = (box, i, current) => {
    box[i].classList.add('fill', 'active')
    current[i] = 1
    addSoundOnClick(box, i)
}
const removeFill = (box, i, current) => {
    box[i].classList.remove('fill', 'active')
    current[i] = 0
}
//when you click on a box it makes the sound of the corresponding instrument 
addSoundOnClick = (box, i) => { 
    if(box[i].classList.contains('hh')){
        hhSound.currentTime = 0
        hhSound.play();
    }
    if(box[i].classList.contains('sn')){
        snSound.currentTime = 0
        snSound.play();
    }
    if(box[i].classList.contains('ba')){
        kickSound.currentTime = 0
        kickSound.play();
    }
    if(box[i].classList.contains('ri')){
        rideSound.currentTime = 0
        rideSound.play();
    }
}
//on click you can hear what you created back 
playBackButton.addEventListener('click', function (){ 
    console.log('play back button ')
    rock()
})
//on click it will play the beat you're supposed to recreate
playButton.addEventListener('click', () => {
    console.log('play beat button')
})
//checks to see if what you created is correct 
submitButton.addEventListener('click', () => {
    levelAnswer=eval(`winLevel${level}`)
    checkForWin(currentGrid, levelAnswer)
})
//lets the grid to become clickable 
const addClickToGrid = (box, current) =>{
    for(let i = 0; i<box.length; i++){
        box[i].addEventListener('click',() => {
            if (current[i] === 0){
                addFill(box, i, current)}
            else{
                removeFill(box, i, current)}
            })
        }
    }

document.addEventListener('DOMContentLoaded', initialize);  

clearLevels = () => {
    if (level === 3){
        levelContainer.classList.add('hidden')
    }
}
changeLevelHeader = () => {
    levelTitle.innerHTML=`Level ${level}`
}   