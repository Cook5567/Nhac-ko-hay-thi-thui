// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Kích hoạt hiệu ứng khi trang được tải
    document.body.classList.add('loaded');

    const playButton = document.querySelector('.play');
    const pauseButton = document.querySelector('.pause');
    const volumeSlider = document.querySelector('.volume-slider');
    const trackInfo = document.querySelector('.track-info');

    let audio = new Audio('path/to/your/song.mp3'); // Thay đổi đường dẫn đến file nhạc của bạn

    playButton.addEventListener('click', () => {
        audio.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline';
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
        playButton.style.display = 'inline';
        pauseButton.style.display = 'none';
    });

    volumeSlider.addEventListener('input', (event) => {
        audio.volume = event.target.value / 100;
    });

    audio.addEventListener('timeupdate', () => {
        trackInfo.querySelector('.current-time').textContent = formatTime(audio.currentTime);
        trackInfo.querySelector('.duration').textContent = formatTime(audio.duration);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});
