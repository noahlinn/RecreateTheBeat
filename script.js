const levelTitle = document.querySelector('#levelHeader')
const levelDiscription = document.querySelector('.discription')
const levelContainer = document.querySelector('.level')
const startContainer = document.querySelector('.startContainer')
const gridBox = document.querySelectorAll('.gridBox')
const submitButton = document.querySelector('#checkForWin')
const playBackButton = document.querySelector('#playBack')
const playButton = document.querySelector('.playBeat')
const startButton = document.querySelector('#start')
const hhSound = document.querySelector('.hhsound')
hhSound.volume = .4
const snSound = document.querySelector('.snaresound')
snSound.volume = .8
const kickSound = document.querySelector('.kicksound')
const rideSound = document.querySelector('.ridesound')
const lossContainer = document.querySelector('.loss')
const tryAgainButton = document.querySelector('#tryAgain')
const playAgainButton = document.querySelector('#playAgain')
const winContainer = document.querySelector('.win')
const beat1 = document.querySelector('.beat1')
const beat2 = document.querySelector('.beat2')
const beat3 = document.querySelector('.beat3')
const beat4 = document.querySelector('.beat4')
const beat5 = document.querySelector('.beat5')
const beat6 = document.querySelector('.beat6')
const beat7 = document.querySelector('.beat7')
const beat8 = document.querySelector('.beat8')
const beat9 = document.querySelector('.beat9')
const beat10 = document.querySelector('.beat10')
const beat11 = document.querySelector('.beat11')

let playCurrentGrid = 0
let level = 1
let loss = 1
let isPlaying = null
// let beatPlaying = false


let currentGrid = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

const winLevel1 = [
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

const winLevel2 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0
]

const winLevel3 = [
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

const winLevel4 = [
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

const winLevel5 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0
]

const winLevel6 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0
]

const winLevel7 = [
    1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

const winLevel8 = [
    0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

const winLevel9 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

const winLevel10 = [
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

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
		if (current[i] !== win[i]){
            // loss++;   
            clearLevelsLoss() 
            changeLevelHeader()
            changeDiscription()
            console.log(level, loss)
            // alert('Try Again!'); 
            return false;}
	}
        alert(`That is the correct beat!`);console.log('shit yea')
        level ++
        loss = 1
        // console.log(level)
        resetBoard()
        clearLevels()   
        changeLevelHeader()
        changeDiscription()
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

startButton.addEventListener('click', () => {
    startContainer.classList.add('hidden')
    levelContainer.classList.remove('hidden')
    letlevel = 1
})

tryAgainButton.addEventListener('click', () => {
    lossContainer.classList.add('hidden')
    startContainer.classList.remove('hidden')
    level = 1
})
playAgainButton.addEventListener('click', () => {
    winContainer.classList.add('hidden')
    startContainer.classList.remove('hidden')
})

//on click you can hear what you created back 
playBackButton.addEventListener('click', function (){ 
    console.log('play back button ')
    rock()
})
//on click it will play the beat you're supposed to recreate
playButton.addEventListener('click', () => {
    console.log('play beat button')
    playBeat()

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
    if (level === 12){
        levelContainer.classList.add('hidden')
        winContainer.classList.remove('hidden')
        level = 1
    }
}   
clearLevelsLoss = () => {
    if (loss === 3){
        level = 1
        levelContainer.classList.add('hidden')
        lossContainer.classList.remove('hidden')
        loss = 1
        resetBoard()
    }
    else{
        loss++
        alert('Try Again!');
    }
}

changeLevelHeader = () => {
    levelTitle.innerHTML=`Level ${level}`
}   
changeDiscription = () => {
    if(level === 1){
        levelDiscription.innerHTML = "Let's start out easy! Quarter notes on the hi hats, 4 on the floor and snare on 2 & 4!"
    }
    else if(level === 2){
        levelDiscription.innerHTML = "Keep the bass and snare going, but move your hand from the hi hats to the ride!"
    }
    else if(level === 3){
        levelDiscription.innerHTML = "Alright! Let's mix it up! Let's go back to the hi hats, snare still on 2 & 4, BUT bass drum now on 1, 3 & the AND of 3!"
    }
    else if(level === 4){
        levelDiscription.innerHTML = "We're getting somewhere! Now, play the hi hats twice as fast, keep the snare on 2 & 4 and add the AND of 1 to the bass drum!"
    }
    else if(level === 5){
        levelDiscription.innerHTML = "Hell yea! Let's go back over to the ride and play 1/8th notes. Bass drum on 1 & 3 and the AND of every beat. Snare still rockin' on 2 & 4!"
    }
    else if(level === 6){
        levelDiscription.innerHTML = "Let's introduce some 16th notes! Stay on the Ride. Snare keeps that 2 & 4. Here's the tricky part - bass drum on 1 AND & the A of 2 and then on 3."
    }
    else if(level === 7){
        levelDiscription.innerHTML = "Damn we're really rocking now! Play every 16th note besides 2 & 4 on the hats. Snare on 2 & 4. Bass drum on 1, the a of 1, the AND of 2, the e of 3 and the a of 4!"
    }
    else if(level === 8){
        levelDiscription.innerHTML = "Alright sorry that last one was a little hard. Let's take it back a step... Its boots n cats time. DISCO BABY!"
    }
    else if(level === 9){
        levelDiscription.innerHTML = `Now that was fun... right? Okay, yea, play an exerpt out of Johnn Cage's 4'33"`
    }
    else if(level === 10){
        levelDiscription.innerHTML = `Got you with last one eh? SSX Tricky. Alright lets do something different with the snare drum. Match what I play!`
    }
    else if(level === 11){
        levelDiscription.innerHTML = `Alright that last one was actually too hard. If you got it... well... good for you. Last one. Let's go out with a blast!`
    }

    
    
}

// playBeat = () => {
//     if (beatPlaying){
//         eval(`beat${level}`).pause();
//         beatPlaying = false
//         console.log(beatPlaying)
//     }
//     else{
//         eval(`beat${level}`).play();
//         console.log(beatPlaying)
//         beatPlaying = true
//     } 
    
// }
playBeat = () => {
    eval(`beat${level}`).currentTime = 0;
    eval(`beat${level}`).play();

}
