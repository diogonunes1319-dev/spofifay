// Lista de 20 Artistas Portugueses para a Sidebar
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

// Lista Completa de Músicas (Sem a pasta 'musicas/')
const songs = [
    // --- Músicas Gerais ---
    {
        id: 1,
        title: "Amanhã De Manhã - Remix",
        artist: "Doce, André Henriques",
        duration: "3:24",
        cover: "imagens/amanha-de-manha.jpg",
        src: "amanha-de-manha.mp3"
    },
    {
        id: 2,
        title: "Baianá - Original mix",
        artist: "Rogerson",
        duration: "3:15",
        cover: "imagens/baiana.jpg",
        src: "Baianá - Original mix.mp3"
    },
    {
        id: 3,
        title: "Báilame - Remix",
        artist: "Nacho, Yandel, Bad Bunny",
        duration: "3:37",
        cover: "imagens/bailame.jpg",
        src: "Báilame - Remix.mp3"
    },
    {
        id: 4,
        title: "Dama Bandida",
        artist: "Fábio Lagarto",
        duration: "3:10",
        cover: "imagens/dama-bandida.jpg",
        src: "dama-bandida.mp3"
    },
    {
        id: 5,
        title: "La Plena",
        artist: "DJ Diego Alonso",
        duration: "3:05",
        cover: "imagens/la-plena.jpg",
        src: "La Plena.mp3"
    },
    {
        id: 6,
        title: "O Bicho - 2015 Remix",
        artist: "Iran Costa",
        duration: "3:30",
        cover: "imagens/o-bicho.jpg",
        src: "o-bicho.mp3"
    },
    {
        id: 7,
        title: "Problema (Feat. Laton)",
        artist: "Mastiksoul, Laton",
        duration: "3:20",
        cover: "imagens/problema.jpg",
        src: "problema.mp3"
    },
    {
        id: 8,
        title: "Pump It - Radio Edit",
        artist: "Javi Reina",
        duration: "3:45",
        cover: "imagens/pump-it.jpg",
        src: "pump-it.mp3"
    },
    {
        id: 9,
        title: "Rock This Party - Remix",
        artist: "DJ R'AN",
        duration: "3:12",
        cover: "imagens/rock-this-party.jpg",
        src: "Rock This Party.mp3"
    },
    {
        id: 10,
        title: "Scatman (Aumenta O Som)",
        artist: "Pedrinha Moraes, Alok",
        duration: "2:08",
        cover: "imagens/scatman.jpg",
        src: "Scatman.mp3"
    },
    {
        id: 11,
        title: "Viagem - Johnny 500 Remix",
        artist: "Calema, Johnny 500",
        duration: "3:28",
        cover: "imagens/viagem.jpg",
        src: "Viagem.mp3"
    },
    {
        id: 12,
        title: "Where Have You Been",
        artist: "Rihanna",
        duration: "4:02",
        cover: "imagens/rihanna.jpg",
        src: "where-have-you-been.mp3"
    },
    {
        id: 13,
        title: "Zookey - Radio Edit",
        artist: "Yves Larock feat. Roland Richards",
        duration: "3:18",
        cover: "imagens/zookey.jpg",
        src: "Zookey.mp3"
    },

    // --- Xutos & Pontapés ---
    {
        id: 14,
        title: "O Homem Do Leme - Live",
        artist: "Xutos & Pontapés",
        duration: "4:30",
        cover: "imagens/xutos.jpg",
        src: "O Homem Do Leme - Live.mp3"
    },
    {
        id: 15,
        title: "O Mundo Ao Contrário",
        artist: "Xutos & Pontapés",
        duration: "4:15",
        cover: "imagens/xutos.jpg",
        src: "O Mundo Ao Contrário.mp3"
    },
    {
        id: 16,
        title: "À Minha Maneira",
        artist: "Xutos & Pontapés",
        duration: "3:25",
        cover: "imagens/xutos.jpg",
        src: "À Minha Maneira.mp3"
    },
    {
        id: 17,
        title: "Circo De Feras",
        artist: "Xutos & Pontapés",
        duration: "4:20",
        cover: "imagens/xutos.jpg",
        src: "Circo De Feras.mp3"
    },
    {
        id: 18,
        title: "Não Sou O Único",
        artist: "Xutos & Pontapés",
        duration: "4:10",
        cover: "imagens/xutos.jpg",
        src: "Não Sou O Único.mp3"
    },
    {
        id: 19,
        title: "O Homem Do Leme",
        artist: "Xutos & Pontapés",
        duration: "4:12",
        cover: "imagens/xutos.jpg",
        src: "O Homem Do Leme.mp3"
    },
    {
        id: 20,
        title: "Para Ti Maria",
        artist: "Xutos & Pontapés",
        duration: "3:05",
        cover: "imagens/xutos.jpg",
        src: "Para Ti Maria.mp3"
    },
    {
        id: 21,
        title: "Contentores",
        artist: "Xutos & Pontapés",
        duration: "3:50",
        cover: "imagens/xutos.jpg",
        src: "Contentores.mp3"
    },
    {
        id: 22,
        title: "Ai Se Ele Cai",
        artist: "Xutos & Pontapés",
        duration: "3:08",
        cover: "imagens/xutos.jpg",
        src: "Ai Se Ele Cai.mp3"
    },
    {
        id: 23,
        title: "A Minha Casinha",
        artist: "Xutos & Pontapés",
        duration: "2:20",
        cover: "imagens/xutos.jpg",
        src: "A Minha Casinha.mp3"
    },

    // --- Nuno Ribeiro ---
    {
        id: 24,
        title: "Não Deixa",
        artist: "Nelson Freitas; Nuno Ribeiro",
        duration: "3:15",
        cover: "imagens/nuno-ribeiro.jpg",
        src: "Nelson Freitas, Nuno Ribeiro - Não Deixa.mp3"
    },
    {
        id: 25,
        title: "Imagina",
        artist: "Nuno Ribeiro",
        duration: "3:10",
        cover: "imagens/nuno-ribeiro.jpg",
        src: "Nuno Ribeiro - Imagina (SPOTISAVER).mp3"
    },
    {
        id: 26,
        title: "Dias Cinzentos",
        artist: "Nuno Ribeiro",
        duration: "3:22",
        cover: "imagens/nuno-ribeiro.jpg",
        src: "Dias Cinzentos_spotdown.org.mp3"
    },
    {
        id: 27,
        title: "Rosa (feat. CONAN OSIRIS)",
        artist: "Nuno Ribeiro, CONAN OSIRIS",
        duration: "3:05",
        cover: "imagens/nuno-ribeiro.jpg",
        src: "Rosa (feat. CONAN OSIRIS)_spotdown.org.mp3"
    },
    {
        id: 28,
        title: "Não Devia (feat. Loony Johnson)",
        artist: "Nuno Ribeiro, Loony Johnson",
        duration: "3:18",
        cover: "imagens/nuno-ribeiro.jpg",
        src: "Não Devia (feat. Loony Johnson)_spotdown.org.mp3"
    },
    {
        id: 29,
        title: "Fujo Contigo (feat. Soraia Ramos)",
        artist: "Nuno Ribeiro, Soraia Ramos",
        duration: "3:40",
        cover: "imagens/nuno-ribeiro.jpg",
        src: "Fujo Contigo (feat. Soraia Ramos)_spotdown.org.mp3"
    },
    {
        id: 30,
        title: "Saloia",
        artist: "Nuno Ribeiro",
        duration: "2:55",
        cover: "imagens/nuno-ribeiro.jpg",
        src: "Saloia_spotdown.org.mp3"
    },
    {
        id: 31,
        title: "Amor Limbo (feat. Bluay)",
        artist: "Nuno Ribeiro, Bluay",
        duration: "3:12",
        cover: "imagens/nuno-ribeiro.jpg",
        src: "Amor Limbo (feat. Bluay)_spotdown.org.mp3"
    },
    {
        id: 32,
        title: "Maria Joana",
        artist: "Nuno Ribeiro, Calema, Mariza",
        duration: "3:30",
        cover: "imagens/nuno-ribeiro.jpg",
        src: "Maria Joana_spotdown.org.mp3"
    },
    {
        id: 33,
        title: "Essa Mulher",
        artist: "Nuno Ribeiro",
        duration: "3:08",
        cover: "imagens/nuno-ribeiro.jpg",
        src: "Essa Mulher_spotdown.org.mp3"
    },

    // --- Fernando Daniel ---
    {
        id: 34,
        title: "Cair",
        artist: "Fernando Daniel",
        duration: "3:15",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel - Cair - Fernando Daniel (128k).mp3"
    },
    {
        id: 35,
        title: "Casa",
        artist: "Fernando Daniel",
        duration: "3:20",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel - casa - Fernando Daniel (128k).mp3"
    },
    {
        id: 36,
        title: "Espera",
        artist: "Fernando Daniel",
        duration: "3:48",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel - Espera - Fernando Daniel (128k).mp3"
    },
    {
        id: 37,
        title: "Mágoa",
        artist: "Fernando Daniel",
        duration: "3:10",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel - Mágoa - Fernando Daniel (128k).mp3"
    },
    {
        id: 38,
        title: "Melodia Da Saudade",
        artist: "Fernando Daniel",
        duration: "3:35",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel - Melodia Da Saudade - Fernando Daniel (128k).mp3"
    },
    {
        id: 39,
        title: "Nada A Perder (feat. Carlão)",
        artist: "Fernando Daniel, Carlão",
        duration: "3:12",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel - Nada A Perder ft. Carlão - Fernando Daniel (128k).mp3"
    },
    {
        id: 40,
        title: "Nada Mais",
        artist: "Fernando Daniel",
        duration: "3:25",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel - Nada Mais - Fernando Daniel (128k).mp3"
    },
    {
        id: 41,
        title: "Prometo",
        artist: "Fernando Daniel",
        duration: "3:05",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel - prometo - Fernando Daniel (128k).mp3"
    },
    {
        id: 42,
        title: "Raro",
        artist: "Fernando Daniel",
        duration: "3:18",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel - Raro - Fernando Daniel (128k).mp3"
    },
    {
        id: 43,
        title: "Recomeçar",
        artist: "Fernando Daniel",
        duration: "3:30",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel - Recomeçar - Fernando Daniel (128k).mp3"
    },
    {
        id: 44,
        title: "Se Eu (feat. Melim)",
        artist: "Fernando Daniel, Melim",
        duration: "3:40",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel - Se Eu ft. Melim - Fernando Daniel (128k).mp3"
    },
    {
        id: 45,
        title: "Tal Como Sou",
        artist: "Fernando Daniel",
        duration: "3:22",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel - Tal Como Sou - Fernando Daniel (128k).mp3"
    },
    {
        id: 46,
        title: "Voltas",
        artist: "Fernando Daniel",
        duration: "3:15",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel - Voltas - Fernando Daniel (128k).mp3"
    },
    {
        id: 47,
        title: "Fim +PRESENTE (II) (feat. Carolina Deslandes)",
        artist: "Fernando Daniel, Carolina Deslandes",
        duration: "3:28",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel feat. Carolina Deslandes - Fim +PRESENTE (II) - Fernando Daniel (128k).mp3"
    },
    {
        id: 48,
        title: "Sem Ti",
        artist: "Fernando Daniel, Agir",
        duration: "3:42",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel, Agir - Sem Ti - Fernando Daniel (128k).mp3"
    },
    {
        id: 49,
        title: "Metade",
        artist: "Fernando Daniel, Beatriz Rosário",
        duration: "3:05",
        cover: "imagens/fernando-daniel.jpg",
        src: "Fernando Daniel, Beatriz Rosário - metade - Fernando Daniel (128k).mp3"
    },
    {
        id: 50,
        title: "Até Voltares",
        artist: "Jimmy P, Fernando Daniel",
        duration: "3:33",
        cover: "imagens/fernando-daniel.jpg",
        src: "Jimmy P Feat. Fernando Daniel - Até Voltares (Prod. SuaveYouKnow & Mantra) - Jimmy P (128k).mp3"
    },
    {
        id: 51,
        title: "Voltamos Juntos",
        artist: "Fernando Daniel",
        duration: "2:50",
        cover: "imagens/fernando-daniel.jpg",
        src: "Voltamos Juntos - Videoclip Oficial - Staples Portugal (128k).mp3"
    }
];

// Estado da Aplicação
let songIndex = 0;
let isPlaying = false;
let currentList = [...songs];

// Elementos do DOM
const cardsContainer = document.getElementById('cards-container');
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
const sectionTitle = document.getElementById('section-title');
const artistPlaylistsList = document.getElementById('artist-playlists');

// Carregar Playlists dos Artistas Portugueses na Sidebar
function renderArtistPlaylists() {
    artistPlaylistsList.innerHTML = '';
    portugueseArtists.forEach(artist => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid fa-music"></i> This Is ${artist}`;
        
        // Filtra a lista ao clicar na playlist do artista
        li.addEventListener('click', () => {
            sectionTitle.innerText = `Playlist: ${artist}`;
            btnInicio.classList.remove('active');
            
            // Normaliza acentos para busca flexível
            const cleanArtist = artist.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            
            const filtered = songs.filter(s => {
                const songArtistClean = s.artist.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                return songArtistClean.includes(cleanArtist) || cleanArtist.includes(songArtistClean);
            });
            
            loadCards(filtered);
        });

        artistPlaylistsList.appendChild(li);
    });
}

// Renderizar Músicas
function loadCards(songsToRender = songs) {
    cardsContainer.innerHTML = '';
    currentList = songsToRender;

    if (songsToRender.length === 0) {
        cardsContainer.innerHTML = `<p class="no-results">Nenhuma música encontrada para esta seleção.</p>`;
        return;
    }

    songsToRender.forEach((song, index) => {
        const originalIndex = songs.findIndex(s => s.id === song.id);

        const row = document.createElement('div');
        row.classList.add('song-row');
        
        if (originalIndex === songIndex && isPlaying) {
            row.classList.add('playing');
        }

        row.innerHTML = `
            <div class="song-number">${index + 1}</div>
            <img class="song-row-img" src="${song.cover}" alt="${song.title}" onerror="this.src='https://picsum.photos/200?random=${originalIndex}'">
            <div class="song-details">
                <h4>${song.title}</h4>
                <div class="artist-info">
                    <i class="fa-solid fa-circle-down download-icon"></i>
                    <span>${song.artist}</span>
                </div>
            </div>
            <div class="song-duration">${song.duration}</div>
        `;

        row.addEventListener('click', () => {
            songIndex = originalIndex;
            loadSong(songs[songIndex]);
            playSong();
        });

        cardsContainer.appendChild(row);
    });
}

// Voltar para o Início (Todas as músicas)
btnInicio.addEventListener('click', (e) => {
    e.preventDefault();
    sectionTitle.innerText = "Minhas Músicas";
    btnInicio.classList.add('active');
    searchInput.value = '';
    loadCards(songs);
});

// Pesquisa
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    const filteredSongs = songs.filter(song => 
        song.title.toLowerCase().includes(searchTerm) || 
        song.artist.toLowerCase().includes(searchTerm)
    );

    loadCards(filteredSongs);
});

// Carregar Música no Leitor
function loadSong(song) {
    songTitle.innerText = song.title;
    songArtist.innerText = song.artist;
    coverImg.src = song.cover;
    audio.src = song.src;
    loadCards(currentList);
}

// Reproduzir
function playSong() {
    isPlaying = true;
    audio.play().then(() => {
        playBtn.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
    }).catch(error => {
        console.error("Erro ao tocar:", error);
        alert(`O ficheiro "${songs[songIndex].src}" não foi encontrado na pasta principal.`);
        isPlaying = false;
        playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
    });
}

// Pausar
function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
}

// Alternar Play/Pause
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        if (!audio.src || audio.src === "") loadSong(songs[songIndex]);
        playSong();
    }
});

// Anterior / Próxima
prevBtn.addEventListener('click', () => {
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - 1;
    loadSong(songs[songIndex]);
    playSong();
});

nextBtn.addEventListener('click', () => {
    songIndex++;
    if (songIndex >= songs.length) songIndex = 0;
    loadSong(songs[songIndex]);
    playSong();
});

// Atualizar Barra de Progresso e Tempos
audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;

        const currentMinutes = Math.floor(currentTime / 60);
        const currentSeconds = Math.floor(currentTime % 60);
        currentTimeEl.innerText = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

        const totalMinutes = Math.floor(duration / 60);
        const totalSeconds = Math.floor(duration % 60);
        totalDurationEl.innerText = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
    }
});

// Mudar tempo da música ao clicar na barra
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    
    if (duration) {
        audio.currentTime = (clickX / width) * duration;
    }
});

// Controlo de Volume
volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

// Passar automaticamente para a próxima música quando esta terminar
audio.addEventListener('ended', () => {
    nextBtn.click();
});

// Inicialização da Aplicação
renderArtistPlaylists();
loadSong(songs[songIndex]);