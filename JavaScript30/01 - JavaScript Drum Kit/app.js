var keys = document.getElementsByClassName('key')

for(let i = 0; i < keys.length; i++){
    window.addEventListener('keydown', (e)=>{
        switch(e.keyCode){
            case 65: 
                var key = document.querySelectorAll("[data-key='65']")
                changeBox(key)
                break;
            case 83: 
                var key = document.querySelectorAll("[data-key='83']")
                changeBox(key)
                break;
            case 68: 
                var key = document.querySelectorAll("[data-key='68']")
                changeBox(key)
                break;
            case 70: 
                var key = document.querySelectorAll("[data-key='70']")
                changeBox(key)
                break;
            case 71: 
                var key = document.querySelectorAll("[data-key='71']")
                changeBox(key)
                break;
            case 72: 
                var key = document.querySelectorAll("[data-key='72']")
                changeBox(key)
                break;
            case 74: 
                var key = document.querySelectorAll("[data-key='74']")
                changeBox(key)
                break;
            case 75: 
                var key = document.querySelectorAll("[data-key='75']")
                changeBox(key)
                break;
            case 76: 
                var key = document.querySelectorAll("[data-key='76']")
                changeBox(key)
                break;
            default:
                break;
        }
        
    })
}

function changeBox (key){
    key[0].style.border = `5px solid #ffff00d9`
    key[0].style.boxShadow = `0px 0px 30px yellow`
    key[0].childNodes[1].style.fontSize = `4.1rem`
    key[1].currentTime = 0;
    key[1].play()
    setTimeout(()=> {
        key[0].style.border = `.4rem solid black`
        key[0].style.boxShadow = `none`
        key[0].childNodes[1].style.fontSize = `4rem`
    },100)
}