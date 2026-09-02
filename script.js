// Lista de Músicas Locais
const songs = [
    { id: 1, title: "Where Have You Been", artist: "Rihanna", duration: "4:02", cover: "imagens/rihanna.jpg", src: "where-have-you-been.mp3" },
    { id: 2, title: "Pump It - Radio Edit", artist: "Javi Reina", duration: "3:45", cover: "imagens/pump-it.jpg", src: "pump-it.mp3" },
    { id: 3, title: "Amanhã De Manhã - Remix", artist: "Doce, André Henriques", duration: "3:24", cover: "imagens/amanha-de-manha.jpg", src: "amanha-de-manha.mp3" },
    { id: 4, title: "Dama Bandida", artist: "Fábio Lagarto", duration: "3:10", cover: "imagens/dama-bandida.jpg", src: "dama-bandida.mp3" },
    
    // Lista 1
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
    { id: 16, title: "Fujo Contigo (feat. Soraia Ramos)", artist: "Calema, Soraia Ramos", duration: "3:25", cover: "imagens/fujo-contigo.jpg", src: "Fujo Contigo (feat. Soraia Ramos)_spotdown.org.mp3" },
    { id: 17, title: "Até Voltares", artist: "Jimmy P Feat. Fernando Daniel", duration: "3:35", cover: "imagens/ate-voltares.jpg", src: "Jimmy P Feat. Fernando Daniel - Até Voltares (Prod. SuaveYouKnow & Mantra) - Jimmy P (128k).mp3" },
    { id: 18, title: "La Plena", artist: "Wisin & Yandel", duration: "3:10", cover: "imagens/la-plena.jpg", src: "La Plena.mp3" },
    { id: 19, title: "Maria Joana", artist: "Nuno Ribeiro, Calema, Mariza", duration: "3:30", cover: "imagens/maria-joana.jpg", src: "Maria Joana_spotdown.org.mp3" },
    { id: 21, title: "Não Sou O Único", artist: "Xutos & Pontapés", duration: "3:55", cover: "imagens/nao-sou-o-unico.jpg", src: "Não Sou O Único.mp3" },
    { id: 22, title: "Não Deixa", artist: "Nuno Ribeiro, Nelson Freitas", duration: "3:20", cover: "imagens/nao-deixa.jpg", src: "Nelson Freitas, Nuno Ribeiro - Não Deixa.mp3" },
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
    { id: 37, title: "Essa Mulher", artist: "Nuno Ribeiro", duration: "3:40", cover: "imagens/essa-mulher.jpg", src: "Essa Mulher_spotdown.org.mp3" },
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

    // Faixas Únicas Adicionais
    { id: 55, title: "Scatman (Aumenta O Som) [feat. Alok]", artist: "Scatman John, Alok", duration: "2:40", cover: "imagens/scatman.jpg", src: "Scatman (Aumenta O Som) [feat. Alok]_spotdown.org.mp3" },
    { id: 56, title: "Viagem - Johnny 500 Remix", artist: "Johnny 500", duration: "3:15", cover: "imagens/viagem.jpg", src: "Viagem - Johnny 500 Remix_spotdown.org.mp3" },
    { id: 57, title: "Zookey - Radio Edit", artist: "Yves Larock", duration: "3:10", cover: "imagens/zookey.jpg", src: "Zookey - Radio Edit_spotdown.org.mp3" },

    // Músicas - Doce
    { id: 59, title: "Ali-Babá", artist: "Doce", duration: "3:10", cover: "imagens/doce.jpg", src: "Ali-Babá_spotdown.org.mp3" },
    { id: 60, title: "Amanhã De Manhã", artist: "Doce", duration: "3:25", cover: "imagens/doce.jpg", src: "Amanhã De Manhã_spotdown.org.mp3" },
    { id: 61, title: "OK KO", artist: "Doce", duration: "3:15", cover: "imagens/doce.jpg", src: "Ok, Ko_spotdown.org.mp3" },
    { id: 62, title: "Bem Bom", artist: "Doce", duration: "3:00", cover: "imagens/doce.jpg", src: "Bem Bom_spotdown.org.mp3" },
    { id: 63, title: "Café Com Sal", artist: "Doce", duration: "3:20", cover: "imagens/doce.jpg", src: "Café Com Sal_spotdown.org.mp3" },

    // MÚSICAS - CALEMA (Populares / Singles)
    { id: 64, title: "À Prova De Bala", artist: "Calema", duration: "3:45", cover: "calema.jpg", src: "Calema - À Prova De Bala.mp3" },
    { id: 65, title: "Respirar", artist: "Calema, Sara Correia", duration: "3:30", cover: "calema.jpg", src: "Calema, Sara Correia - Respirar (SPOTISAVER).mp3" },
    { id: 66, title: "O Nosso Amor", artist: "Soraia Ramos, Calema", duration: "3:50", cover: "soraia_ramos.jpg", src: "O Nosso Amor_spotdown.org" },
    { id: 67, title: "A Nossa Vez", artist: "Calema", duration: "4:10", cover: "calema.jpg", src: "Calema - A Nossa Vez (SPOTISAVER).mp3" },
    { id: 68, title: "Leva Tudo", artist: "Calema, Dilsinho", duration: "3:25", cover: "calema.jpg", src: "Calema, Dilsinho - Leva Tudo (SPOTISAVER).mp3" },
    { id: 69, title: "A Nossa Dança", artist: "Calema", duration: "3:15", cover: "calema.jpg", src: "Calema - A Nossa Dança (SPOTISAVER).mp3" },
    { id: 70, title: "Amar Pela Metade", artist: "Calema", duration: "3:40", cover: "calema.jpg", src: "Calema - Amar Pela Metade (SPOTISAVER).mp3" },
    { id: 71, title: "Chuva De Amor", artist: "Calema", duration: "3:20", cover: "calema.jpg", src: "Calema - Chuva De Amor (SPOTISAVER).mp3" },
    { id: 72, title: "Te Amo", artist: "Calema", duration: "3:35", cover: "calema.jpg", src: "Calema - Te Amo (SPOTISAVER).mp3" },

    // MÚSICAS - MATIAS DAMÁSIO
    { id: 80, title: "Por Ti Amor", artist: "Matias Damásio, D.A.M.A", duration: "3:30", cover: "matias_damasio.jpg", src: "Matias Damasio, D.A.M.A - Por ti Amor.mp3" },
    { id: 81, title: "Pelos Cantos do Mundo (feat. Matias Damásio)", artist: "Mickael Carreira, Matias Damásio", duration: "3:40", cover: "matias_damasio.jpg", src: "Mickael Carreira - Pelos Cantos do Mundo ft Matias Damásio (Videoclip Oficial).mp3" },
    { id: 82, title: "Loucos (feat. Héber Marques)", artist: "Matias Damásio, Héber Marques", duration: "3:45", cover: "matias_damasio.jpg", src: "Matias Damasio - Loucos ft. Héber Marques (Video Oficial).mp3" },
    { id: 83, title: "Teu Olhar", artist: "Matias Damásio", duration: "3:25", cover: "matias_damasio.jpg", src: "Matias Damasio - Teu Olhar.mp3" },
    { id: 84, title: "Como Antes", artist: "Matias Damásio", duration: "3:35", cover: "matias_damasio.jpg", src: "Matias Damáso - Como Antes.mp3" },

    // MÚSICAS - D.A.M.A
    { id: 90, title: "112", artist: "D.A.M.A", duration: "3:15", cover: "dama.jpg", src: "112_spotdown.org.mp3" },
    { id: 91, title: "Vira Vira", artist: "D.A.M.A", duration: "3:10", cover: "dama.jpg", src: "Vira Vira_spotdown.org.mp3" },
    { id: 92, title: "Menina Estás à Janela (feat. Vitorino, Buba Espinho & Bandidos do Cante)", artist: "D.A.M.A, Vitorino, Buba Espinho, Bandidos do Cante", duration: "3:45", cover: "dama.jpg", src: "Menina Estás à Janela (feat. Vitorino, Buba Espinho & Bandidos do Cante)_spotdown.org.mp3" },
    { id: 93, title: "Mãe", artist: "D.A.M.A", duration: "3:30", cover: "dama.jpg", src: "Mãe_spotdown.org.mp3" },
    { id: 94, title: "CASA", artist: "D.A.M.A", duration: "3:20", cover: "dama.jpg", src: "CASA_spotdown.org.mp3" },
    { id: 95, title: "Loucamente", artist: "D.A.M.A", duration: "3:25", cover: "dama.jpg", src: "Loucamente_spotdown.org.mp3" },
    { id: 96, title: "Terra da Maria", artist: "D.A.M.A", duration: "3:15", cover: "dama.jpg", src: "Terra da Maria_spotdown.org.mp3" },
    { id: 97, title: "Era Eu", artist: "D.A.M.A", duration: "3:35", cover: "dama.jpg", src: "Era Eu_spotdown.org.mp3" },
    { id: 98, title: "Ficar Óai", artist: "D.A.M.A", duration: "3:05", cover: "dama.jpg", src: "Ficar Óai_spotdown.org.mp3" },

    // MÚSICAS - CALEMA (MEO Arena Ao Vivo)
    { id: 201, title: "Intro (Live in MEO Arena)", artist: "Calema", duration: "2:00", cover: "calema_meo_arena.jpg", src: "Intro (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 202, title: "Onde Anda (Live in MEO Arena)", artist: "Calema", duration: "3:30", cover: "calema_meo_arena.jpg", src: "Onde Anda (Live in MEO Arena).mp3" },
    { id: 203, title: "Amar 24/24 (Live in MEO Arena)", artist: "Calema", duration: "3:20", cover: "calema_meo_arena.jpg", src: "Amar 2424 (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 204, title: "Interlude Due (Live in MEO Arena)", artist: "Calema", duration: "1:30", cover: "calema_meo_arena.jpg", src: "Interlude Due (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 205, title: "Maria Joana (Live in MEO Arena)", artist: "Calema", duration: "3:40", cover: "calema_meo_arena.jpg", src: "Maria Joana (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 206, title: "Mama Ê (Live in MEO Arena)", artist: "Calema", duration: "3:25", cover: "calema_meo_arena.jpg", src: "Mama Ê (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 207, title: "Bulawê (Live in MEO Arena)", artist: "Calema", duration: "3:15", cover: "calema_meo_arena.jpg", src: "Bulawê (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 208, title: "Homenagem General João Seria (Live in MEO Arena)", artist: "Calema", duration: "3:50", cover: "calema_meo_arena.jpg", src: "Homenagem General João Seria (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 209, title: "Viagem (Live in MEO Arena)", artist: "Calema", duration: "3:30", cover: "calema_meo_arena.jpg", src: "Viagem (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 210, title: "A Nossa Dança (Live in MEO Arena)", artist: "Calema", duration: "3:20", cover: "calema_meo_arena.jpg", src: "A Nossa Dança (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 211, title: "Allez Kua Buaru (Live in MEO Arena)", artist: "Calema", duration: "3:10", cover: "calema_meo_arena.jpg", src: "Allez Kua Buaru (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 212, title: "Até De Manhã (Live in MEO Arena)", artist: "Calema", duration: "3:35", cover: "calema_meo_arena.jpg", src: "Até De Manhã (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 213, title: "Frágil (Live in MEO Arena)", artist: "Calema", duration: "3:15", cover: "calema_meo_arena.jpg", src: "Frágil (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 214, title: "Abraços (Live in MEO Arena)", artist: "Calema", duration: "3:25", cover: "calema_meo_arena.jpg", src: "Abraços (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 215, title: "Kelê Mbê (Live in MEO Arena)", artist: "Calema", duration: "3:30", cover: "calema_meo_arena.jpg", src: "Kelê Mbê (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 216, title: "Korokosso (Live in MEO Arena)", artist: "Calema", duration: "3:20", cover: "calema_meo_arena.jpg", src: "Korokosso (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 217, title: "Vai (Parte 2) (Live in MEO Arena)", artist: "Calema", duration: "3:40", cover: "calema_meo_arena.jpg", src: "Vai (Parte 2) (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 218, title: "Bomu Kelê (Live in MEO Arena)", artist: "Calema", duration: "3:15", cover: "calema_meo_arena.jpg", src: "Bomu Kelê (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 219, title: "Casa De Madeira (Live in MEO Arena)", artist: "Calema", duration: "3:30", cover: "calema_meo_arena.jpg", src: "Casa De Madeira (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 220, title: "Interlude Une (Live in MEO Arena)", artist: "Calema", duration: "1:25", cover: "calema_meo_arena.jpg", src: "Interlude Une (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 221, title: "O Nosso Amor (Live in MEO Arena)", artist: "Calema", duration: "3:35", cover: "calema_meo_arena.jpg", src: "O Nosso Amor (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 222, title: "A Nossa Vez (Live in MEO Arena)", artist: "Calema", duration: "3:45", cover: "calema_meo_arena.jpg", src: "A Nossa Vez (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 223, title: "Dá-Me Dá-Me (Live in MEO Arena)", artist: "Calema", duration: "3:20", cover: "calema_meo_arena.jpg", src: "Dá-Me Dá-Me (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 224, title: "Perfume (Live in MEO Arena)", artist: "Calema", duration: "3:30", cover: "calema_meo_arena.jpg", src: "Perfume (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 225, title: "Preparado (Live in MEO Arena)", artist: "Calema", duration: "3:15", cover: "calema_meo_arena.jpg", src: "Preparado (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 226, title: "Toca A Todos (Live in MEO Arena)", artist: "Calema", duration: "3:25", cover: "calema_meo_arena.jpg", src: "Toca A Todos (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 227, title: "Tudo Por Amor (Live in MEO Arena)", artist: "Calema", duration: "3:35", cover: "calema_meo_arena.jpg", src: "Tudo Por Amor (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 228, title: "Vai (Live in MEO Arena)", artist: "Calema", duration: "3:40", cover: "calema_meo_arena.jpg", src: "Vai (Live in MEO Arena) - Calema (128k).mp3" },
    { id: 229, title: "Te Amo (Live in MEO Arena)", artist: "Calema", duration: "4:00", cover: "calema_meo_arena.jpg", src: "Te Amo (Live in MEO Arena) - Calema (128k).mp3" },

    // MÚSICAS - CALEMA (Estádio da Luz Ao Vivo)
    { id: 313, title: "Intro - Live At Estádio Da Luz", artist: "Calema", duration: "2:00", cover: "Live At Estádio Da Luz.jpg", src: "Intro - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 321, title: "Te Amo - Live At Estádio Da Luz", artist: "Calema", duration: "4:00", cover: "Live At Estádio Da Luz.jpg", src: "Te Amo - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 302, title: "A Nossa Vez - Live At Estádio Da Luz", artist: "Calema", duration: "3:45", cover: "Live At Estádio Da Luz.jpg", src: "A Nossa Vez - Live At Estádio Da Luz_spotdown.mp3" },
    { id: 319, title: "Perfume - Live At Estádio Da Luz", artist: "Calema", duration: "3:30", cover: "Live At Estádio Da Luz.jpg", src: "Perfume - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 322, title: "Toca A Todos - Live At Estádio Da Luz", artist: "Calema", duration: "3:25", cover: "Live At Estádio Da Luz.jpg", src: "Toca A Todos - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 304, title: "Alice - Live At Estádio Da Luz", artist: "Calema", duration: "3:30", cover: "Live At Estádio Da Luz.jpg", src: "Alice - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 317, title: "Maya - Live At Estádio Da Luz", artist: "Calema", duration: "3:15", cover: "Live At Estádio Da Luz.jpg", src: "Maya - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 312, title: "Eu E Tu - Live At Estádio Da Luz", artist: "Calema", duration: "3:25", cover: "Live At Estádio Da Luz.jpg", src: "Eu E Tu - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 320, title: "Respirar - Live At Estádio Da Luz", artist: "Calema", duration: "3:30", cover: "Live At Estádio Da Luz.jpg", src: "Respirar - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 305, title: "Allez - Live At Estádio Da Luz", artist: "Calema", duration: "3:10", cover: "Live At Estádio Da Luz.jpg", src: "Allez - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 314, title: "Kua Buaru - Live At Estádio Da Luz", artist: "Calema", duration: "3:10", cover: "Live At Estádio Da Luz.jpg", src: "Kua Buaru - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 308, title: "Bulawê - Live At Estádio Da Luz", artist: "Calema", duration: "3:15", cover: "Live At Estádio Da Luz.jpg", src: "Bulawê - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 303, title: "Abraços - Live At Estádio Da Luz", artist: "Calema", duration: "3:25", cover: "Live At Estádio Da Luz.jpg", src: "Abraços - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 309, title: "Casa De Madeira - Live At Estádio Da Luz", artist: "Calema", duration: "3:30", cover: "Live At Estádio Da Luz.jpg", src: "Casa De Madeira - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 307, title: "Bomu Kelê - Live At Estádio Da Luz", artist: "Calema", duration: "3:15", cover: "Live At Estádio Da Luz.jpg", src: "Bomu Kelê - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 323, title: "Txinguinha - Live At Estádio Da Luz", artist: "Calema", duration: "3:20", cover: "Live At Estádio Da Luz.jpg", src: "Txinguinha - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 311, title: "Distinu - Live At Estádio Da Luz", artist: "Calema", duration: "3:35", cover: "Live At Estádio Da Luz.jpg", src: "Distinu - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 306, title: "Amar Pela Metade - Live At Estádio Da Luz", artist: "Calema", duration: "3:40", cover: "Live At Estádio Da Luz.jpg", src: "Amar Pela Metade - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 310, title: "Dis-Le Moi - Live At Estádio Da Luz", artist: "Calema", duration: "3:20", cover: "Live At Estádio Da Luz.jpg", src: "Dis-Le Moi - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 324, title: "Vai - Live At Estádio Da Luz", artist: "Calema", duration: "3:40", cover: "Live At Estádio Da Luz.jpg", src: "Vai - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 318, title: "Melhor Sem Mim - Live At Estádio Da Luz", artist: "Calema", duration: "3:30", cover: "Live At Estádio Da Luz.jpg", src: "Melhor Sem Mim - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 301, title: "A Nossa Dança - Live At Estádio Da Luz", artist: "Calema", duration: "3:30", cover: "Live At Estádio Da Luz.jpg", src: "A Nossa Dança - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 315, title: "Leva Tudo - Live At Estádio Da Luz", artist: "Calema", duration: "3:25", cover: "Live At Estádio Da Luz.jpg", src: "Leva Tudo - Live At Estádio Da Luz_spotdown.org.mp3" },
    { id: 316, title: "Maria Joana - Live At Estádio Da Luz", artist: "Calema", duration: "3:40", cover: "Live At Estádio Da Luz.jpg", src: "Maria Joana - Live At Estádio Da Luz_spotdown.org.mp3" },

    // MÚSICAS - DIOGO PIÇARRA
    { id: 401, title: "Amor de Ferro", artist: "Diogo Piçarra", duration: "3:30", cover: "diogo_piçarra.jpg", src: "Amor de Ferro_spotdown.org.mp3" },
    { id: 402, title: "Anjos", artist: "Diogo Piçarra", duration: "3:25", cover: "diogo_piçarra.jpg", src: "Anjos_spotdown.org.mp3" },
    { id: 403, title: "Aqui", artist: "Diogo Piçarra", duration: "3:15", cover: "diogo_piçarra.jpg", src: "Aqui_spotdown.org.mp3" },
    { id: 404, title: "Como Se Te Fosse Perder", artist: "Diogo Piçarra", duration: "3:35", cover: "diogo_piçarra.jpg", src: "Como Se Te Fosse Perder_spotdown.org.mp3" },
    { id: 405, title: "Maré", artist: "Diogo Piçarra", duration: "3:20", cover: "diogo_piçarra.jpg", src: "Maré_spotdown.org.mp3" },
    { id: 406, title: "Monarquia", artist: "Diogo Piçarra", duration: "3:10", cover: "diogo_piçarra.jpg", src: "Monarquia_spotdown.org.mp3" },
    { id: 407, title: "Paraíso", artist: "Diogo Piçarra", duration: "3:30", cover: "diogo_piçarra.jpg", src: "Paraíso_spotdown.org.mp3" },
    { id: 408, title: "Porta 43", artist: "Diogo Piçarra", duration: "3:15", cover: "diogo_piçarra.jpg", src: "Porta 43_spotdown.org.mp3" },
    { id: 409, title: "Trevo (Tu)", artist: "Diogo Piçarra", duration: "3:40", cover: "diogo_piçarra.jpg", src: "Trevo (Tu)_spotdown.org.mp3" },
    { id: 410, title: "underwater", artist: "Diogo Piçarra", duration: "3:05", cover: "diogo_piçarra.jpg", src: "underwater_spotdown.org.mp3" },

    // MÚSICAS - CAROLINA DESLANDES
    { id: 501, title: "OURO", artist: "Carolina Deslandes", duration: "3:20", cover: "carolina_deslandes.jpg", src: "OURO_spotdown.org.mp3" },
    { id: 502, title: "Avião De Papel", artist: "Carolina Deslandes", duration: "3:30", cover: "carolina_deslandes.jpg", src: "Avião De Papel_spotdown.org.mp3" },
    { id: 503, title: "Como É Linda", artist: "Carolina Deslandes", duration: "3:15", cover: "carolina_deslandes.jpg", src: "Como É Linda_spotdown.org.mp3" },
    { id: 504, title: "Mountains (feat. Agir)", artist: "Carolina Deslandes, Agir", duration: "3:40", cover: "carolina_deslandes.jpg", src: "Mountains (feat. Agir)_spotdown.org.mp3" },
    { id: 505, title: "A Vida Toda", artist: "Carolina Deslandes", duration: "3:45", cover: "carolina_deslandes.jpg", src: "A Vida Toda_spotdown.org.mp3" },
    { id: 506, title: "Saia Da Carolina", artist: "Carolina Deslandes", duration: "3:10", cover: "carolina_deslandes.jpg", src: "Saia Da Carolina_spotdown.org.mp3" },
    { id: 507, title: "Masha (cantado pela madrinha)", artist: "Carolina Deslandes", duration: "3:25", cover: "carolina_deslandes.jpg", src: "Masha (cantado pela madrinha)_spotdown.org.mp3" },
    { id: 508, title: "Não Me Importo", artist: "Carolina Deslandes", duration: "3:15", cover: "carolina_deslandes.jpg", src: "Não Me Importo_spotdown.org.mp3" },
    { id: 509, title: "OLHA PRA NÓS", artist: "Carolina Deslandes", duration: "3:30", cover: "carolina_deslandes.jpg", src: "OLHA PRA NÓS_spotdown.org.mp3" },

    // MÚSICAS - BÁRBARA BANDEIRA
    { id: 601, title: "Manel", artist: "Bárbara Bandeira", duration: "3:20", cover: "barbara_bandeira.jpg", src: "Manel_spotdown.org.mp3" },
    { id: 602, title: "Rapariga (feat. Amália Rodrigues)", artist: "Bárbara Bandeira, Amália Rodrigues", duration: "3:30", cover: "barbara_bandeira.jpg", src: "Rapariga (feat. Amália Rodrigues)_spotdown.org.mp3" },
    { id: 603, title: "Marcha", artist: "Bárbara Bandeira", duration: "3:15", cover: "barbara_bandeira.jpg", src: "Marcha_spotdown.org.mp3" },
    { id: 604, title: "Mau Olhado", artist: "Bárbara Bandeira", duration: "3:25", cover: "barbara_bandeira.jpg", src: "Mau Olhado_spotdown.org.mp3" },
    { id: 605, title: "Fumaça (feat. Veigh)", artist: "Bárbara Bandeira, Veigh", duration: "3:35", cover: "barbara_bandeira.jpg", src: "Fumaça (feat. Veigh)_spotdown.org.mp3" },
    { id: 606, title: "Como Eu", artist: "Bárbara Bandeira", duration: "3:10", cover: "barbara_bandeira.jpg", src: "Como Eu_spotdown.org.mp3" },
    { id: 607, title: "Nós os Dois", artist: "Bárbara Bandeira", duration: "3:30", cover: "barbara_bandeira.jpg", src: "Nós os Dois_spotdown.org.mp3" },
    { id: 608, title: "Carro (feat. Dillaz)", artist: "Bárbara Bandeira, Dillaz", duration: "3:40", cover: "barbara_bandeira.jpg", src: "Carro (feat. Dillaz)_spotdown.org.mp3" },
    { id: 609, title: "Como Tu (feat. Ivandro)", artist: "Bárbara Bandeira, Ivandro", duration: "3:25", cover: "barbara_bandeira.jpg", src: "Como Tu (feat. Ivandro)_spotdown.org.mp3" },
    { id: 610, title: "Onde Vais (feat. Carminho)", artist: "Bárbara Bandeira, Carminho", duration: "3:45", cover: "barbara_bandeira.jpg", src: "Onde Vais (feat. Carminho)_spotdown.org.mp3" },

    // MÚSICAS - FÁBIO LAGARTO
    { id: 701, title: "Bonita Bandida", artist: "Fábio Lagarto", duration: "3:15", cover: "fabio_lagarto.jpg", src: "Bonita Bandida_spotdown.org.mp3" },
    { id: 702, title: "Dama Bandida", artist: "Fábio Lagarto", duration: "3:10", cover: "fabio_lagarto.jpg", src: "Dama Bandida_spotdown.org.mp3" },
    { id: 703, title: "Sou D' Olhão", artist: "Fábio Lagarto", duration: "3:20", cover: "fabio_lagarto.jpg", src: "Sou D' Olhão_spotdown.org.mp3" },
    { id: 704, title: "Tatuagens", artist: "Fábio Lagarto", duration: "3:25", cover: "fabio_lagarto.jpg", src: "Tatuagens_spotdown.org.mp3" },
    { id: 705, title: "Primeiro Amor", artist: "Fábio Lagarto", duration: "3:30", cover: "fabio_lagarto.jpg", src: "Primeiro Amor_spotdown.org.mp3" },
    { id: 706, title: "Abre o Olho", artist: "Fábio Lagarto", duration: "3:15", cover: "fabio_lagarto.jpg", src: "Abre o Olho_spotdown.org.mp3" },
    { id: 707, title: "Vou Lavar a Loiça", artist: "Fábio Lagarto", duration: "3:05", cover: "fabio_lagarto.jpg", src: "Vou Lavar a Loiça_spotdown.org.mp3" },
    { id: 708, title: "Para Sempre", artist: "Fábio Lagarto", duration: "3:35", cover: "fabio_lagarto.jpg", src: "Para Sempre_spotdown.org.mp3" },
    { id: 709, title: "Deixa O Corpo Falar", artist: "Fábio Lagarto", duration: "3:20", cover: "fabio_lagarto.jpg", src: "Deixa O Corpo Falar_spotdown.org.mp3" },
    { id: 710, title: "Menina Que Não Sabe", artist: "Fábio Lagarto", duration: "3:15", cover: "fabio_lagarto.jpg", src: "Menina Que Não Sabe_spotdown.org.mp3" },

    // MÚSICAS - SLOW J
    { id: 801, title: "Bem Zen", artist: "Slow J", duration: "3:20", cover: "slow_j.jpg", src: "Bem Zen_spotdown.org.mp3" },
    { id: 802, title: "Sem Ti", artist: "Slow J", duration: "3:30", cover: "slow_j.jpg", src: "Sem Ti_spotdown.org.mp3" },
    { id: 803, title: "Cacau", artist: "Slow J", duration: "3:15", cover: "slow_j.jpg", src: "Cacau_spotdown.org.mp3" },
    { id: 804, title: "DIAS", artist: "Slow J", duration: "3:40", cover: "slow_j.jpg", src: "DIAS_spotdown.org.mp3" },
    { id: 805, title: "Teu Eternamente", artist: "Slow J", duration: "3:25", cover: "slow_j.jpg", src: "Teu Eternamente_spotdown.org.mp3" },
    { id: 806, title: "Imagina", artist: "Slow J", duration: "3:10", cover: "slow_j.jpg", src: "Imagina_spotdown.org.mp3" },
    { id: 807, title: "3,14", artist: "Slow J", duration: "3:35", cover: "slow_j.jpg", src: "3,14_spotdown.org.mp3" },
    { id: 808, title: "Champions League (feat. Slow J & Gson)", artist: "Slow J, Gson", duration: "3:45", cover: "slow_j.jpg", src: "Champions League (feat. Slow J & Gson)_spotdown.org.mp3" },
    { id: 809, title: "Fogo", artist: "Slow J", duration: "3:15", cover: "slow_j.jpg", src: "Fogo_spotdown.org.mp3" },
    { id: 810, title: "Tata", artist: "Slow J", duration: "3:05", cover: "slow_j.jpg", src: "Tata_spotdown.org.mp3" },

    // MÚSICAS - SORAIA RAMOS
    { id: 901, title: "Bai - Remix", artist: "Soraia Ramos", duration: "3:20", cover: "soraia_ramos.jpg", src: "Bai - Remix_spotdown.org.mp3" },
    { id: 902, title: "BKBN", artist: "Soraia Ramos", duration: "3:30", cover: "soraia_ramos.jpg", src: "BKBN_spotdown.org.mp3" },
    { id: 903, title: "Suficiente", artist: "Soraia Ramos", duration: "3:15", cover: "soraia_ramos.jpg", src: "Suficiente_spotdown.org.mp3" },
    { id: 904, title: "Meu Marido", artist: "Soraia Ramos", duration: "3:25", cover: "soraia_ramos.jpg", src: "Meu Marido_spotdown.org.mp3" },
    { id: 905, title: "Bai", artist: "Soraia Ramos", duration: "3:15", cover: "soraia_ramos.jpg", src: "Bai_spotdown.org.mp3" },
    { id: 906, title: "Kua Buaru", artist: "Soraia Ramos", duration: "3:10", cover: "soraia_ramos.jpg", src: "Kua Buaru_spotdown.org.mp3" },
    { id: 907, title: "Nha Terra", artist: "Soraia Ramos", duration: "3:35", cover: "soraia_ramos.jpg", src: "Nha Terra_spotdown.org.mp3" },

    // MÚSICAS - PROJETO VERÃO
    { id: 1001, title: "Eu Mal Posso Esperar Para Ser Rei", artist: "Projeto Verão", duration: "3:20", cover: "projeto_verao_foto.jpg", src: "Eu Mal Posso Esperar Para Ser Rei_spotdown.org.mp3" },
    { id: 1002, title: "One By One", artist: "Projeto Verão", duration: "3:15", cover: "projeto_verao_foto.jpg", src: "One By One_spotdown.org.mp3" },
    { id: 1003, title: "Warm African Breeze", artist: "Projeto Verão", duration: "3:30", cover: "projeto_verao_foto.jpg", src: "Warm African Breeze_spotdown.org.mp3" },
    { id: 1004, title: "Never Too Late", artist: "Projeto Verão", duration: "3:25", cover: "projeto_verao_foto.jpg", src: "Never Too Late_spotdown.org.mp3" },
    { id: 1005, title: "I Always Wanted A Brother", artist: "Projeto Verão", duration: "3:10", cover: "projeto_verao_foto.jpg", src: "I Always Wanted A Brother_spotdown.org.mp3" },
    { id: 1006, title: "Police", artist: "Projeto Verão", duration: "3:05", cover: "projeto_verao_foto.jpg", src: "Police_spotdown.org.mp3" },
    { id: 1007, title: "Afrika", artist: "Projeto Verão", duration: "3:40", cover: "projeto_verao_foto.jpg", src: "Afrika_spotdown.org.mp3" },
    { id: 1008, title: "He Lives in You", artist: "Projeto Verão", duration: "3:35", cover: "projeto_verao_foto.jpg", src: "He Lives in You_spotdown.org.mp3" },
    { id: 1009, title: "Mbube", artist: "Projeto Verão", duration: "3:15", cover: "projeto_verao_foto.jpg", src: "Mbube_spotdown.org.mp3" },
    { id: 1010, title: "Song of Freedom", artist: "Projeto Verão", duration: "3:30", cover: "projeto_verao_foto.jpg", src: "Song of Freedom_spotdown.org.mp3" },
    { id: 1011, title: "Hakuna Matata", artist: "Projeto Verão", duration: "3:20", cover: "projeto_verao_foto.jpg", src: "Hakuna Matata_spotdown.org.mp3" },
    { id: 1012, title: "Mbandkada Groove", artist: "Projeto Verão", duration: "3:10", cover: "projeto_verao_foto.jpg", src: "Mbandkada Groove_spotdown.org.mp3" },
    { id: 1013, title: "Ciclo Sem Fim_Nants' Ingonyama", artist: "Projeto Verão", duration: "3:50", cover: "projeto_verao_foto.jpg", src: "Ciclo Sem Fim_Nants' Ingonyama_spotdown.org.mp3" },
    { id: 1014, title: "Papaoutai - Afro Soul", artist: "Projeto Verão", duration: "3:25", cover: "projeto_verao_foto.jpg", src: "Papaoutai - Afro Soul_spotdown.org.mp3" },
    { id: 1015, title: "Quem Dorme é o Leão", artist: "Projeto Verão", duration: "3:15", cover: "projeto_verao_foto.jpg", src: "Quem Dorme é o Leão_spotdown.org.mp3" }
];

// ARTISTAS PORTUGUESES
const artists = [
    { id: 126, name: "Projeto Verão", photo: "projeto_verao_foto.jpg", songIds: [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015], gridSpan: true },
    { id: 101, name: "Doce", photo: "doce.jpg", songIds: [3, 59, 60, 61, 62, 63] },
    { id: 102, name: "Fábio Lagarto", photo: "fabio_lagarto.jpg", songIds: [4, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710] },
    { 
        id: 103, 
        name: "Calema", 
        photo: "calema.jpg", 
        songIds: [16, 19, 64, 65, 66, 67, 68, 69, 70, 71, 72],
        albums: [
            {
                id: "calema-meo-arena",
                title: "MEO Arena (Ao Vivo)",
                cover: "calema_meo_arena.jpg",
                year: "2024",
                songIds: [
                    201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 
                    211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 
                    221, 222, 223, 224, 225, 226, 227, 228, 229
                ]
            },
            {
                id: "calema-estadio-da-luz",
                title: "Estádio da Luz (Ao Vivo)",
                cover: "Live At Estádio Da Luz.jpg",
                year: "2024",
                songIds: [
                    313, 321, 302, 319, 322, 304, 317, 312, 320, 305,
                    314, 308, 303, 309, 307, 323, 311, 306, 310, 324,
                    318, 301, 315, 316
                ]
            }
        ]
    },
    { id: 104, name: "Nuno Ribeiro", photo: "nuno_ribeiro.jpg", songIds: [10, 19, 22, 37, 44] },
    { id: 105, name: "Matias Damásio", photo: "matias_damasio.jpg", songIds: [80, 81, 82, 83, 84] },
    { id: 106, name: "Xutos & Pontapés", photo: "xutos.jpg", songIds: [11, 12, 13, 15, 21, 42, 43, 46, 47, 48] },
    { id: 110, name: "D.A.M.A", photo: "dama.jpg", songIds: [80, 90, 91, 92, 93, 94, 95, 96, 97, 98] },
    { id: 117, name: "Diogo Piçarra", photo: "diogo_piçarra.jpg", songIds: [401, 402, 403, 404, 405, 406, 407, 408, 409, 410] },
    { id: 118, name: "Fernando Daniel", photo: "fernando_daniel.jpg", songIds: [17, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 38, 39, 40] },
    { id: 119, name: "Carolina Deslandes", photo: "carolina_deslandes.jpg", songIds: [27, 501, 502, 503, 504, 505, 506, 507, 508, 509] },
    { id: 120, name: "Bárbara Bandeira", photo: "barbara_bandeira.jpg", songIds: [601, 602, 603, 604, 605, 606, 607, 608, 609, 610] },
    { id: 121, name: "Slow J", photo: "slow_j.jpg", songIds: [801, 802, 803, 804, 805, 806, 807, 808, 809, 810] },
    { id: 122, name: "Jimmy P", photo: "jimmy_p.jpg", songIds: [17] },
    { id: 123, name: "Conan Osiris", photo: "conan_osiris.jpg", songIds: [7] },
    { id: 124, name: "Soraia Ramos", photo: "soraia_ramos.jpg", songIds: [16, 66, 901, 902, 903, 904, 905, 906, 907] },
    { id: 125, name: "Agir", photo: "agir.jpg", songIds: [28, 504] }
];

// PLAYLISTS
const playlists = [
    { id: 1, name: "Portugal", type: "artists" }
];

// Estado da Aplicação
let currentList = [...songs];
let currentTrackIndex = 0; // Índice da música na currentList
let isPlaying = false;
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

// VISTA DE INÍCIO
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
            currentList = sampleSongs;
            currentTrackIndex = sampleSongs.findIndex(s => s.id === song.id);
            loadSong(currentList[currentTrackIndex]);
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

// Abrir Vista do Artista
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
    } else {
        cardsContainer.innerHTML = `<p class="no-results" style="padding: 15px 0; color: #b3b3b3;">Nenhuma música disponível para este artista de momento.</p>`;
    }

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

// Renderizar Faixas de Música
function renderSongRows(songsToRender, container) {
    if (songsToRender.length === 0) {
        container.innerHTML = `<p class="no-results" style="padding: 15px 0; color: #b3b3b3;">Nenhuma música disponível neste álbum.</p>`;
        return;
    }

    songsToRender.forEach((song, index) => {
        const row = document.createElement('div');
        row.classList.add('song-row');
        
        if (currentList[currentTrackIndex] && currentList[currentTrackIndex].id === song.id && isPlaying) {
            row.classList.add('playing');
        }

        row.innerHTML = `
            <div class="song-number">${index + 1}</div>
            <img class="song-row-img" src="${song.cover}" alt="${song.title}" onerror="this.src='https://picsum.photos/200?random=${song.id}'">
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
            currentTrackIndex = index;
            loadSong(currentList[currentTrackIndex]);
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

        if (artist.gridSpan) {
            card.classList.add('span-2x2');
        }

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
    if (!song) return;
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
        alert(`O ficheiro "${currentList[currentTrackIndex]?.src}" não foi encontrado na pasta.`);
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
        if (!audio.src || audio.src === "") loadSong(currentList[currentTrackIndex]);
        playSong();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentList.length === 0) return;
    currentTrackIndex--;
    if (currentTrackIndex < 0) currentTrackIndex = currentList.length - 1;
    loadSong(currentList[currentTrackIndex]);
    playSong();
});

nextBtn.addEventListener('click', () => {
    if (currentList.length === 0) return;
    currentTrackIndex++;
    if (currentTrackIndex >= currentList.length) currentTrackIndex = 0;
    loadSong(currentList[currentTrackIndex]);
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

// Evento quando a música termina
audio.addEventListener('ended', () => {
    if (currentList.length === 0) return;

    // Verifica se é a playlist/perfil do Projeto Verão
    const isProjetoVerao = currentList.every(song => song.artist === "Projeto Verão");

    if (isProjetoVerao) {
        currentTrackIndex++;
        // Se chegou ao fim da playlist do Projeto Verão, volta ao início (loop)
        if (currentTrackIndex >= currentList.length) {
            currentTrackIndex = 0;
        }
        loadSong(currentList[currentTrackIndex]);
        playSong();
    } else {
        // Nas restantes playlists, simplesmente avança normalmente
        nextBtn.click();
    }
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
loadSong(songs[0]);

btnInicio.classList.add('active');
btnBuscar.classList.remove('active');
renderHomeView();

pushStateToHistory({
    viewType: 'home',
    title: getGreeting(),
    activePlaylistId: null
});