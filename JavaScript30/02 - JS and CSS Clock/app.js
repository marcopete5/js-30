// My way after seeing some ideas

let seconds = document.querySelector('.second-hand')
let minutes = document.querySelector('.min-hand')
let hours = document.querySelector('.hour-hand')




setInterval(()=>{
        let now = new Date()
        let sec = now.getSeconds();
        let secDeg = ((sec / 60) * 360) + 90
        let min = now.getMinutes();
        let minDeg = ((min / 60) * 360) + 90
        let hour = now.getHours();
        let hourDeg = ((hour / 60) * 360) + 90
        seconds.style.transform = `rotate(${secDeg}deg)`
        minutes.style.transform = `rotate(${minDeg}deg)`
        hours.style.transform = `rotate(${hourDeg}deg)`
}, 1000)



// My way 

// let seconds = document.querySelector('.second-hand')
// let minutes = document.querySelector('.min-hand')
// let hours = document.querySelector('.hour-hand')

// let secTotal = 0;
// let minTotal = 0;
// let hourTotal = 0;
// let fullMin = false;
// let fullHour = false;

// setInterval(()=>{
//     if(!fullMin){
//         secTotal+= 6
//         seconds.style.transform = `rotate(${90 + secTotal}deg)`
//         secTotal % 360 === 0 ? fullMin = true : null;
//     }else if (fullMin && !fullHour){
//         minTotal += 6
//         secTotal += 6
//         seconds.style.transform = `rotate(${90 + secTotal}deg)`
//         minutes.style.transform = `rotate(${90 + minTotal}deg)`
//         minTotal % 360 === 0 ? fullHour = true : null;
//         fullMin = false;
//     }else if (fullMin && fullHour){
//         hourTotal += 6
//         minTotal += 6
//         secTotal += 6
//         seconds.style.transform = `rotate(${90 + secTotal}deg)`
//         minutes.style.transform = `rotate(${90 + minTotal}deg)`
//         hours.style.transform = `rotate(${90 + hourTotal}deg)`
//         fullMin = false;
//         fullHour = false;
//     }
// }, 1000)