// Lista de Músicas Locais
const songs = [
    { id: 1, title: "Where Have You Been", artist: "Rihanna", duration: "4:02", cover: "imagens/rihanna.jpg", src: "where-have-you-been.mp3" },
    { id: 2, title: "Pump It - Radio Edit", artist: "Javi Reina", duration: "3:45", cover: "imagens/pump-it.jpg", src: "pump-it.mp3" },
    { id: 3, title: "Amanhã De Manhã - Remix", artist: "Doce, André Henriques", duration: "3:24", cover: "imagens/amanha-de-manha.jpg", src: "amanha-de-manha.mp3" },
    { id: 4, title: "Dama Bandida", artist: "Fábio Lagarto", duration: "3:10", cover: "imagens/dama-bandida.jpg", src: "dama-bandida.mp3" },
    
    // Lista 1
    { id: 5, title: "Problema", artist: "Matias Damásio", duration: "3:30", cover: "imagens/problema.jpg", src: "problema.mp3" },
    { id: 6, title: "Rock This Party", artist: "Bob Sinclar", duration: "3:18", cover: "imagens/rock-this-party.jpg", src: "Rock This Party.mp3" },
    { id: 7, title: "Rosa (feat. Conan Osiris)", artist: "Eu.Clides", duration: "3:40", cover: "imagens/rosa.jpg", src: "Rosa (feat. CONAN OSIRIS)_spotdown.org.mp3" },
    { id: 8, title: "Saloia", artist: "Gino", duration: "3:15", cover: "imagens/saloia.jpg", src: "Saloia_spotdown.org.mp3" },
    { id: 9, title: "Scatman", artist: "Scatman John", duration: "3:30", cover: "imagens/scatman.jpg", src: "Scatman.mp3" },
    { id: 10, title: "Imagina", artist: "Nuno Ribeiro", duration: "3:20", cover: "imagens/imagina.jpg", src: "Nuno Ribeiro - Imagina (SPOTISAVER).mp3" },
    { id: 11, title: "O Homem Do Leme", artist: "Xutos & Pontapés", duration: "4:00", cover: "imagens/homem-do-leme.jpg", src: "O Homem Do Leme.mp3" },
    { id: 12, title: "O Homem Do Leme - Live", artist: "Xutos & Pontapés", duration: "4:15", cover: "imagens/homem-do-leme-live.jpg", src: "O Homem Do Leme - Live.mp3" },
    { id: 13, title: "O Mundo Ao Contrário", artist: "Xutos & Pontapés", duration: "4:10", cover: "imagens/mundo-ao-contrario.jpg", src: "O Mundo Ao Contrário.mp3" },
    { id: 14, title: "O Bicho", artist: "Iran Costa", duration: "3:50", cover: "imagens/o-bicho.jpg", src: "o-bicho.mp3" },
    { id: 15, title: "Para Ti Maria", artist: "Xutos & Pontapés", duration: "3:40", cover: "imagens/para-ti-maria.jpg", src: "Para Ti Maria.mp3" },
    { id: 16, title: "Fujo Contigo (feat. Soraia Ramos)", artist: "Calema", duration: "3:25", cover: "imagens/fujo-contigo.jpg", src: "Fujo Contigo (feat. Soraia Ramos)_spotdown.org.mp3" },
    { id: 17, title: "Até Voltares", artist: "Jimmy P Feat. Fernando Daniel", duration: "3:35", cover: "imagens/ate-voltares.jpg", src: "Jimmy P Feat. Fernando Daniel - Até Voltares (Prod. SuaveYouKnow & Mantra) - Jimmy P (128k).mp3" },
    { id: 18, title: "La Plena", artist: "Wisin & Yandel", duration: "3:10", cover: "imagens/la-plena.jpg", src: "La Plena.mp3" },
    { id: 19, title: "Maria Joana", artist: "Nuno Ribeiro, Calema, Mariza", duration: "3:30", cover: "imagens/maria-joana.jpg", src: "Maria Joana_spotdown.org.mp3" },
    { id: 20, title: "Não Devia (feat. Loony Johnson)", artist: "Matias Damásio", duration: "3:45", cover: "imagens/nao-devia.jpg", src: "Não Devia (feat. Loony Johnson)_spotdown.org.mp3" },
    { id: 21, title: "Não Sou O Único", artist: "Xutos & Pontapés", duration: "3:55", cover: "imagens/nao-sou-o-unico.jpg", src: "Não Sou O Único.mp3" },
    { id: 22, title: "Não Deixa", artist: "Nelson Freitas, Nuno Ribeiro", duration: "3:20", cover: "imagens/nao-deixa.jpg", src: "Nelson Freitas, Nuno Ribeiro - Não Deixa.mp3" },
    { id: 23, title: "Recomeçar", artist: "Fernando Daniel", duration: "3:30", cover: "imagens/recomecar.jpg", src: "Fernando Daniel - Recomeçar - Fernando Daniel (128k).mp3" },
    { id: 24, title: "Se Eu ft. Melim", artist: "Fernando Daniel", duration: "3:40", cover: "imagens/se-eu.jpg", src: "Fernando Daniel - Se Eu ft. Melim - Fernando Daniel (128k).mp3" },
    { id: 25, title: "Tal Como Sou", artist: "Fernando Daniel", duration: "3:15", cover: "imagens/tal-como-sou.jpg", src: "Fernando Daniel - Tal Como Sou - Fernando Daniel (128k).mp3" },
    { id: 26, title: "Voltas", artist: "Fernando Daniel", duration: "3:20", cover: "imagens/voltas.jpg", src: "Fernando Daniel - Voltas - Fernando Daniel (128k).mp3" },

    // Lista 2
    { id: 27, title: "Fim Presente", artist: "Fernando Daniel feat. Carolina Deslandes", duration: "3:35", cover: "imagens/fim-presente.jpg", src: "Fernando Daniel feat. Carolina Deslandes - Fim Presente.mp3" },
    { id: 28, title: "Sem Ti", artist: "Fernando Daniel, Agir", duration: "3:25", cover: "imagens/sem-ti.jpg", src: "Fernando Daniel, Agir - Sem Ti - Fernando Daniel (128k).mp3" },
    { id: 29, title: "Metade", artist: "Fernando Daniel, Beatriz Rosário", duration: "3:10", cover: "imagens/metade.jpg", src: "Fernando Daniel, Beatriz Rosário - metade - Fernando Daniel (128k).mp3" },
    { id: 30, title: "Mágoa", artist: "Fernando Daniel", duration: "3:20", cover: "imagens/magoa.jpg", src: "Fernando Daniel - Mágoa - Fernando Daniel (128k).mp3" },
    { id: 31, title: "Melodia Da Saudade", artist: "Fernando Daniel", duration: "3:40", cover: "imagens/melodia-da-saudade.jpg", src: "Fernando Daniel - Melodia Da Saudade - Fernando Daniel (128k).mp3" },
    { id: 32, title: "Nada A Perder ft. Carlão", artist: "Fernando Daniel", duration: "3:15", cover: "imagens/nada-a-perder.jpg", src: "Fernando Daniel - Nada A Perder ft. Carlão - Fernando Daniel (128k).mp3" },
    { id: 33, title: "Nada Mais", artist: "Fernando Daniel", duration: "3:30", cover: "imagens/nada-mais.jpg", src: "Fernando Daniel - Nada Mais - Fernando Daniel (128k).mp3" },
    { id: 34, title: "Prometo", artist: "Fernando Daniel", duration: "3:25", cover: "imagens/prometo.jpg", src: "Fernando Daniel - prometo - Fernando Daniel (128k).mp3" },
    { id: 35, title: "Raro", artist: "Fernando Daniel", duration: "3:10", cover: "imagens/raro.jpg", src: "Fernando Daniel - Raro - Fernando Daniel (128k).mp3" },
    { id: 36, title: "Dias Cinzentos", artist: "Slow J", duration: "3:50", cover: "imagens/dias-cinzentos.jpg", src: "Dias Cinzentos_spotdown.org.mp3" },
    { id: 37, title: "Essa Mulher", artist: "Matias Damásio", duration: "3:40", cover: "imagens/essa-mulher.jpg", src: "Essa Mulher_spotdown.org.mp3" },
    { id: 38, title: "Cair", artist: "Fernando Daniel", duration: "3:15", cover: "imagens/cair.jpg", src: "Fernando Daniel - Cair - Fernando Daniel (128k).mp3" },
    { id: 39, title: "Casa", artist: "Fernando Daniel", duration: "3:30", cover: "imagens/casa.jpg", src: "Fernando Daniel - casa - Fernando Daniel (128k).mp3" },
    { id: 40, title: "Espera", artist: "Fernando Daniel", duration: "3:50", cover: "imagens/espera.jpg", src: "Fernando Daniel - Espera - Fernando Daniel (128k).mp3" },
    { id: 41, title: "Báilame - Remix", artist: "Nacho", duration: "3:35", cover: "imagens/bailame.jpg", src: "Báilame - Remix.mp3" },
    { id: 42, title: "Circo De Feras", artist: "Xutos & Pontapés", duration: "3:10", cover: "imagens/circo-de-feras.jpg", src: "Circo De Feras.mp3" },
    { id: 43, title: "Contentores", artist: "Xutos & Pontapés", duration: "3:25", cover: "imagens/contentores.jpg", src: "Contentores.mp3" },
    { id: 44, title: "Amor Limbo (feat. Bluay)", artist: "Nuno Ribeiro", duration: "3:15", cover: "imagens/amor-limbo.jpg", src: "Amor Limbo (feat. Bluay)_spotdown.org.mp3" },
    { id: 45, title: "Baianá - Original mix", artist: "Bakermat", duration: "3:00", cover: "imagens/baiana.jpg", src: "Baianá - Original mix.mp3" },
    { id: 46, title: "À Minha Maneira", artist: "Xutos & Pontapés", duration: "3:40", cover: "imagens/a-minha-maneira.jpg", src: "À Minha Maneira.mp3" },
    { id: 47, title: "Ai Se Ele Cai", artist: "Xutos & Pontapés", duration: "3:05", cover: "imagens/ai-se-ele-cai.jpg", src: "Ai Se Ele Cai.mp3" },
    { id: 48, title: "A Minha Casinha", artist: "Xutos & Pontapés", duration: "3:30", cover: "imagens/a-minha-casinha.jpg", src: "A Minha Casinha.mp3" },

    // Lista 3
    { id: 49, title: "Baianá - Original Mix", artist: "Bakermat", duration: "3:00", cover: "imagens/baiana.jpg", src: "Baianá - Original mix_spotdown.org.mp3" },
    { id: 50, title: "Báilame - Remix", artist: "Nacho", duration: "3:35", cover: "imagens/bailame.jpg", src: "Báilame - Remix_spotdown.org.mp3" },
    { id: 51, title: "La Plena", artist: "Wisin & Yandel", duration: "3:10", cover: "imagens/la-plena.jpg", src: "La Plena_spotdown.org.mp3" },
    { id: 52, title: "O Bicho - 2015 Remix", artist: "Iran Costa", duration: "3:45", cover: "imagens/o-bicho.jpg", src: "O Bicho - 2015 Remix_spotdown.org.mp3" },
    { id: 53, title: "Problema (Feat. Laton)", artist: "Matias Damásio", duration: "3:35", cover: "imagens/problema.jpg", src: "Problema (Feat. Laton)_spotdown.org.mp3" },
    { id: 54, title: "Rock This Party - Remix", artist: "Bob Sinclar", duration: "3:20", cover: "imagens/rock-this-party.jpg", src: "Rock This Party - Remix_spotdown.org.mp3" },
    { id: 55, title: "Scatman (Aumenta O Som) [feat. Alok]", artist: "Scatman John, Alok", duration: "2:40", cover: "imagens/scatman.jpg", src: "Scatman (Aumenta O Som) [feat. Alok]_spotdown.org.mp3" },
    { id: 56, title: "Viagem - Johnny 500 Remix", artist: "Johnny 500", duration: "3:15", cover: "imagens/viagem.jpg", src: "Viagem - Johnny 500 Remix_spotdown.org.mp3" },
    { id: 57, title: "Zookey - Radio Edit", artist: "Yves Larock", duration: "3:10", cover: "imagens/zookey.jpg", src: "Zookey - Radio Edit_spotdown.org.mp3" },
    { id: 58, title: "Pump It - Radio Edit", artist: "Javi Reina", duration: "3:45", cover: "imagens/pump-it.jpg", src: "Pump It - Radio Edit_spotdown.org.mp3" }
];

// ARTISTAS PORTUGUESES
const artists = [
    { id: 101, name: "Doce", photo: "doce.jpg", songIds: [3] },
    { id: 102, name: "Fábio Lagarto", photo: "fabio_lagarto.jpg", songIds: [4] },
    { id: 103, name: "Calema", photo: "calema.jpg", songIds: [] },
    { id: 104, name: "Nuno Ribeiro", photo: "nuno_ribeiro.jpg", songIds: [10, 19, 22, 44] },
    { id: 105, name: "Matias Damásio", photo: "matias_damasio.jpg", songIds: [] },
    { id: 106, name: "Xutos & Pontapés", photo: "xutos.jpg", songIds: [11, 12, 13, 15, 21, 42, 43, 46, 47, 48] },
    { id: 110, name: "GNR", photo: "GNR.jpg", songIds: [] },
    { id: 117, name: "Diogo Piçarra", photo: "diogo_piçarra.jpg", songIds: [] },
    { id: 118, name: "Fernando Daniel", photo: "fernando_daniel.jpg", songIds: [17, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 38, 39, 40] },
    { id: 119, name: "Carolina Deslandes", photo: "carolina_deslandes.jpg", songIds: [27] },
    { id: 120, name: "Bárbara Bandeira", photo: "barbara_bandeira.jpg", songIds: [] },
    { id: 121, name: "Slow J", photo: "slow j.jpg", songIds: [36] },
    { id: 122, name: "Jimmy P", photo: "jimmy_p.jpg", songIds: [17] },
    { id: 123, name: "Conan Osiris", photo: "conan_osiris.jpg", songIds: [7] },
    { id: 124, name: "Soraia Ramos", photo: "soraia_ramos.jpg", songIds: [16] },
    { id: 125, name: "Agir", photo: "agir.jpg", songIds: [28] }
];

// PLAYLISTS
const playlists = [
    { id: 1, name: "Portugal", type: "artists" }
];

// Estado da Aplicação
let songIndex = 0;
let isPlaying = false;
let currentList = [...songs];
let activePlaylistId = null;

// Histórico de Navegação
let navigationHistory = [];
let historyIndex = -1;
let isNavigatingHistory = false;

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
const btnBuscar = document.getElementById('btn-buscar');
const btnNavBack = document.getElementById('btn-nav-back');
const btnNavForward = document.getElementById('btn-nav-forward');
const sectionTitle = document.getElementById('section-title');
const playlistList = document.getElementById('playlist-list');

// Função de Saudação do Spotify
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 20) return "Boa tarde";
    return "Boa noite";
}

// Histórico de Navegação (Setas)
function pushStateToHistory(state) {
    if (isNavigatingHistory) return;
    if (historyIndex < navigationHistory.length - 1) {
        navigationHistory = navigationHistory.slice(0, historyIndex + 1);
    }
    navigationHistory.push(state);
    historyIndex++;
}

function restoreState(state) {
    isNavigatingHistory = true;
    activePlaylistId = state.activePlaylistId;
    sectionTitle.innerText = state.title;
    searchInput.value = state.searchTerm || '';

    if (state.viewType === 'home') {
        btnInicio.classList.add('active');
        btnBuscar.classList.remove('active');
        renderHomeView();
    } else if (state.viewType === 'playlist') {
        btnInicio.classList.remove('active');
        btnBuscar.classList.remove('active');
        renderArtistsGrid(artists);
    } else if (state.viewType === 'artist') {
        btnInicio.classList.remove('active');
        btnBuscar.classList.remove('active');
        const artistSongs = songs.filter(s => state.artistSongIds.includes(s.id));
        loadCards(artistSongs);
    }
    
    renderPlaylists();
    isNavigatingHistory = false;
}

btnNavBack.addEventListener('click', () => {
    if (historyIndex > 0) {
        historyIndex--;
        restoreState(navigationHistory[historyIndex]);
    }
});

btnNavForward.addEventListener('click', () => {
    if (historyIndex < navigationHistory.length - 1) {
        historyIndex++;
        restoreState(navigationHistory[historyIndex]);
    }
});

// VISTA DE INÍCIO ESTILO SPOTIFY
function renderHomeView() {
    cardsContainer.className = 'spotify-home';
    sectionTitle.innerText = getGreeting();

    cardsContainer.innerHTML = `
        <!-- Quick Access Grid -->
        <div class="quick-access-grid">
            <div class="quick-card" id="quick-playlist-pt">
                <div class="quick-card-img"><i class="fa-solid fa-music"></i></div>
                <span>Portugal (Artistas)</span>
            </div>
            <div class="quick-card" id="quick-artist-xutos">
                <img src="xutos.jpg" onerror="this.src='https://picsum.photos/100?random=1'">
                <span>Xutos & Pontapés</span>
            </div>
            <div class="quick-card" id="quick-artist-fd">
                <img src="fernando_daniel.jpg" onerror="this.src='https://picsum.photos/100?random=2'">
                <span>Fernando Daniel</span>
            </div>
            <div class="quick-card" id="quick-artist-nr">
                <img src="nuno_ribeiro.jpg" onerror="this.src='https://picsum.photos/100?random=3'">
                <span>Nuno Ribeiro</span>
            </div>
        </div>

        <!-- Secção 1: Músicas em Destaque -->
        <div class="home-section">
            <div class="section-header">
                <h2>Músicas Recomendadas</h2>
            </div>
            <div class="media-grid" id="featured-songs-grid"></div>
        </div>

        <!-- Secção 2: Artistas Populares -->
        <div class="home-section">
            <div class="section-header">
                <h2>Artistas Populares</h2>
            </div>
            <div class="media-grid" id="featured-artists-grid"></div>
        </div>
    `;

    // Eventos nos Quick Cards
    document.getElementById('quick-playlist-pt').addEventListener('click', () => openPlaylist(playlists[0]));
    document.getElementById('quick-artist-xutos').addEventListener('click', () => openArtistView(artists.find(a => a.id === 106)));
    document.getElementById('quick-artist-fd').addEventListener('click', () => openArtistView(artists.find(a => a.id === 118)));
    document.getElementById('quick-artist-nr').addEventListener('click', () => openArtistView(artists.find(a => a.id === 104)));

    // Preencher Músicas Recomendadas
    const songsGrid = document.getElementById('featured-songs-grid');
    const sampleSongs = songs.slice(0, 6);
    sampleSongs.forEach((song) => {
        const originalIndex = songs.findIndex(s => s.id === song.id);
        const card = document.createElement('div');
        card.className = 'spotify-card';
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${song.cover}" alt="${song.title}" onerror="this.src='https://picsum.photos/200?random=${song.id}'">
                <button class="card-play-btn"><i class="fa-solid fa-play"></i></button>
            </div>
            <div class="card-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
        `;
        card.addEventListener('click', () => {
            songIndex = originalIndex;
            loadSong(songs[songIndex]);
            playSong();
        });
        songsGrid.appendChild(card);
    });

    // Preencher Artistas Populares
    const artistsGrid = document.getElementById('featured-artists-grid');
    const sampleArtists = artists.slice(0, 6);
    sampleArtists.forEach((artist) => {
        const card = document.createElement('div');
        card.className = 'spotify-card artist-style';
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${artist.photo}" alt="${artist.name}" onerror="this.src='https://picsum.photos/200?random=${artist.id}'">
                <button class="card-play-btn"><i class="fa-solid fa-play"></i></button>
            </div>
            <div class="card-info">
                <h4>${artist.name}</h4>
                <p>Artista</p>
            </div>
        `;
        card.addEventListener('click', () => openArtistView(artist));
        artistsGrid.appendChild(card);
    });
}

// Abrir vista de artista
function openArtistView(artist) {
    if (!artist) return;
    sectionTitle.innerText = artist.name;
    const artistSongs = songs.filter(s => artist.songIds.includes(s.id));
    pushStateToHistory({
        viewType: 'artist',
        title: artist.name,
        activePlaylistId: activePlaylistId,
        artistSongIds: artist.songIds
    });
    loadCards(artistSongs);
}

// Renderizar Músicas em Tabela/Lista (Usado em procuras ou ao clicar num artista)
function loadCards(songsToRender = songs) {
    cardsContainer.className = 'song-list';
    cardsContainer.innerHTML = '';
    currentList = songsToRender;

    if (songsToRender.length === 0) {
        cardsContainer.innerHTML = `<p class="no-results">Nenhuma música associada a este perfil.</p>`;
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

// Renderizar Grelha de Artistas (Na Playlist Portugal)
function renderArtistsGrid(artistsToRender = artists) {
    cardsContainer.className = 'artists-grid';
    cardsContainer.innerHTML = '';

    artistsToRender.forEach(artist => {
        const card = document.createElement('div');
        card.classList.add('artist-card');

        card.innerHTML = `
            <div class="artist-card-img-wrapper">
                <img src="${artist.photo}" alt="${artist.name}" onerror="this.src='https://picsum.photos/200?random=${artist.id}'">
                <div class="play-btn-hover">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
            <div class="artist-card-info">
                <h4>${artist.name}</h4>
                <p>Artista</p>
            </div>
        `;

        card.addEventListener('click', () => openArtistView(artist));

        cardsContainer.appendChild(card);
    });
}

// Sidebar e Playlists
function renderPlaylists() {
    playlistList.innerHTML = '';
    
    playlists.forEach(playlist => {
        const li = document.createElement('li');
        li.innerText = playlist.name;
        if (activePlaylistId === playlist.id) {
            li.classList.add('active-playlist');
        }

        li.addEventListener('click', () => {
            openPlaylist(playlist);
        });

        playlistList.appendChild(li);
    });
}

function openPlaylist(playlist) {
    activePlaylistId = playlist.id;
    sectionTitle.innerText = playlist.name;
    btnInicio.classList.remove('active');
    btnBuscar.classList.remove('active');
    searchInput.value = '';

    pushStateToHistory({
        viewType: 'playlist',
        title: playlist.name,
        activePlaylistId: playlist.id
    });

    if (playlist.type === 'artists') {
        renderArtistsGrid(artists);
    }
    renderPlaylists();
}

// Botões de Topo
btnInicio.addEventListener('click', (e) => {
    e.preventDefault();
    activePlaylistId = null;
    btnInicio.classList.add('active');
    btnBuscar.classList.remove('active');
    searchInput.value = '';

    pushStateToHistory({
        viewType: 'home',
        title: getGreeting(),
        activePlaylistId: null
    });

    renderHomeView();
    renderPlaylists();
});

btnBuscar.addEventListener('click', (e) => {
    e.preventDefault();
    btnInicio.classList.remove('active');
    btnBuscar.classList.add('active');
    searchInput.focus();
});

// Pesquisa
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    if (!searchTerm) {
        if (btnInicio.classList.contains('active')) {
            renderHomeView();
        }
        return;
    }

    if (activePlaylistId === 1 && cardsContainer.classList.contains('artists-grid')) {
        const filteredArtists = artists.filter(a => a.name.toLowerCase().includes(searchTerm));
        renderArtistsGrid(filteredArtists);
    } else {
        const filteredSongs = songs.filter(song => 
            song.title.toLowerCase().includes(searchTerm) || 
            song.artist.toLowerCase().includes(searchTerm)
        );
        loadCards(filteredSongs);
    }
});

// Player Audio
function loadSong(song) {
    songTitle.innerText = song.title;
    songArtist.innerText = song.artist;
    coverImg.src = song.cover;
    audio.src = song.src;
    if (cardsContainer.classList.contains('song-list')) {
        loadCards(currentList);
    }
}

function playSong() {
    isPlaying = true;
    audio.play().then(() => {
        playBtn.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
    }).catch(error => {
        console.error("Erro ao tocar:", error);
        alert(`O ficheiro "${songs[songIndex].src}" não foi encontrado na pasta.`);
        isPlaying = false;
        playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
    });
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
        if (!audio.src || audio.src === "") loadSong(songs[songIndex]);
        playSong();
    }
});

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

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    if (duration) audio.currentTime = (clickX / width) * duration;
});

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

audio.addEventListener('ended', () => {
    nextBtn.click();
});

// Inicialização Direta no Início Estilo Spotify
renderPlaylists();
loadSong(songs[songIndex]);

btnInicio.classList.add('active');
btnBuscar.classList.remove('active');
renderHomeView();

pushStateToHistory({
    viewType: 'home',
    title: getGreeting(),
    activePlaylistId: null
});