function Salutation (x, y, vex, vey, accx, accy, scale, colour, text) {
	this.x = x;
	this.y = y;
	this.vex = vex;
	this.vey = vey;
	this.accx = accx;
	this.accy = accy;
	this.scale = scale;
	this.colour = colour;
	this.text = text;
}

Salutation.prototype.slide = function(context) {
	
	this.x = this.x + this.vex;
	this.y = this.y + this.vey;
	this.vex = this.vex + this.accx;
	this.vey = this.vey + this.accy;
	
	if (this.vex <= 0) {
		
		this.accx = 0;
		this.accy = -0.015625;
		
	}
	
	if (this.y < 0) {
		
		this.vey = 0;		
		this.accy = 0;
		
	}
	
	context.font = "48px Garamond";
	context.fillStyle = this.colour;
	context.fillText(this.text, this.x, this.y);
	
}

Salutation.prototype.grow = function(context) {
	
	context.font = this.scale + "px Garamond";
	context.fillStyle = this.colour;
	context.fillText(this.text, this.x, this.y);
	
	this.scale = this.scale + this.vey;
	this.vey = this.vey + this.accy;
	
	if (this.vey <= 0) {
		
		this.accy = 0;
		
	}
	
}

