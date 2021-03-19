const gridBox = document.querySelectorAll('.gridBox')
const submitButton = document.querySelector('#checkForWin')

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

const initialize = event => {
    addClickToGrid(gridBox, currentGrid)
}
const addClickToGrid = (box, current) =>{
for(let i = 0; i<box.length; i++){
    box[i].addEventListener('click',() => {
        if (current[i] === 0){
        addFill(box, i, current)}
        else{
        removeFill(box, i, current)
            }
        })
    }
}
submitButton.addEventListener('click', () => {
    checkForWin(currentGrid,winGridLOneROne)
})

const checkForWin = (current, win) => {
	for (var i = 0; i < current.length; i++) {
		if (current[i] !== win[i]) return false;
	}
	console.log('shit yea')
};

const addFill = (box, i, current) => {
    box[i].classList.add('fill')
    current[i] = 1
}
const removeFill = (box, i, current) => {
    box[i].classList.remove('fill')
    current[i] = 0
}



document.addEventListener('DOMContentLoaded', initialize);