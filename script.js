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
    { id: 58, title: "Pump It - Radio Edit", artist: "Javi Reina", duration: "3:45", cover: "imagens/pump-it.jpg", src: "Pump It - Radio Edit_spotdown.org.mp3" },

    // Músicas - Doce
    { id: 59, title: "Ali-Babá", artist: "Doce", duration: "3:10", cover: "imagens/doce.jpg", src: "Ali-Babá_spotdown.org.mp3" },
    { id: 60, title: "Amanhã De Manhã", artist: "Doce", duration: "3:25", cover: "imagens/doce.jpg", src: "Amanhã De Manhã_spotdown.org.mp3" },
    { id: 61, title: "OK KO", artist: "Doce", duration: "3:15", cover: "imagens/doce.jpg", src: "Ok, Ko_spotdown.org.mp3" },
    { id: 62, title: "Bem Bom", artist: "Doce", duration: "3:00", cover: "imagens/doce.jpg", src: "Bem Bom_spotdown.org.mp3" },
    { id: 63, title: "Café Com Sal", artist: "Doce", duration: "3:20", cover: "imagens/doce.jpg", src: "Café Com Sal_spotdown.org.mp3" },

    // MÚSICAS - CALEMA (MEO Arena Ao Vivo)
    { id: 201, title: "Intro (Live in MEO Arena)", artist: "Calema", duration: "2:00", cover: "calema.jpg", src: "Intro (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 202, title: "Onde Anda (Live in MEO Arena)", artist: "Calema", duration: "3:30", cover: "calema.jpg", src: "Onde Anda (Live in MEO Arena).mp3" },
    { id: 203, title: "Amar 24/24 (Live in MEO Arena)", artist: "Calema", duration: "3:20", cover: "calema.jpg", src: "Amar 2424 (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 204, title: "Interlude Due (Live in MEO Arena)", artist: "Calema", duration: "1:30", cover: "calema.jpg", src: "Interlude Due (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 205, title: "Maria Joana (Live in MEO Arena)", artist: "Calema", duration: "3:40", cover: "calema.jpg", src: "Maria Joana (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 206, title: "Mama Ê (Live in MEO Arena)", artist: "Calema", duration: "3:25", cover: "calema.jpg", src: "Mama Ê (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 207, title: "Bulawê (Live in MEO Arena)", artist: "Calema", duration: "3:15", cover: "calema.jpg", src: "Bulawê (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 208, title: "Homenagem General João Seria (Live in MEO Arena)", artist: "Calema", duration: "3:50", cover: "calema.jpg", src: "Homenagem General João Seria (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 209, title: "Viagem (Live in MEO Arena)", artist: "Calema", duration: "3:30", cover: "calema.jpg", src: "Viagem (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 210, title: "A Nossa Dança (Live in MEO Arena)", artist: "Calema", duration: "3:20", cover: "calema.jpg", src: "A Nossa Dança (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 211, title: "Allez Kua Buaru (Live in MEO Arena)", artist: "Calema", duration: "3:10", cover: "calema.jpg", src: "Allez Kua Buaru (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 212, title: "Até De Manhã (Live in MEO Arena)", artist: "Calema", duration: "3:35", cover: "calema.jpg", src: "Até De Manhã (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 213, title: "Frágil (Live in MEO Arena)", artist: "Calema", duration: "3:15", cover: "calema.jpg", src: "Frágil (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 214, title: "Abraços (Live in MEO Arena)", artist: "Calema", duration: "3:25", cover: "calema.jpg", src: "Abraços (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 215, title: "Kelê Mbê (Live in MEO Arena)", artist: "Calema", duration: "3:30", cover: "calema.jpg", src: "Kelê Mbê (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 216, title: "Korokosso (Live in MEO Arena)", artist: "Calema", duration: "3:20", cover: "calema.jpg", src: "Korokosso (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 217, title: "Vai (Parte 2) (Live in MEO Arena)", artist: "Calema", duration: "3:40", cover: "calema.jpg", src: "Vai (Parte 2) (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 218, title: "Bomu Kelê (Live in MEO Arena)", artist: "Calema", duration: "3:15", cover: "calema.jpg", src: "Bomu Kelê (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 219, title: "Casa De Madeira (Live in MEO Arena)", artist: "Calema", duration: "3:30", cover: "calema.jpg", src: "Casa De Madeira (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 220, title: "Interlude Une (Live in MEO Arena)", artist: "Calema", duration: "1:25", cover: "calema.jpg", src: "Interlude Une (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 221, title: "O Nosso Amor (Live in MEO Arena)", artist: "Calema", duration: "3:35", cover: "calema.jpg", src: "O Nosso Amor (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 222, title: "A Nossa Vez (Live in MEO Arena)", artist: "Calema", duration: "3:45", cover: "calema.jpg", src: "A Nossa Vez (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 223, title: "Dá-Me Dá-Me (Live in MEO Arena)", artist: "Calema", duration: "3:20", cover: "calema.jpg", src: "Dá-Me Dá-Me (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 224, title: "Perfume (Live in MEO Arena)", artist: "Calema", duration: "3:30", cover: "calema.jpg", src: "Perfume (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 225, title: "Preparado (Live in MEO Arena)", artist: "Calema", duration: "3:15", cover: "calema.jpg", src: "Preparado (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 226, title: "Toca A Todos (Live in MEO Arena)", artist: "Calema", duration: "3:25", cover: "calema.jpg", src: "Toca A Todos (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 227, title: "Tudo Por Amor (Live in MEO Arena)", artist: "Calema", duration: "3:35", cover: "calema.jpg", src: "Tudo Por Amor (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 228, title: "Vai (Live in MEO Arena)", artist: "Calema", duration: "3:40", cover: "calema.jpg", src: "Vai (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 229, title: "Te Amo (Live in MEO Arena)", artist: "Calema", duration: "4:00", cover: "calema.jpg", src: "Te Amo (Live in MEO Arena) - Calema (128k).mp3" }
];

// ARTISTAS PORTUGUESES
const artists = [
    { id: 101, name: "Doce", photo: "doce.jpg", songIds: [3, 59, 60, 61, 62, 63] },
    { id: 102, name: "Fábio Lagarto", photo: "fabio_lagarto.jpg", songIds: [4] },
    { 
        id: 103, 
        name: "Calema", 
        photo: "calema.jpg", 
        songIds: [16, 19],
        albums: [
            {
                id: "calema-meo-arena",
                title: "MEO Arena (Ao Vivo)",
                cover: "calema.jpg",
                year: "2024",
                songIds: [
                    201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 
                    211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 
                    221, 222, 223, 224, 225, 226, 227, 228, 229
                ]
            }
        ]
    },
    { id: 104, name: "Nuno Ribeiro", photo: "nuno_ribeiro.jpg", songIds: [10, 19, 22, 44] },
    { id: 105, name: "Matias Damásio", photo: "matias_damasio.jpg", songIds: [5, 20, 37, 53] },
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

// Função de Saudação
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 20) return "Boa tarde";
    return "Boa noite";
}

// Histórico de Navegação
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
        const artist = artists.find(a => a.id === state.artistId);
        if (artist) openArtistView(artist, false);
    } else if (state.viewType === 'album') {
        btnInicio.classList.remove('active');
        btnBuscar.classList.remove('active');
        const albumSongs = songs.filter(s => state.songIds.includes(s.id));
        loadCards(albumSongs);
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

// VISTA DE INÍCIO ESTILO SPOFIFAY
function renderHomeView() {
    cardsContainer.className = 'spotify-home';
    sectionTitle.innerText = getGreeting();

    cardsContainer.innerHTML = `
        <div class="quick-access-grid">
            <div class="quick-card" id="quick-playlist-pt">
                <img src="portugal.jpg" onerror="this.src='https://picsum.photos/100?random=0'">
                <span>Portugal (Artistas)</span>
            </div>
            <div class="quick-card" id="quick-artist-calema">
                <img src="calema.jpg" onerror="this.src='https://picsum.photos/100?random=4'">
                <span>Calema</span>
            </div>
            <div class="quick-card" id="quick-artist-xutos">
                <img src="xutos.jpg" onerror="this.src='https://picsum.photos/100?random=1'">
                <span>Xutos & Pontapés</span>
            </div>
            <div class="quick-card" id="quick-artist-fd">
                <img src="fernando_daniel.jpg" onerror="this.src='https://picsum.photos/100?random=2'">
                <span>Fernando Daniel</span>
            </div>
        </div>

        <div class="home-section">
            <div class="section-header">
                <h2>Músicas Recomendadas</h2>
            </div>
            <div class="media-grid" id="featured-songs-grid"></div>
        </div>

        <div class="home-section">
            <div class="section-header">
                <h2>Artistas Populares</h2>
            </div>
            <div class="media-grid" id="featured-artists-grid"></div>
        </div>
    `;

    document.getElementById('quick-playlist-pt').addEventListener('click', () => openPlaylist(playlists[0]));
    document.getElementById('quick-artist-calema').addEventListener('click', () => openArtistView(artists.find(a => a.id === 103)));
    document.getElementById('quick-artist-xutos').addEventListener('click', () => openArtistView(artists.find(a => a.id === 106)));
    document.getElementById('quick-artist-fd').addEventListener('click', () => openArtistView(artists.find(a => a.id === 118)));

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

    const artistsGrid = document.getElementById('featured-artists-grid');
    const sampleArtists = artists.slice(0, 6);
    sampleArtists.forEach((artist) => {
        const card = document.createElement('div');
        card.className = 'artist-card';
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
        artistsGrid.appendChild(card);
    });
}

// Abrir Vista do Artista (1. Músicas -> 2. Álbuns)
function openArtistView(artist, pushHistory = true) {
    if (!artist) return;
    sectionTitle.innerText = artist.name;

    if (pushHistory) {
        pushStateToHistory({
            viewType: 'artist',
            title: artist.name,
            artistId: artist.id,
            activePlaylistId: activePlaylistId
        });
    }

    cardsContainer.className = 'song-list';
    cardsContainer.innerHTML = '';

    // 1. PRIMEIRA SECÇÃO: Músicas soltas do Artista
    const albumSongIds = artist.albums ? artist.albums.flatMap(a => a.songIds) : [];
    const artistSongs = songs.filter(s => artist.songIds.includes(s.id) && !albumSongIds.includes(s.id));

    if (artistSongs.length > 0) {
        const songsHeader = document.createElement('h3');
        songsHeader.innerText = "Músicas Populares";
        songsHeader.style.margin = "0 0 15px 0";
        cardsContainer.appendChild(songsHeader);

        const songsContainer = document.createElement('div');
        cardsContainer.appendChild(songsContainer);
        renderSongRows(artistSongs, songsContainer);
    }

    // 2. SEGUNDA SECÇÃO: Álbuns
    if (artist.albums && artist.albums.length > 0) {
        const albumsHeader = document.createElement('h3');
        albumsHeader.innerText = "Álbuns";
        albumsHeader.style.margin = "25px 0 15px 0";
        cardsContainer.appendChild(albumsHeader);

        const albumsGrid = document.createElement('div');
        albumsGrid.className = 'portugal-grid';

        artist.albums.forEach(album => {
            const albumCard = document.createElement('div');
            albumCard.className = 'artist-card';

            albumCard.innerHTML = `
                <div class="artist-card-img-wrapper">
                    <img src="${album.cover}" alt="${album.title}" onerror="this.src='https://picsum.photos/200?random=${artist.id}'">
                    <div class="play-btn-hover">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>
                <div class="artist-card-info">
                    <h4>${album.title}</h4>
                    <p>${album.year} • Álbum</p>
                </div>
            `;

            albumCard.addEventListener('click', () => openAlbumView(album));
            albumsGrid.appendChild(albumCard);
        });

        cardsContainer.appendChild(albumsGrid);
    }
}

// Abrir Músicas do Álbum
function openAlbumView(album) {
    sectionTitle.innerText = album.title;

    pushStateToHistory({
        viewType: 'album',
        title: album.title,
        songIds: album.songIds,
        activePlaylistId: activePlaylistId
    });

    const albumSongs = album.songIds.map(id => songs.find(s => s.id === id)).filter(Boolean);
    loadCards(albumSongs);
}

// Renderizar Faixas de Música (A DURAÇÃO FOI REMOVIDA DAQUI)
function renderSongRows(songsToRender, container) {
    if (songsToRender.length === 0) {
        container.innerHTML = `<p class="no-results" style="padding: 15px 0; color: #b3b3b3;">Nenhuma música disponível neste álbum.</p>`;
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
        `;

        row.addEventListener('click', () => {
            currentList = songsToRender;
            songIndex = originalIndex;
            loadSong(songs[songIndex]);
            playSong();
        });

        container.appendChild(row);
    });
}

// Load General Cards
function loadCards(songsToRender = songs) {
    cardsContainer.className = 'song-list';
    cardsContainer.innerHTML = '';
    renderSongRows(songsToRender, cardsContainer);
}

// Renderizar Grelha de Artistas
function renderArtistsGrid(artistsToRender = artists) {
    cardsContainer.className = 'portugal-grid';
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

// Botões de Nav
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

    if (activePlaylistId === 1 && cardsContainer.classList.contains('portugal-grid')) {
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

// Audio Player Controls
function loadSong(song) {
    songTitle.innerText = song.title;
    songArtist.innerText = song.artist;
    audio.src = song.src;
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

// DESATIVAR ZOOM DA PÁGINA
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
        e.preventDefault();
    }
});

document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

// Init
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