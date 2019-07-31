let boxes = document.querySelectorAll('input[type=checkbox]')

let boxArr = Array.from(boxes)

let lastLocation;
let pressed = false;


for(let i=0; i < boxArr.length;i++){
    boxArr[i].addEventListener('click', function(e){
        if (pressed && lastLocation !== i ){
            if (lastLocation < i){
                for(let ind = lastLocation; ind < i; ind++){
                    boxArr[ind].checked = true
                }
            }else if (lastLocation > i){
                for(let ind = i; ind < lastLocation; ind++){
                    boxArr[ind].checked = true
                }
            }
        }
        lastLocation = i
    })
}

window.addEventListener('keydown', (e)=> {
    if(e.keyCode === 91){
        pressed = true
    }
})

window.addEventListener('keyup', (e)=> {
    if(e.keyCode === 91){
        pressed = false
    }
})