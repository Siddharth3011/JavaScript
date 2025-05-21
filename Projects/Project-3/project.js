const clock = document.getElementById('clock');
const date = document.getElementById('date');
//OR
// const clock = document.querySelector('#clock');


setInterval(function(){ //setInterval(function(){}, 1000) => her second value lene ke liye 
    let time = new Date();
    clock.innerHTML = time.toLocaleTimeString()
    let day = new Date();
    date.innerHTML = day.toLocaleDateString()
}, 1000);