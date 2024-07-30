document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', () => {
        // Logic to play the selected song
        console.log('Play button clicked');
    });
});

document.querySelectorAll('.download-button').forEach(button => {
    button.addEventListener('click', () => {
        // Logic to download the selected song
        console.log('Download button clicked');
    });
});
