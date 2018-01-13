function Instruction (x, y, scale, growth, accel, text) {
	this.x = x;
	this.y = y;
	this.scale = scale;
	this.growth = growth;
	this.accel = accel;
	this.text = text;
}

Instruction.prototype.draw = function(context) {
	
	context.font = this.scale + "px Haettenschweiler";
	context.fillStyle = "#000040";
	context.fillText(this.text, this.x, this.y);
	
	this.scale = this.scale + this.growth;
	this.growth = this.growth + this.accel;
	
	if (this.growth <= 0) {
		
		this.accel = 0;
		
	}
	
}