const listaDeTimes = [
    { 
        id: 1, nome: "Flamengo", sigla: "FLA", forca: 89, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Pedro", posicao: "ATA", gols: 0 },
            { nome: "Arrascaeta", posicao: "MEI", gols: 0 },
            { nome: "Gerson", posicao: "MEI", gols: 0 }
        ]
    },
    { 
        id: 2, nome: "Palmeiras", sigla: "PAL", forca: 88, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Estêvão", posicao: "ATA", gols: 0 },
            { nome: "Raphael Veiga", posicao: "MEI", gols: 0 },
            { nome: "Gustavo Gómez", posicao: "DEF", gols: 0 }
        ]
    },
    { 
        id: 3, nome: "Atlético-MG", sigla: "CAM", forca: 86, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Hulk", posicao: "ATA", gols: 0 },
            { nome: "Paulinho", posicao: "ATA", gols: 0 },
            { nome: "Gustavo Scarpa", posicao: "MEI", gols: 0 }
        ]
    },
    { 
        id: 4, nome: "Botafogo", sigla: "BOT", forca: 85, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Tiquinho Soares", posicao: "ATA", gols: 0 },
            { nome: "Luiz Henrique", posicao: "ATA", gols: 0 },
            { nome: "Savarino", posicao: "MEI", gols: 0 }
        ]
    },
    { 
        id: 5, nome: "Internacional", sigla: "INT", forca: 85, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Enner Valencia", posicao: "ATA", gols: 0 },
            { nome: "Alan Patrick", posicao: "MEI", gols: 0 },
            { nome: "Borré", posicao: "ATA", gols: 0 }
        ]
    },
    { 
        id: 6, nome: "São Paulo", sigla: "SAO", forca: 84, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Calleri", posicao: "ATA", gols: 0 },
            { nome: "Lucas Moura", posicao: "MEI", gols: 0 },
            { nome: "Luciano", posicao: "ATA", gols: 0 }
        ]
    },
    { 
        id: 7, nome: "Fluminense", sigla: "FLU", forca: 84, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Cano", posicao: "ATA", gols: 0 },
            { nome: "Jhon Arias", posicao: "MEI", gols: 0 },
            { nome: "Ganso", posicao: "MEI", gols: 0 }
        ]
    },
    { 
        id: 8, nome: "Cruzeiro", sigla: "CRU", forca: 83, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Matheus Pereira", posicao: "MEI", gols: 0 },
            { nome: "Dinenno", posicao: "ATA", gols: 0 },
            { nome: "William", posicao: "DEF", gols: 0 }
        ]
    },
    { 
        id: 9, nome: "Grêmio", sigla: "GRE", forca: 83, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Diego Costa", posicao: "ATA", gols: 0 },
            { nome: "Cristaldo", posicao: "MEI", gols: 0 },
            { nome: "Soteldo", posicao: "ATA", gols: 0 }
        ]
    },
    { 
        id: 10, nome: "Fortaleza", sigla: "FOR", forca: 83, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Lucero", posicao: "ATA", gols: 0 },
            { nome: "Yago Pikachu", posicao: "MEI", gols: 0 },
            { nome: "Moisés", posicao: "ATA", gols: 0 }
        ]
    },
    { 
        id: 11, nome: "Corinthians", sigla: "COR", forca: 82, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Yuri Alberto", posicao: "ATA", gols: 0 },
            { nome: "Rodrigo Garro", posicao: "MEI", gols: 0 },
            { nome: "Romero", posicao: "ATA", gols: 0 }
        ]
    },
    { 
        id: 12, nome: "Bahia", sigla: "BAH", forca: 82, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Everton Ribeiro", posicao: "MEI", gols: 0 },
            { nome: "Cauly", posicao: "MEI", gols: 0 },
            { nome: "Thaciano", posicao: "ATA", gols: 0 }
        ]
    },
    { 
        id: 13, nome: "Athletico-PR", sigla: "CAP", forca: 82, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Mastriani", posicao: "ATA", gols: 0 },
            { nome: "Canobbio", posicao: "ATA", gols: 0 },
            { nome: "Fernandinho", posicao: "MEI", gols: 0 }
        ]
    },
    { 
        id: 14, nome: "Vasco", sigla: "VAS", forca: 81, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Vegetti", posicao: "ATA", gols: 0 },
            { nome: "Payet", posicao: "MEI", gols: 0 },
            { nome: "Lucas Piton", posicao: "DEF", gols: 0 }
        ]
    },
    { 
        id: 15, nome: "RB Bragantino", sigla: "RBB", forca: 81, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Eduardo Sasha", posicao: "ATA", gols: 0 },
            { nome: "Helinho", posicao: "ATA", gols: 0 },
            { nome: "Juninho Capixaba", posicao: "DEF", gols: 0 }
        ]
    },
    { 
        id: 16, nome: "Cuiabá", sigla: "CUI", forca: 79, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Isidro Pitta", posicao: "ATA", gols: 0 },
            { nome: "Clayson", posicao: "ATA", gols: 0 },
            { nome: "Fernando Sobral", posicao: "MEI", gols: 0 }
        ]
    },
    { 
        id: 17, nome: "Vitória", sigla: "VIT", forca: 78, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Alerrandro", posicao: "ATA", gols: 0 },
            { nome: "Osvaldo", posicao: "ATA", gols: 0 },
            { nome: "Matheuzinho", posicao: "MEI", gols: 0 }
        ]
    },
    { 
        id: 18, nome: "Atlético-GO", sigla: "ACG", forca: 78, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Luiz Fernando", posicao: "ATA", gols: 0 },
            { nome: "Shaylon", posicao: "MEI", gols: 0 },
            { nome: "Emiliano Rodríguez", posicao: "ATA", gols: 0 }
        ]
    },
    { 
        id: 19, nome: "Juventude", sigla: "JUV", forca: 77, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Nenê", posicao: "MEI", gols: 0 },
            { nome: "Lucas Barbosa", posicao: "ATA", gols: 0 },
            { nome: "Gilberto", posicao: "ATA", gols: 0 }
        ]
    },
    { 
        id: 20, nome: "Criciúma", sigla: "CRI", forca: 77, pontos: 0, vitorias: 0,
        elenco: [
            { nome: "Bolasie", posicao: "ATA", gols: 0 },
            { nome: "Felipe Vizeu", posicao: "ATA", gols: 0 },
            { nome: "Marquinhos Gabriel", posicao: "MEI", gols: 0 }
        ]
    }
];