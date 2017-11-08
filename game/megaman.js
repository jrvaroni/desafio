function Sprite(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas) {
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

var bg = new Sprite(0, 0, 1024, 768),
spritePlayer1 = new Sprite(9, 810, 90, 90),
spritePlayer1_position2 = new Sprite(97, 810, 90, 90),
spritePlayer2 = new Sprite(925, 1155, 90, 90),
spriteReset = new Sprite(19, 1312, 90, 90),
spritWinner = new Sprite(1, 1469 , 400, 180)
