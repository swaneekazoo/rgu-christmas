function Car (x, y, vex) {
	this.x = x;
	this.y = y;
	this.vex = vex;
	this.img = new Image();
	this.img.src = "img/vehicle/car.png";
}

Car.prototype.draw = function(context) {
	
	context.drawImage(this.img,
	this.x,
	this.y,
	256,
	64);
	
}

Car.prototype.drive = function() {
	
	this.x = this.x + this.vex;
	this.vex = this.vex - 0.03125;
	
}