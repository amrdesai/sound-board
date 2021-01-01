// Variables
const sounds = ['cat', 'dog', 'sheep', 'horse', 'elephant', 'fox'];

// Display sounds buttons to UI
sounds.forEach((sound) => {
    // create button element
    const btn = document.createElement('button');
    // add class
    btn.classList.add('btn');
    // update button text
    btn.innerText = sound;
    // add event listener
    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });
    // display to ui
    document.getElementById('buttons').appendChild(btn);
});

// Function: Stop all current playing audio
const stopSongs = () => {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        // pause song
        song.pause();
        // reset song timer to 0seconds
        song.currentTime = 0;
    });
};
