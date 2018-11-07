// Wes Solution
const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



// My Solution

// let spacing = document.getElementById('spacing')
// let blur = document.getElementById('blur')
// let base = document.getElementById('base')
// let pic = document.getElementById('pic')

// spacing.addEventListener('mousemove', ()=> {
//     pic.style.padding = `${spacing.value}px`
// })

// blur.addEventListener('mousemove', ()=> {
//     pic.style.filter = `blur(${blur.value}px)`
// })

// base.addEventListener('change', ()=> {
//     document.documentElement.style.setProperty(`--base`, base.value) 
// })