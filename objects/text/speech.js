function Speech (x, y, scale, colour, text) {
	this.x = x;
	this.y = y;
	this.colour = colour;
	this.text = text;
	this.scale = scale;
}

Speech.prototype.shout = function(context) {
	
	context.font = this.scale + "px Century Gothic";
	context.fillStyle = this.colour;
	context.fillText(this.text, this.x, this.y);
	
	this.vex = 4 - Math.random() * 8;
	this.vey = 4 - Math.random() * 8;
	
	this.x = this.x + this.vex;
	this.y = this.y + this.vey;
	
}

Speech.prototype.speak = function(context) {
	
	context.font = this.scale + "px Century Gothic";
	context.fillStyle = this.colour;
	context.fillText(this.text, this.x, this.y);
	
}