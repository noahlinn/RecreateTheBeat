const gridBox = document.querySelectorAll('.gridBox')
const submitButton = document.querySelector('#checkForWin')
const playBackButton = document.querySelector('#playBack')
const playButton = document.querySelector('.playBeat')
const hhSound = document.querySelector('.hhsound')
const snSound = document.querySelector('.snaresound')
const kickSound = document.querySelector('.kicksound')
const rideSound = document.querySelector('.ridesound')
let playCurrentGrid = 0


let currentGrid = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

let winGridLOneROne = [
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

let isPlaying = null

// console.log(0%16)
// console.log(1%16)
// console.log(31%16)

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



// let dogs = 500
// let letsRock() = setInterval(() => sequence(), 500)
// console.log(letsRock)


const initialize = event => {
    addClickToGrid(gridBox, currentGrid)
}

submitButton.addEventListener('click', () => {
    checkForWin(currentGrid,winGridLOneROne)
})

playButton.addEventListener('click', () => {
    console.log('play beat button')
})



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

const checkForWin = (current, win) => {
    if (current.length !== win.length) return false;
	for (var i = 0; i < current.length; i++) {
		if (current[i] !== win[i]){ console.log('lost'); return false;}
	}
	console.log('shit yea')
};

const addFill = (box, i, current) => {
    box[i].classList.add('fill', 'active')
    current[i] = 1
    addSoundOnClick(box, i)
}
const removeFill = (box, i, current) => {
    box[i].classList.remove('fill', 'active')
    current[i] = 0
}

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

playBackButton.addEventListener('click', function (){ 
    console.log('play back button ')
    rock()

})

document.addEventListener('DOMContentLoaded', initialize);