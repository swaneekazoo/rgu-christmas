function Death (img, x, y, vex, vey, accel) {
	this.img = new Image();
	this.img.src = img
	this.x = x;
	this.y = y;
	this.vex = vex;
	this.vey = vey;
	this.accel = accel;
}

Death.prototype.draw = function(context) {
	
	context.fillStyle = "black";
	context.fillRect(0, 0, 500, 500);
	
	this.x = this.x + this.vex;
	this.y = this.y + this.vey;
	this.vey = this.vey + this.accel;
	
	context.drawImage (this.img, this.x, this.y, 256, 256);
	
}