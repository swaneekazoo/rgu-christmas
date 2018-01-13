function Light (img) {
	this.img = new Image();
	this.img.src = img;
	this.x = 0;
	this.y = 300;
}

Light.prototype.draw = function(context) {
	
	context.drawImage(this.img,
	this.x,
	this.y,
	500,
	256);
	
}