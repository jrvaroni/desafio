//Desenvolvido por Júnior Varoni

var canvas, ctx, ALTURA, LARGURA, estadoAtual, img,
zeroShot = 37, megamanShot = 68

estado = {
    jogar: 0,
    jogando: 1,
    perdeu: 2
},

player1 = {
    x: 175,
    y: 592,
    altura: spritePlayer1.altura,
    largura: spritePlayer1.altura,
    vida: 100,
    cor: "#f02",
    desenha: function() {
        spritePlayer1.desenha(this.x, this.y, megaman)
        ctx.fillStyle = "#fff";
        ctx.font = "20px Audiowide";
        barPlayer1.desenha(100, 80, btn);
        ctx.fillText(player1.vida+"%", 110, 100 )
        ctx.fillStyle = "#fff";
        ctx.font = "18px Audiowide";
        ctx.fillText("Megaman", 100, 70 )
    },
    reset: function() {
        spriteReset.desenha(this.x, this.y)
    },
    swit: function(e) {
        spritePlayer1_shot.desenha(this.x, this.y, megaman)
    },
    click: function(e) {
        player2.vida += -20;
        if(player2.vida <= 0) {
            estadoAtual = estado.perdeu
        }
    }
},

player2 = {
    x: 850,
    y: 585,
    altura: spritePlayer2.altura,
    largura: spritePlayer2.altura,
    vida: 100,
    cor: "#f02",
    desenha: function() {
        spritePlayer2.desenha(this.x, this.y, zero)
        ctx.fillStyle = "#fff";
        ctx.font = "20px Audiowide";
        barPlayer2.desenha(735, 80, btn);
        ctx.fillText(player2.vida+"%", 900, 100 )
        ctx.fillStyle = "#fff";
        ctx.font = "18px Audiowide";
        ctx.fillText("Zero", 925, 70 )
    },
    swit: function(e) {
        spritePlayer2_shot.desenha(this.x, this.y, zero)
    },
    click: function(e) {
        player1.vida += -20;
        if(player1.vida <= 0) {
            estadoAtual = estado.perdeu
        }
    }    
}

function main() {
    ALTURA = 768;
    LARGURA = 1024;
    
    canvas = document.createElement("canvas");
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    canvas.style.border = "1px solid #000";

    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    estadoAtual = estado.jogar
    document.addEventListener("mousedown", click, false);
    if(estado.jogando){
        document.addEventListener("keydown",keydownHandler,false);
        document.addEventListener("keyup",keyupHandler,false);
    }
    
    scene = new Image();
    scene.src = "sprites/scene.png";
    btn = new Image();
    btn.src = "sprites/btn.png";
    megaman = new Image();
    megaman.src = "sprites/megaman.png";
    zero = new Image();
    zero.src = "sprites/zero.png";
    run()
}

function keydownHandler(e){
    switch(e.keyCode){
        case zeroShot:
            player2.swit();
            player2.click();
            break;
        case megamanShot:
            player1.swit();
            player1.click();
            break;
    }
}

function keyupHandler(e){
    switch(e.keyCode){
        case zeroShot:
            spritePlayer2.zShot = false;
            break;
        case megamanShot:
            spritePlayer1.mShot = false;
            break;
    }
}

function click(e){    
    if(estadoAtual == estado.jogar) {
        estadoAtual = estado.jogando
        player1.vida = 100
        player2.vida = 100
    }

    if(estadoAtual == estado.jogando) {
         
    }

    if(estadoAtual == estado.perdeu)
       estadoAtual = estado.jogar
}


function run() {
    atualiza();
    desenha();
    window.requestAnimationFrame(run);
}

function atualiza() {
    frames++;
}

function desenha(){
    ctx.fillStyle = "#212121";
    ctx.fillRect(0,0, LARGURA, ALTURA);

    bg.desenha(0,0, scene)

    if(estadoAtual == estado.jogar){
        ctx.fillStyle = "#5468c0";
        ctx.fillRect(LARGURA / 2 - 100, ALTURA / 2 - 100, 200, 100)
        ctx.fillStyle = "#212121";
        ctx.font = "40px Audiowide";
        ctx.fillText("Iniciar", LARGURA / 2 -60, ALTURA / 2 -35);
    }
    else if(estadoAtual == estado.perdeu){
        spritWinner.desenha(358, 278, btn)
        if(player1.vida > 0){
            ctx.fillStyle = "#ccc";
            ctx.font = "30px Audiowide";
            ctx.fillText("Megaman ganhou", LARGURA / 2 -100, ALTURA / 2 +10);
        }else if(player2.vida > 0){
            ctx.fillStyle = "#ccc";
            ctx.font = "30px Audiowide";
            ctx.fillText("Zero ganhou", LARGURA / 2 -60, ALTURA / 2 +10);
            player2.desenha();
        }
    }

    else if(estadoAtual == estado.jogando){
        player1.desenha();
        player2.desenha();
    }
    
    
}

main()