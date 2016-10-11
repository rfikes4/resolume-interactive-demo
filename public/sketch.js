var socket;
var randomColor;
var sockIDx;

var particle;
//var particles = [];

var ptouchIsDown;
var pmouseIsPressed;

var target = 100;
var grow = 0;
var grow2;
var deviceAxis = 0;

var windowSize = {
	w: document.documentElement.clientWidth, 
	h: document.documentElement.clientHeight
};

screen.orientation.addEventListener('change', function() {
	var windowSize = window.windowSize;
	windowSize = {
		w: document.documentElement.clientWidth, 
		h: document.documentElement.clientHeight
	};
	console.log(windowSize);
  	return window.windowSize;
});



function setup(){
	//canvas = createCanvas(displayWidth, displayHeight);
	canvas = createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
	//canvas = createCanvas(windowWidth - 5, windowHeight - 5);
	//createCanvas (windowWidth, windowHeight);
	background(0);
	frameRate(60);
	//strokeWeight(30);
	particle = new Particle(300, 300);

	ptouchIsDown = touchIsDown;
  	pmouseIsPressed = mouseIsPressed;

  	
  	

	//socket = io.connect('192.168.0.4:3000');
	socket = io.connect();
	socket.on('color', randColor);
	socket.on('sockID', sockID);
	//socket.on('mouseStage', newDrawing);
}

/*function mousePressed(){
	particles.push(new Particle(mouseX, mouseY));
}*/

function draw(){
	//background(51);
	//particle.update();
	//particle.show();
	background(0);
	particle.update();
	//particle.show();

	if (ptouchIsDown && touchIsDown){
		particle.show();
	    noStroke();
	    target = 100;
	    grow = lerp(grow, target, 0.1);
	} else {
		particle.hide();
		target = 0;
		grow = lerp(grow, target, 0.1);
		ellipse(touchX, touchY, grow, grow);
	}


	if (pmouseIsPressed && mouseIsPressed){
	    particle.show();
	    noStroke();
	    target = 100;
	    grow = lerp(grow, target, 0.1);
	} else {
		particle.hide();
		target = 0;
		grow = lerp(grow, target, 0.1);
		ellipse(touchX, touchY, grow, grow);
	}

	ptouchIsDown = touchIsDown;
	pmouseIsPressed = mouseIsPressed;
	/*for (var i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].show();
	}*/
}

/*function newDrawing(data){
	stroke(255, 0, 100);
	strokeWeight(10);
	line(data.x1, data.y1, data.x2, data.y2);
	//console.log(data);
}*/

/*function mouseDragged(){
	noStroke()
	fill(255);
	background(51);
	ellipse(mouseX, mouseY, 36, 36);

}*/

function randColor(color){
	//console.log(color);
	randomColor = color;
	return randomColor;
}

function sockID(sockID){
	sockIDx = sockID;
	//socket.emit('sockID', sockID);
	return sockIDx;
}



function Particle(x, y){
	//this.x = x;
	//this.y = y;
	

	this.history = [];

	this.update = function(){
		//this.x += random(-5, 5);
		//this.y += random(-5, 5);

		//touchX += random(-5, 5);
		//touchY += random(-5, 5);

		//var v = createVector(this.x, this.y);
		var v = createVector(touchX, touchY);
		this.history.push(v);
		if(this.history.length > 100){
			this.history.splice(0, 1);
		}
	}

	this.show = function(){
		//stroke(0);
		//noStroke();
		//fill(0, 150);
		//grow = target;
		
		
		//grow = lerp(grow, target, 0.1);
		//ellipse(touchX, touchY, grow, grow);

		//grow = 0;
		//var grow2 = 100;
		//var target2 = 50;
		//grow = lerp(grow, target, 0.1);
		//ellipse(touchX, touchY, grow, grow);




		for (var i = 0; i < this.history.length; i++){
			var pos = this.history[i];
			//var r = 255;
			var color = window.randomColor;
			//console.log(color);
			//fill(random(255), 0, 63, r);
			fill(color[0], color[1], color[2], i);


			//fill('rgba(0,255,0, 0.25)');
			percent = i/50;
			//console.log(percent);
			ellipse(pos.x, pos.y, grow * percent, grow * percent);
			//ellipse(pos.x, pos.y, i, i);
		}
	}
	this.hide = function(){
		//target = 50;
		//grow = 0;
		
		//grow = lerp(grow, target, 0.1);
		//ellipse(touchX, touchY, grow, grow);

		//ellipse(touchX, touchY, 100, 100);
		
	}
}

function touchMoved(){
	//new Particle(mouseX, mouseY);
	//new Particle(touchX, touchY);

	//particle.show();



	//stroke(255);
	//line(touchX, touchY, ptouchX, ptouchY);
	//console.log('Sending: ' + touchX + ',' + touchY);
 
	var data = {
		i:  window.sockIDx,
		x1: touchX,
		y1: touchY,
		x2: ptouchX,
		y2: ptouchY,
		w:  window.windowSize.w,
		h:  window.windowSize.h,
		c:  window.randomColor
	}

	//console.log(data.i);
	socket.emit('mouse', data);

	return false;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  windowSize = {
		w: document.documentElement.clientWidth, 
		h: document.documentElement.clientHeight
	};

  return window.windowSize;
  // set background to gray
  background(51);
}


/*function handleOrientation(event) {
  windowSize = {
		w: document.documentElement.clientWidth, 
		h: document.documentElement.clientHeight
	};

  return window.windowSize;
}*/
