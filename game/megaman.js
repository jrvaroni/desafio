function Sprite(x, y, largura, altura) {
	this.zShot = this.mShot = true;
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas, pt) {
		ctx.drawImage(pt, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

var bg = new Sprite(0, 0, 1024, 768),
spritePlayer1 = new Sprite(440, 40, 59, 67),
spritePlayer1_shot = new Sprite(24, 299, 59, 67),
spritePlayer2 = new Sprite(1861, 7, 85, 77),
spritePlayer2_shot = new Sprite(1844, 534, 85, 77),
spriteReset = new Sprite(19, 1312, 90, 90),
spritWinner = new Sprite(1, 1 , 400, 183),
barPlayer1 = new Sprite(423, 11, 238, 26),
barPlayer2 = new Sprite(681, 11, 238, 26)