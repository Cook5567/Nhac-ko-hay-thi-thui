const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const albumCover = document.getElementById('albumCover');
const volumeSlider = document.getElementById('volume');
const songTitle = document.getElementById('songTitle');
const artist = document.getElementById('artist');
const playlist = document.getElementById('playlist');
let audio = new Audio();
let isPlaying = false;
let currentSongIndex = 0;

const songs = Array.from(playlist.children);

function loadSong(songElement) {
    const song = songElement.getAttribute('data-song');
    const title = songElement.getAttribute('data-title');
    const artistName = songElement.getAttribute('data-artist');
    
    songTitle.textContent = title;
    artist.textContent = artistName;
    audio.src = song;
}

function playSong() {
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
    albumCover.style.animation = 'spin 4s linear infinite';
    audio.play();
    isPlaying = true;
}

function pauseSong() {
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    albumCover.style.animation = 'none';
    audio.pause();
    isPlaying = false;
}

function togglePlay() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function changeSong(index) {
    currentSongIndex = index;
    songs.forEach(song => song.classList.remove('active'));
    songs[currentSongIndex].classList.add('active');
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    changeSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    changeSong(currentSongIndex);
}

playButton.addEventListener('click', togglePlay);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

playlist.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const index = songs.indexOf(e.target);
        changeSong(index);
    }
});

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && isPlaying) {
        // Bạn có thể thêm mã để xử lý khi tab bị ẩn, ví dụ, hiển thị thông báo hoặc thay đổi trạng thái.
        // Ở đây, chúng tôi sẽ để lại âm thanh phát trong nền.
    }
});

loadSong(songs[currentSongIndex]);
