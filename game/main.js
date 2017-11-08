//Desenvolvido por Júnior Varoni

var canvas, ctx, ALTURA, LARGURA, estadoAtual, img,

estado = {
    jogar: 0,
    jogando: 1,
    perdeu: 2
},

player1 = {
    x: 175,
    y: 340,
    altura: spritePlayer1.altura,
    largura: spritePlayer1.altura,
    vida: 100,
    cor: "#f02",
    desenha: function() {
        //ctx.fillStyle = this.cor,
        //ctx.fillRect(this.x, this.y, this.largura, this.altura)
        spritePlayer1_position2.desenha(this.x, this.y)
        ctx.fillStyle = "#f02";
        ctx.font = "40px Audiowide";
        ctx.fillText(player1.vida+"%", this.x, this.y +155 )
        ctx.fillStyle = "#fff";
        ctx.font = "18px Audiowide";
        ctx.fillText("Player 1", this.x +5, this.y -35 )
    },
    reset: function() {
        spriteReset.desenha(this.x, this.y)
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
    y: 340,
    altura: spritePlayer2.altura,
    largura: spritePlayer2.altura,
    vida: 100,
    cor: "#f02",
    desenha: function() {
        spritePlayer2.desenha(this.x, this.y)
        ctx.fillStyle = "#f02";
        ctx.font = "40px Audiowide";
        ctx.fillText(player2.vida+"%", this.x, this.y +155 )
        ctx.fillStyle = "#fff";
        ctx.font = "18px Audiowide";
        ctx.fillText("Player 2", this.x -5, this.y -35 )
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
    document.addEventListener("mousedown", click);
    
    img = new Image();
    img.src = "sprites.png";

    run()
}

function click(e){
    var drawing = false;    
    var mousePos = { x:0, y:0 };
    
    if(estadoAtual == estado.jogar) {
        estadoAtual = estado.jogando
    }

    if(estadoAtual == estado.jogando) {
        lastPos = getMousePos(canvas, e);
        if(lastPos.y > 340 && lastPos.y < 430 && lastPos.x > 175 && lastPos.x < 265){
            player1.click()
        }else if (lastPos.y > 340 && lastPos.y < 430 && lastPos.x > 850 && lastPos.x < 940) {
            player2.click()
        }        
    }

    //if(estadoAtual == estado.perdeu)
    //    estadoAtual = estado.jogar
}

function getMousePos(canvasDom, mouseEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top
    };
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

    bg.desenha(0,0)

    if(estadoAtual == estado.jogar){
        ctx.fillStyle = "#5468c0";
        ctx.fillRect(LARGURA / 2 - 100, ALTURA / 2 - 100, 200, 100)
        ctx.fillStyle = "#212121";
        ctx.font = "40px Audiowide";
        ctx.fillText("Iniciar", LARGURA / 2 -60, ALTURA / 2 -35);
    }
    else if(estadoAtual == estado.perdeu){
        spritWinner.desenha(400, 180)
        if(player1.vida > 0){
            ctx.fillStyle = "#ccc";
            ctx.font = "40px Audiowide";
            ctx.fillText("player 1 ganhou", LARGURA / 2 -150, ALTURA / 2 +10);
        }else if(player2.vida > 0){
            ctx.fillStyle = "#ccc";
            ctx.font = "40px Audiowide";
            ctx.fillText("player 2 ganhou", LARGURA / 2 -150, ALTURA / 2 +10);
            player2.desenha();
        }
    }

    else if(estadoAtual == estado.jogando){
        player1.desenha();
        player2.desenha();
    }
    
    
}

main()