let songs = [
    {
        name: 'Feel It',
        path: '/Data/Feel it.mp3',
        artist: 'D4vd',
        cover: '/Data/cover.jpg'
    },
    {
        name: 'New Drop',
        path: '/Data/New Drop.mp3',
        artist: 'Don Toliver',
        cover: '/Data/cover02.jpg'
    },
    {
        name: 'Aarzu',
        path: '/Data/Aarzu.mp3',
        artist: 'Hasan Raheem',
        cover: '/Data/cover03.jpg'
    },
    {
        name: 'Sunflower',
        path: '/Data/Sunflower.mp3',
        artist: 'Post Malone and Swae Lee',
        cover: '/Data/cover04.jpg'
    },
];

const music= document.querySelector("audio");
const playBtn = document.querySelector(".play");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
const songImg=document.querySelector("img");
const progress=document.querySelector(".progress");
const box=document.querySelector(".box");
const sidebarIcon=document.querySelector(".sidebar-icon");
const sidebar = document.querySelector(".sidebar");

let isPlaying = false;

playBtn.addEventListener("click",()=>{
    if(!isPlaying){
    music.play();
    playBtn.classList.replace("fa-play","fa-pause");
    isPlaying=true;
    }else{
        music.pause();
        playBtn.classList.replace("fa-pause","fa-play");
        isPlaying=false;
    }
});

const loadSongs=(song)=>{
    title.innerHTML=song.name;
    artist.innerHTML=song.artist;
    music.src=song.path;
    songImg.src=song.cover;
}
// loadSongs(songs[3]);
let i=1;
const nextSong=()=>{
    i=(i+1)%songs.length;
    loadSongs(songs[i]);
    music.play();
    playBtn.classList.replace("fa-play","fa-pause");
}

const prevSong=()=>{
    i=(i-1 + songs.length) % songs.length;
    loadSongs(songs[i]);
    music.play();
    playBtn.classList.replace("fa-play","fa-pause");
}
next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);

music.addEventListener("timeupdate",()=>{
    progress.value=music.currentTime;
});
progress.addEventListener("input",()=>{
    music.currentTime=progress.value;
});
music.onloadedmetadata= function(){
    progress.max=music.duration;
    progress.value=music.currentTime;
}

sidebarIcon.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        i=index;
        loadSongs(songs[i]);
        music.play();
        playBtn.classList.replace("fa-play","fa-pause");      
    })
})