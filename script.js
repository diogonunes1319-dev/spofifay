// Lista de Artistas
const portugueseArtists = [
    "Xutos & Pontapés",
    "Nuno Ribeiro",
    "Fernando Daniel",
    "Calema",
    "Diogo Piçarra",
    "Carolina Deslandes",
    "Bárbara Bandeira",
    "Ivandro",
    "Syu S",
    "David Carreira",
    "Matias Damásio",
    "GNR",
    "Ornatos Violeta",
    "Rui Veloso",
    "Pedro Abrunhosa",
    "Plutonio",
    "Slow J",
    "Bárbara Tinoco",
    "António Zambujo",
    "Wet Bed Gang"
];

// Músicas na pasta raiz
const songs = [
    // --- Gerais ---
    { id: 1, title: "Amanhã De Manhã - Remix", artist: "Doce, André Henriques", duration: "3:24", cover: "imagens/amanha-de-manha.jpg", src: "amanha-de-manha.mp3" },
    { id: 2, title: "Baianá - Original mix", artist: "Rogerson", duration: "3:15", cover: "imagens/baiana.jpg", src: "Baianá - Original mix.mp3" },
    { id: 3, title: "Báilame - Remix", artist: "Nacho, Yandel, Bad Bunny", duration: "3:37", cover: "imagens/bailame.jpg", src: "Báilame - Remix.mp3" },
    { id: 4, title: "Dama Bandida", artist: "Fábio Lagarto", duration: "3:10", cover: "imagens/dama-bandida.jpg", src: "dama-bandida.mp3" },
    { id: 5, title: "La Plena", artist: "DJ Diego Alonso", duration: "3:05", cover: "imagens/la-plena.jpg", src: "La Plena.mp3" },
    { id: 6, title: "O Bicho - 2015 Remix", artist: "Iran Costa", duration: "3:30", cover: "imagens/o-bicho.jpg", src: "o-bicho.mp3" },
    { id: 7, title: "Problema (Feat. Laton)", artist: "Mastiksoul, Laton", duration: "3:20", cover: "imagens/problema.jpg", src: "problema.mp3" },
    { id: 8, title: "Pump It - Radio Edit", artist: "Javi Reina", duration: "3:45", cover: "imagens/pump-it.jpg", src: "pump-it.mp3" },
    { id: 9, title: "Rock This Party - Remix", artist: "DJ R'AN", duration: "3:12", cover: "imagens/rock-this-party.jpg", src: "Rock This Party.mp3" },
    { id: 10, title: "Scatman (Aumenta O Som)", artist: "Pedrinha Moraes, Alok", duration: "2:08", cover: "imagens/scatman.jpg", src: "Scatman.mp3" },
    { id: 11, title: "Viagem - Johnny 500 Remix", artist: "Calema, Johnny 500", duration: "3:28", cover: "imagens/viagem.jpg", src: "Viagem.mp3" },
    { id: 12, title: "Where Have You Been", artist: "Rihanna", duration: "4:02", cover: "imagens/rihanna.jpg", src: "where-have-you-been.mp3" },
    { id: 13, title: "Zookey - Radio Edit", artist: "Yves Larock feat. Roland Richards", duration: "3:18", cover: "imagens/zookey.jpg", src: "Zookey.mp3" },

    // --- Xutos & Pontapés ---
    { id: 14, title: "O Homem Do Leme - Live", artist: "Xutos & Pontapés", duration: "4:30", cover: "imagens/xutos.jpg", src: "O Homem Do Leme - Live.mp3" },
    { id: 15, title: "O Mundo Ao Contrário", artist: "Xutos & Pontapés", duration: "4:15", cover: "imagens/xutos.jpg", src: "O Mundo Ao Contrário.mp3" },
    { id: 16, title: "À Minha Maneira", artist: "Xutos & Pontapés", duration: "3:25", cover: "imagens/xutos.jpg", src: "À Minha Maneira.mp3" },
    { id: 17, title: "Circo De Feras", artist: "Xutos & Pontapés", duration: "4:20", cover: "imagens/xutos.jpg", src: "Circo De Feras.mp3" },

    // --- Nuno Ribeiro ---
    { id: 24, title: "Não Deixa", artist: "Nelson Freitas; Nuno Ribeiro", duration: "3:15", cover: "imagens/nuno-ribeiro.jpg", src: "Nelson Freitas, Nuno Ribeiro - Não Deixa.mp3" },
    { id: 25, title: "Imagina", artist: "Nuno Ribeiro", duration: "3:10", cover: "imagens/nuno-ribeiro.jpg", src: "Nuno Ribeiro - Imagina (SPOTISAVER).mp3" },
    { id: 32, title: "Maria Joana", artist: "Nuno Ribeiro, Calema, Mariza", duration: "3:30", cover: "imagens/nuno-ribeiro.jpg", src: "Maria Joana_spotdown.org.mp3" },

    // --- Fernando Daniel ---
    { id: 34, title: "Cair", artist: "Fernando Daniel", duration: "3:15", cover: "imagens/fernando-daniel.jpg", src: "Fernando Daniel - Cair - Fernando Daniel (128k).mp3" },
    { id: 35, title: "Casa", artist: "Fernando Daniel", duration: "3:20", cover: "imagens/fernando-daniel.jpg", src: "Fernando Daniel - casa - Fernando Daniel (128k).mp3" },
    { id: 36, title: "Espera", artist: "Fernando Daniel", duration: "3:48", cover: "imagens/fernando-daniel.jpg", src: "Fernando Daniel - Espera - Fernando Daniel (128k).mp3" }
];

// Estado da Aplicação
let songIndex = 0;
let isPlaying = false;
let isDragging = false;

// Elementos DOM
const contentView = document.getElementById('content-view');
const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const coverImg = document.getElementById('player-cover');
const songTitle = document.getElementById('player-title');
const songArtist = document.getElementById('player-artist');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');
const volumeSlider = document.getElementById('volume-slider');
const searchInput = document.getElementById('search-input');
const btnInicio = document.getElementById('btn-inicio');
const artistPlaylistsList = document.getElementById('artist-playlists');

// Sidebar
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');

function openSidebar() {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
}

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
}

menuToggleBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// RENDERIZAR PÁGINA INICIAL DINÂMICA
function renderHomeView() {
    contentView.innerHTML = `
        <div class="section-block">
            <h3><i class="fa-solid fa-fire" style="color: #1db954;"></i> Em Destaque</h3>
            <div class="horizontal-scroll" id="scroll-destaques"></div>
        </div>

        <div class="section-block">
            <h3><i class="fa-solid fa-users" style="color: #1db954;"></i> Artistas Principais</h3>
            <div class="horizontal-scroll" id="scroll-artistas"></div>
        </div>

        <div class="section-block">
            <h3><i class="fa-solid fa-compact-disc" style="color: #1db954;"></i> Mais Ouvidas</h3>
            <div class="horizontal-scroll" id="scroll-populares"></div>
        </div>
    `;

    const scrollDestaques = document.getElementById('scroll-destaques');
    const scrollArtistas = document.getElementById('scroll-artistas');
    const scrollPopulares = document.getElementById('scroll-populares');

    songs.slice(0, 6).forEach(song => {
        scrollDestaques.appendChild(createMusicCard(song));
    });

    const featuredArtists = ["Xutos & Pontapés", "Nuno Ribeiro", "Fernando Daniel", "Calema", "Syu S"];
    featuredArtists.forEach(artist => {
        const card = document.createElement('div');
        card.classList.add('artist-card');

        const artistSong = songs.find(s => s.artist.toLowerCase().includes(artist.toLowerCase()));
        const imgCover = artistSong ? artistSong.cover : "https://picsum.photos/200";

        card.innerHTML = `
            <img src="${imgCover}" alt="${artist}" onerror="this.src='https://picsum.photos/200'">
            <span>${artist}</span>
        `;

        card.addEventListener('click', () => filterByArtist(artist));
        scrollArtistas.appendChild(card);
    });

    songs.slice(6, 15).forEach(song => {
        scrollPopulares.appendChild(createMusicCard(song));
    });
}

function createMusicCard(song) {
    const card = document.createElement('div');
    card.classList.add('music-card');

    card.innerHTML = `
        <img src="${song.cover}" alt="${song.title}" onerror="this.src='https://picsum.photos/200'">
        <h4>${song.title}</h4>
        <p>${song.artist}</p>
    `;

    card.addEventListener('click', () => {
        const index = songs.findIndex(s => s.id === song.id);
        if (index !== -1) {
            songIndex = index;
            loadSong(songs[songIndex]);
            playSong();
        }
    });

    return card;
}

function filterByArtist(artistName) {
    const cleanArtist = artistName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const filtered = songs.filter(s => {
        const songArtistClean = s.artist.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        return songArtistClean.includes(cleanArtist) || cleanArtist.includes(songArtistClean);
    });

    contentView.innerHTML = `
        <div class="section-block">
            <h3>Músicas de ${artistName}</h3>
            <div class="cards-container" id="artist-songs-container"></div>
        </div>
    `;

    const container = document.getElementById('artist-songs-container');

    if (filtered.length === 0) {
        container.innerHTML = `<p style="color:#b3b3b3;">Nenhuma música encontrada para este artista.</p>`;
        return;
    }

    filtered.forEach((song) => {
        const row = document.createElement('div');
        row.classList.add('song-row');
        row.innerHTML = `
            <img class="song-row-img" src="${song.cover}" alt="${song.title}" onerror="this.src='https://picsum.photos/200'">
            <div class="song-details">
                <h4>${song.title}</h4>
                <div class="artist-info">
                    <span>${song.artist}</span>
                </div>
            </div>
            <div style="color:#b3b3b3; font-size:0.85rem;">${song.duration}</div>
        `;

        row.addEventListener('click', () => {
            songIndex = songs.findIndex(s => s.id === song.id);
            loadSong(songs[songIndex]);
            playSong();
        });

        container.appendChild(row);
    });
}

function renderArtistPlaylists() {
    artistPlaylistsList.innerHTML = '';
    portugueseArtists.forEach(artist => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid fa-music"></i> This Is ${artist}`;
        li.addEventListener('click', () => {
            filterByArtist(artist);
            closeSidebar();
        });
        artistPlaylistsList.appendChild(li);
    });
}

btnInicio.addEventListener('click', (e) => {
    e.preventDefault();
    btnInicio.classList.add('active');
    searchInput.value = '';
    renderHomeView();
    closeSidebar();
});

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    if (searchTerm === '') {
        renderHomeView();
        return;
    }

    const filtered = songs.filter(song => 
        song.title.toLowerCase().includes(searchTerm) || 
        song.artist.toLowerCase().includes(searchTerm)
    );

    contentView.innerHTML = `
        <div class="section-block">
            <h3>Resultados para "${searchTerm}"</h3>
            <div class="cards-container" id="search-container"></div>
        </div>
    `;

    const container = document.getElementById('search-container');
    filtered.forEach((song) => {
        const row = document.createElement('div');
        row.classList.add('song-row');
        row.innerHTML = `
            <img class="song-row-img" src="${song.cover}" alt="${song.title}">
            <div class="song-details">
                <h4>${song.title}</h4>
                <div class="artist-info"><span>${song.artist}</span></div>
            </div>
        `;
        row.addEventListener('click', () => {
            songIndex = songs.findIndex(s => s.id === song.id);
            loadSong(songs[songIndex]);
            playSong();
        });
        container.appendChild(row);
    });
});

// LEITOR DE ÁUDIO
function loadSong(song) {
    songTitle.innerText = song.title;
    songArtist.innerText = song.artist;
    coverImg.src = song.cover;
    audio.src = song.src;
}

function playSong() {
    isPlaying = true;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            playBtn.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
        }).catch(error => {
            isPlaying = false;
            playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
        });
    }
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
}

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        if (!audio.src) loadSong(songs[songIndex]);
        playSong();
    }
});

prevBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

nextBtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;

        const curMins = Math.floor(currentTime / 60);
        const curSecs = Math.floor(currentTime % 60);
        currentTimeEl.innerText = `${curMins}:${curSecs < 10 ? '0' : ''}${curSecs}`;

        const durMins = Math.floor(duration / 60);
        const durSecs = Math.floor(duration % 60);
        totalDurationEl.innerText = `${durMins}:${durSecs < 10 ? '0' : ''}${durSecs}`;
    }
});

// ARRASTAR BARRA NO IPHONE (TOUCH EVENTS)
function setProgress(e) {
    if (e.type.startsWith('touch')) {
        e.preventDefault();
    }
    const rect = progressContainer.getBoundingClientRect();
    let clientX = e.clientX;
    
    if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
    }
    
    const clickX = clientX - rect.left;
    const width = rect.width;
    const duration = audio.duration;
    
    if (duration && !isNaN(duration)) {
        let boundedX = Math.max(0, Math.min(clickX, width));
        audio.currentTime = (boundedX / width) * duration;
    }
}

progressContainer.addEventListener('click', setProgress);
progressContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    setProgress(e);
}, { passive: false });

window.addEventListener('touchmove', (e) => {
    if (isDragging) setProgress(e);
}, { passive: false });

window.addEventListener('touchend', () => {
    isDragging = false;
});

if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => { audio.volume = e.target.value; });
}

audio.addEventListener('ended', () => nextBtn.click());

// Inicialização
renderArtistPlaylists();
renderHomeView();
loadSong(songs[songIndex]);
