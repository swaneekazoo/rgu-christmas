function House (x, y) {
	this.img = new Image();
	this.x = x;
	this.y = y;
}

House.prototype.draw = function(context) {
	
	context.drawImage (this.img,
	this.x - 64,
	this.y - 128,
	128,
	128);
	
}

House.prototype.doorOpen = function() {
	
	this.img.src = "img/house/open.png";
	
}

House.prototype.doorClose = function() {
	
	this.img.src = "img/house/closed.png";
	
}

House.prototype.night = function() {
	
	this.img.src = "img/house/night.png"
	
}