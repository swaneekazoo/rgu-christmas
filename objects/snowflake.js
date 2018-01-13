function Snowflake (x, y, rad, vex, vey, accel) {
	this.x = x;
	this.y = y;
	this.rad = rad;
	this.vex = vex;
	this.vey = vey;
	this.accel = accel;
}

Snowflake.prototype.draw = function(context) {

	context.beginPath();
	context.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
	context.strokeStyle = "#000040";
	context.fillStyle = "white";
	context.fill();
	context.stroke();

}

Snowflake.prototype.action = function(canvas) {

	this.x = this.x + this.vex;
	this.y = this.y + this.vey;

	this.vex = this.vex + this.accel;

	if (this.vex > 2) {

		this.accel = this.accel * -1;

	}

	if (this.vex < -2) {

		this.accel = this.accel * -1;

	}

	if (this.y - 50 >= canvas.height) {

		this.y = 0 - this.rad;
		this.x = Math.random()* 350 + 75;

	}

}
