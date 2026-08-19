// LISTA COMPLETA
const songs = [
    { id: 1, title: "Amanhã De Manhã - Remix", artist: "Doce, André Henriques", duration: "3:24", cover: "imagens/amanha-de-manha.jpg", src: "Amanhã De Manhã - Remix.mp3" },
    { id: 2, title: "Baianá - Original mix", artist: "Rogerson", duration: "3:15", cover: "imagens/baiana.jpg", src: "Baianá - Original mix.mp3" },
    { id: 3, title: "Báilame - Remix", artist: "Nacho, Yandel, Bad Bunny", duration: "3:37", cover: "imagens/bailame.jpg", src: "Báilame - Remix.mp3" },
    { id: 4, title: "Dama Bandida", artist: "Fábio Lagarto", duration: "3:10", cover: "imagens/dama-bandida.jpg", src: "dama-bandida.mp3" },
    { id: 5, title: "La Plena", artist: "DJ Diego Alonso", duration: "3:05", cover: "imagens/la-plena.jpg", src: "La Plena.mp3" },
    { id: 6, title: "O Bicho - 2015 Remix", artist: "Iran Costa", duration: "3:30", cover: "imagens/o-bicho.jpg", src: "O Bicho - 2015 Remix.mp3" },
    { id: 7, title: "Problema (Feat. Laton)", artist: "Mastiksoul, Laton", duration: "3:20", cover: "imagens/problema.jpg", src: "Problema (Feat. Laton).mp3" },
    { id: 8, title: "Pump It - Radio Edit", artist: "Javi Reina", duration: "3:45", cover: "imagens/pump-it.jpg", src: "Pump It - Radio Edit.mp3" },
    { id: 9, title: "Rock This Party - Remix", artist: "DJ R'AN", duration: "3:12", cover: "imagens/rock-this-party.jpg", src: "Rock This Party - Remix.mp3" },
    { id: 10, title: "Scatman (Aumenta O Som)", artist: "Pedrinha Moraes, Alok", duration: "2:08", cover: "imagens/scatman.jpg", src: "Scatman (Aumenta O Som).mp3" },
    { id: 11, title: "Viagem - Johnny 500 Remix", artist: "Calema, Johnny 500", duration: "3:28", cover: "imagens/viagem.jpg", src: "Viagem - Johnny 500 Remix.mp3" },
    { id: 12, title: "Where Have You Been", artist: "Rihanna", duration: "4:02", cover: "imagens/rihanna.jpg", src: "Where Have You Been.mp3" },
    { id: 13, title: "Zookey - Radio Edit", artist: "Yves Larock feat. Roland Richards", duration: "3:18", cover: "imagens/zookey.jpg", src: "Zookey - Radio Edit.mp3" },
    { id: 14, title: "O Homem Do Leme - Live", artist: "Xutos & Pontapés", duration: "4:30", cover: "imagens/xutos.jpg", src: "O Homem Do Leme - Live.mp3" },
    { id: 15, title: "O Mundo Ao Contrário", artist: "Xutos & Pontapés", duration: "4:15", cover: "imagens/xutos.jpg", src: "O Mundo Ao Contrário.mp3" },
    { id: 16, title: "À Minha Maneira", artist: "Xutos & Pontapés", duration: "3:25", cover: "imagens/xutos.jpg", src: "À Minha Maneira.mp3" },
    { id: 17, title: "Circo De Feras", artist: "Xutos & Pontapés", duration: "4:20", cover: "imagens/xutos.jpg", src: "Circo De Feras.mp3" },
    { id: 18, title: "Contentores", artist: "Xutos & Pontapés", duration: "3:40", cover: "imagens/xutos.jpg", src: "Contentores.mp3" },
    { id: 19, title: "Dia De S. Receber", artist: "Xutos & Pontapés", duration: "3:10", cover: "imagens/xutos.jpg", src: "Dia De S. Receber.mp3" },
    { id: 20, title: "Gritos Mudos", artist: "Xutos & Pontapés", duration: "4:05", cover: "imagens/xutos.jpg", src: "Gritos Mudos.mp3" },
    { id: 21, title: "Não Sou O Único", artist: "Xutos & Pontapés", duration: "3:50", cover: "imagens/xutos.jpg", src: "Não Sou O Único.mp3" },
    { id: 22, title: "Para Ti Maria", artist: "Xutos & Pontapés", duration: "3:30", cover: "imagens/xutos.jpg", src: "Para Ti Maria.mp3" },
    { id: 23, title: "A'A'A'A'A'A' (Xutos e Pontapes)", artist: "Xutos & Pontapés", duration: "3:00", cover: "imagens/xutos.jpg", src: "A'A'A'A'A'A' (Xutos e Pontapes).mp3" },
    { id: 24, title: "Não Deixa", artist: "Nuno Ribeiro", duration: "3:15", cover: "imagens/nuno-ribeiro.jpg", src: "Nelson Freitas, Nuno Ribeiro - Não Deixa.mp3" },
    { id: 25, title: "Imagina", artist: "Nuno Ribeiro", duration: "3:10", cover: "imagens/nuno-ribeiro.jpg", src: "Nuno Ribeiro - Imagina (SPOTISAVER).mp3" },
    { id: 26, title: "Longe", artist: "Nuno Ribeiro", duration: "3:20", cover: "imagens/nuno-ribeiro.jpg", src: "Nuno Ribeiro - Longe (SPOTISAVER).mp3" },
    { id: 27, title: "Para Além de Ti", artist: "Nuno Ribeiro", duration: "3:05", cover: "imagens/nuno-ribeiro.jpg", src: "Nuno Ribeiro - Para Além de Ti.mp3" },
    { id: 28, title: "Por Teu Amor", artist: "Nuno Ribeiro", duration: "3:12", cover: "imagens/nuno-ribeiro.jpg", src: "Nuno Ribeiro - Por Teu Amor (SPOTISAVER).mp3" },
    { id: 29, title: "Tarde Demais", artist: "Nuno Ribeiro", duration: "3:18", cover: "imagens/nuno-ribeiro.jpg", src: "Nuno Ribeiro - Tarde Demais (SPOTISAVER).mp3" },
    { id: 30, title: "Nascente", artist: "Nuno Ribeiro", duration: "2:55", cover: "imagens/nuno-ribeiro.jpg", src: "Nascente (with AWA)_spotdown.org.mp3" },
    { id: 31, title: "Dias de Sol", artist: "Nuno Ribeiro", duration: "3:25", cover: "imagens/nuno-ribeiro.jpg", src: "Dias de Sol_spotdown.org.mp3" },
    { id: 32, title: "Maria Joana", artist: "Nuno Ribeiro", duration: "3:30", cover: "imagens/nuno-ribeiro.jpg", src: "Maria Joana_spotdown.org.mp3" },
    { id: 33, title: "Assim", artist: "Nuno Ribeiro", duration: "3:08", cover: "imagens/nuno-ribeiro.jpg", src: "Nuno Ribeiro, Nick Bander - Assim (Audio Official) - Nuno Ribeiro (128k).mp3" },
    { id: 34, title: "Cair", artist: "Fernando Daniel", duration: "3:15", cover: "imagens/fernando-daniel.jpg", src: "Fernando Daniel - Cair - Fernando Daniel (128k).mp3" },
    { id: 35, title: "Casa", artist: "Fernando Daniel", duration: "3:20", cover: "imagens/fernando-daniel.jpg", src: "Fernando Daniel - casa - Fernando Daniel (128k).mp3" },
    { id: 36, title: "Espera", artist: "Fernando Daniel", duration: "3:48", cover: "imagens/fernando-daniel.jpg", src: "Fernando Daniel - Espera - Fernando Daniel (128k).mp3" }
];

// --- PLAYER E LÓGICA ---
let songIndex = 0;
const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const contentView = document.getElementById('content-view'); // O elemento que está vazio

function loadSong(song) {
    document.getElementById('player-title').innerText = song.title;
    document.getElementById('player-artist').innerText = song.artist;
    document.getElementById('player-cover').src = song.cover;
    audio.src = song.src;
}

function renderSongs() {
    if (!contentView) return;
    contentView.innerHTML = '<div style="padding: 20px; display: grid; gap: 10px;">' + 
        songs.map(song => `
            <div class="song-item" style="background: #222; padding: 10px; cursor: pointer; border-radius: 5px;">
                ${song.title} - ${song.artist}
            </div>
        `).join('') + 
        '</div>';
    
    // Adicionar clique nos itens
    document.querySelectorAll('.song-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            songIndex = index;
            loadSong(songs[songIndex]);
            audio.play();
        });
    });
}

playBtn.addEventListener('click', () => {
    if (audio.paused) { audio.play(); playBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>'; }
    else { audio.pause(); playBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>'; }
});

// INICIAR
loadSong(songs[0]);
renderSongs(); // <--- Isto é o que faltava para aparecerem as músicas!
