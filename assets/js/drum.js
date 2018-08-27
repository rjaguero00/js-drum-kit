function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    //Stops the function from running all together
    if (!audio) return;
    //rewinds to the start
    audio.currentTime = 0;

    audio.play();
    key.classList.add('playing');
};

const keys = document.querySelectorAll('.key');
document.addEventListener('keydown', playSound)
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    //skip it if it's not a transform
    if (e.propertyName !== 'transform') return;
    //Removes the transition
    this.classList.remove('playing');
}



// forEach LOOP
// cars.forEach(function (car, index, array) {
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// for (let i = 0; i < cars.length; i++) {
    //     console.log(cars[i]);
    // }