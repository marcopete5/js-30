const panel = document.querySelectorAll('.panel')
panel.forEach((pan,index) => {
    pan.childNodes[1].setAttribute('style', 'position: relative; bottom: 100%')
    pan.childNodes[5].setAttribute('style', 'position: relative; top: 100%')
    pan.addEventListener('click', () => {
        pan.childNodes[1].style.bottom = "20%"
        pan.childNodes[3].style.fontSize = "5rem"
        pan.childNodes[5].style.top = "20%"
        pan.style.flex = 3
        for(let i = 0; i < panel.length; i++){
            if(panel[i] !== panel[index]){
                panel[i].childNodes[1].style.bottom = "100%"
                panel[i].childNodes[3].style.fontSize = "3rem"
                panel[i].childNodes[5].style.top = "100%"
                panel[i].style.flex = 1
            }
        }
    })
})
