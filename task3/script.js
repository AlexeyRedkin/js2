const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);  
}

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);  
}

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);  
}




trafficLightEl.addEventListener('click', makeGreen);
// // trafficLightEl.addEventListener('click', makeYellow);


// // const trafficLightEl2 = document.querySelector('#trafficLight2');

// function makeGreen() {
//     trafficLightEl2.style.background = ('green');
//     trafficLightEl2.removeEventListener('click', makeGreen);
//     trafficLightEl2.addEventListener('click', makeYellow);  
// }

// function makeYellow() {
//     trafficLightEl2.style.background = ('yellow');
//     trafficLightEl2.removeEventListener('click', makeYellow);
//     trafficLightEl2.addEventListener('click', makeRed);  
// }

// function makeRed() {
//     trafficLightEl2.style.background = ('red');
//     trafficLightEl2.removeEventListener('click', makeRed);
//     trafficLightEl2.addEventListener('click', makeGreen);  
// }




// trafficLightEl.addEventListener('click', makeGreen);

