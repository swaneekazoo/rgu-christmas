function Snowball (x, y, rad, vex, vey, accel) {
	this.x = x;
	this.y = y;
	this.rad = rad;
	this.vex = vex;
	this.vey = vey;
	this.accel = accel;
}

Snowball.prototype.draw = function(context) {

	context.beginPath();
	context.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
	context.strokeStyle = "#000040";
	context.fillStyle = "white";
	context.fill();
	context.stroke();

}

Snowball.prototype.action = function(canvas) {

	this.x = this.x + this.vex;
	this.y = this.y + this.vey;
	this.vey = this. vey + this.accel;
	
	if (this.rad > 10) {
	
		this.rad = this.rad - 0.5;
		
	}

}
