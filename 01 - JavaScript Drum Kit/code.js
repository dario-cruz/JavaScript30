// Code for registering key input.
// VScode is stating that keyCode is depricated.
// Will have to look into the non-depricated method.

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!audio) return; // stops function.
    audio.play(); // plays the associated audio.
    audio.currentTime = 0; // returns audio to start on press.
    key.classList.add('playing'); // Links to css animation property.

});
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    // console.log(e.propertyName);
}

const keys = document.querySelectorAll('.key');
keys.forEach (key => key.addEventListener('transitionend', removeTransition));
