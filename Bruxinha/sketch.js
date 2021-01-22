function preload() {
  imagemCenario = loadImage('imagens/floresta.png');
  imagemTelaInicial = loadImage('imagens/telaInicial.png');
  imagemGameOver = loadImage('imagens/game-over.png');
  imagemPersonagem = loadImage('imagens/correndo.png');
  imagemInimigo = loadImage('imagens/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('imagens/troll.png');
  imagemVida = loadImage('imagens/coracao.png');
  
  fonteTelaInicial = loadFont('imagens/fonteTelaInicial.otf');
  
  fita = loadJSON('fita/fita.json')
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new TelaInicial()
  jogo = new Jogo()
  cenas = {
    telaInicial,
    jogo
  }
  jogo.setup()
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2)

  frameRate(40)
  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key)
}

function draw() {
  // if(cenaAtual === 'jogo') {
  //   jogo.draw()
  // }
  cenas[cenaAtual].draw()
}