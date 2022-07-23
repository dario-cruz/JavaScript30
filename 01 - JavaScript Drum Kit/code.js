// Code for registering key input.
// VScode is stating that keyCode is depricated.
// Will have to look into the non-depricated method.
window.addEventListener('keydown', function(e) {
    // Code for logging that audio file is tied to key.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    console.log (e.keyCode);
});
