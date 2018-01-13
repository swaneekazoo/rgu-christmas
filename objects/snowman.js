function Snowman (x, y, scale, vex, vey, type) {
	this.x = x;
	this.y = y;
	this.scale = scale;
	this.vex = vex;
	this.vey = vey;
	this.type = type;
	this.img = new Image();
}

Snowman.prototype.draw = function(context) {
	
	//Sets the snowman's sprite according to scale factor, direction of movement, and type
	
	if (this.scale == 1) {
		
		if (this.vex >= 0) {
			
			this.img.src = "img/snowman/" + this.type + "/min/right.png";
		}
		
		else {
			
			this.img.src = "img/snowman/" + this.type + "/min/left.png";
			
		}
		
	}
	
	if (this.scale == 2) {
		
		if (this.vex >= 0) {
			
			this.img.src = "img/snowman/" + this.type + "/med/right.png";
			
		}
		
		else {
			
			this.img.src = "img/snowman/" + this.type + "/med/left.png";
			
		}
		
	}
	
	if (this.scale == 4) {
		
		if (this.vex >= 0) {
			
			this.img.src = "img/snowman/" + this.type + "/max/right.png";
			
		}
		
		else {
			
			this.img.src = "img/snowman/" + this.type + "/max/left.png";
			
		}
		
	}
	
	this.width = 64 * this.scale;
	this.height = 64 * this.scale;
	
	//The "origin" point (where collisions are calculated) is at the bottom-centre of the snowman
		
	context.drawImage(this.img,
	this.x - this.scale * 32,
	this.y - this.scale * 64,
	this.width, this.height);
	
}

Snowman.prototype.action = function(canvas) {
		
	this.horizon = canvas.height - 50;
	this.accel = 2;
	
	//If the initial x velocity is to the left rather than the right, the direction of deceleration is reversed
	
	if (this.vex > 0) {
		
		this.accel = this.accel * -1;
		
	}
	
	this.x = this.x + this.vex;
	this.y = this.y + this.vey;
	this.vey = this.vey + this.scale;
	
	//The snowman bounces to an appropriate height according to its size 
	
	if (this.y >= this.horizon && this.vex !== 0) {
	
		this.vey = this.scale * (-4 + Math.random() * -4);
	
	}
	
	//Both times the snowman exceeds the canvas boundaries, it doubles in size, and doubles and reverses its direction
	
	if (this.x - this.width > canvas.width || this.x + this.width < 0) {
	
		this.scale = this.scale * 2;
		this.vex = this.vex * this.scale * -1;
	
	}
	
	//The third time, the snowman doesn't bounce
	
	if (this.scale > 2) {
		
		this.y = this.horizon;
		
	}
	
	//Instead, it slows to a halt according to the deceleration factor
	
	if (this.scale > 2 && this.vex !== 0) {
		
		this.vex = this.vex + this.accel;
		
	}
	
	//When it does so, it remains in the same place and adopts its right-facing sprite
	
	if (this.vex == 0 && this.type == "parent") {
		
		this.accel = 0;
		this.img.src = "img/snowman/parent/max/right.png";
		
	}
	
	//If it's the "child" snowman, it doesn't reappear at all
	
	if (this.scale > 2 && this.type == "child") {
		
		this.vex = 0;
		this.vey = 0;
		this.accel = 0;
		
	}
		
}

Snowman.prototype.simpleAction = function(context, canvas) {
	
	//Only used for the "policeman" snowman seen at the end
	
	this.img.src = "img/snowman/police.png";
	
	context.drawImage(this.img,
	this.x - 32,
	this.y - 64,
	64, 64);
	
	this.x = this.x + this.vex;
	this.y = this.y + this.vey;
	this.vey = this.vey + this.scale;
	
	if (this.y >= 450 && this.vex !== 0) {
	
		this.vey = this.scale * (-4 + Math.random() * -4);
	
	}
	
}