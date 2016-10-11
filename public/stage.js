var socket;
/*var particle;
var ptouchIsDown;
var pmouseIsPressed;
var target = 50;
var grow = 0;
var grow2;
var randomColor;*/

var data = {};
var newData = 300;
var checkData = 0;

var particle = [];
//var particlesCheck = [];
var particleFunctions = {};

var users = [], usersIndex = {};
var usersCheck = 0;
var disconnected;

var windowSize = {
	w: document.documentElement.clientWidth, 
	h: document.documentElement.clientHeight
};

/*var xG;
var yG;*/


function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	background(0);
	frameRate(60);
	//var users = window.users;
	//particle = new Particle(users);
	//particle2 = new Particle2();
	/*drawing = new newDrawing(300, 300);

	ptouchIsDown = touchIsDown;
  	pmouseIsPressed = mouseIsPressed;*/
	socket = io.connect('/stage');
	socket.on('mouseStage', newUser);
	socket.on('disconnect', disconnect);
	//socket.on('tempPart', newDrawing);
	//socket.on('sockID', sockID);
}


function addOrReplaceParticle(object){
		//index = object;
		
		var index = users[object]; //takes id and assigns an index #
		//console.log(index);
		if(index === undefined){
			index = users.length;
			users[object] = index;
		}
		users[index] = object;

        for (var i = 0; i < users.length; i++){
            particleFunctions['particle' + i] = function(i){
                p = window.users[i]
                //x = window.users[i].x1;
                //y = window.users[i].y1;

                /*this.history = [];

                this.update = function(){

                }*/
                this.show = function(){
                    pX = (p.x1/p.w);
                    x = pX * window.windowSize.w;
                    pY = (p.y1/p.h);
                    y = pY * window.windowSize.h;

                    c0 = p.c[0];
                    c0 += random(-20, 20);
                    c1 = p.c[1];
                    c1 += random(-20, 20);
                    c2 = p.c[2];
                    c2 += random(-20, 20);

                    fill(c0, c1, c2, 255);
                    ellipse(x, y, 50, 50);
                }
                return this;
            }
            //temp.x = function(){console.log('a');}
            //temp.x();
        }
}


/*var particleFunctions = {
    particle0 : function(i){
    	this.update = function(i){
    		console.log(i);
    	}
    },
     particle1 : function(){
        this.update = function(){
            console.log(i);
        }
    }
}*/

var particleFunctions = {
    /*particle0 : function(i){
        p = window.users[i]
        //x = window.users[i].x1;
        //y = window.users[i].y1;

        this.history = [];

        this.update = function(){

        }
        this.show = function(){
            pX = (p.x1/p.w);
            x = pX * window.windowSize.w;
            pY = (p.y1/p.h);
            y = pY * window.windowSize.h;

            c0 = p.c[0];
            c0 += random(-20, 20);
            c1 = p.c[1];
            c1 += random(-20, 20);
            c2 = p.c[2];
            c2 += random(-20, 20);
            s = 50;
            s += random(-10, 10);

            fill(c0, c1, c2, 255);
            ellipse(x, y, s, s);
        }
        return this;
    },
    particle1 : function(i){
        this.update = function(){
            console.log(i);
        }
        this.show = function(){
            console.log('a ' + i);
        }
        return this;
    },
    particle2 : function(i){
        this.update = function(){
            console.log(i);
        }
        this.show = function(){
            console.log('a ' + i);
        }
        return this;
    }*/
}


function createParticles(){
	//console.log(usersCheck.length);
	usersCheck = users.length;
	for (var i = 0; i < users.length; i++){
		addOrReplaceParticle(i);
	}
	//for (var i = 0; i < Object.keys(particleFunctions).length - 1; i++){
        
       
		//particle + i = new particle3();
		//console.log(i);
		/*particle[i] = function(){
			console.log('particle ' + i);
			this.update = function(){
				console.log('particle is ' + i);
			}
			function update(){
				console.log('particle ' + i);
			}
		}
		particle[i]();*/
		//particleFunctions['particle' + i].update();
        //particleFunctions['particle' + i](i).update();
    //}
}



function draw(){
	//background(51);
	noStroke();
	//particle.update();
	//users = window.users;
	//console.log(users);
	//particle.update();
	//particle();
	//particle3.update();
	/*for (var i = 0; i < users.length; i++){
        particleFunctions['particle' + i](i).update();
        //particleFunctions['particle' + i](i).show();
	}*/

	//if(users.length == usersCheck){
		/*for (var i = 0; i < users.length; i++){
			console.log(users[i].x1);
		}*/
		//console.log(users);
		//console.log(particles);
		//console.log(particlesCheck);
		//console.log(users.length);
		//console.log(usersCheck);
	//} else {
		//console.log(users.length);
		//console.log(usersCheck);
		//createParticles();
		//console.log('a');
		//particlesCheck = particles;
		//particle();
		/*for (var i = 0; i < users.length; i++){
			//particle[i].update();
			//particle[i]().update();
			particle[i]();
		}*/
		
	//}

    if(users.length != usersCheck){
        createParticles();
    } 

	//console.log(particles);
	//console.log(window.users.length);
	for (var i = 0; i < window.users.length; i++){
        if(checkData !== 0){
            particleFunctions['particle' + i](i).show();
        }
		//var p = window.users[i];
		//fill(p.c, p.c, p.c, 168);
		//ellipse(p.x1, p.y1, 24, 24);
		//particle = new Particle(i);
		//particle.update();
		//particle.show();
		//Particle(i);
		//Particle().test;		
		//particle2(p);

		//stroke(255, 0, 100);
		//strokeWeight(10);
		//line(p.x1, p.y1, p.x2, p.y2);
	//}
	//var p = window.users[1];
	///particle2(p);
    //console.log(checkData);
    	/*if(checkData == 0){
    		//particle.hide();
            
    		//particle.show();
    		//target = 0;
    		//grow = lerp(grow, target, 0.1);
    		//ellipse(window.data.x1, window.data.y1, grow, grow);

    		//ellipse(window.xG, window.yG, grow, grow);

    		//console.log(window.data.x1);
    	} else {
            particleFunctions['particle' + i](i).show();
    		//particle.show();
    		//target = 50;
    	    //grow = lerp(grow, target, 0.1);
    	    //ellipse(window.xG, window.yG, grow, grow);
    		//console.log('b');
    	}*/
	}
}



setInterval(function() {
    if (window.newData !== window.data) { //checks the stored text against the current
        window.checkData = 1;
        //console.log('changed');
    } else {
    	window.checkData = 0;
    	//console.log('nope');
    }
    window.newData = window.data //updates the global var to store the current text
}, 100); //define your interval time, every 0.15 seconds in this case



/*function particle2(p){
	//p = p;
	console.log(p.x1);
	//color = window.randomColor;
	//fill(random(255), random(255), random(255), 168);
	//ellipse(p.x1, p.y1, 24, 24);
	stroke(255, 0, 100);
	strokeWeight(10);
	line(p.x1, p.y1, p.x2, p.y2);
	setInterval(function() {
		//if(p)
	},100);
}*/



/*function Particle(users){
		//for (var i = 0; i < window.users.length; i++){
		x = window.users[users].x1;
		y = window.users[users].y1;
		
		console.log('x');
		this.history = [];


		this.update = function(){
			//this.x += random(-5, 5);
			//this.y += random(-5, 5);
			var v = createVector(x, y);
			this.history.push(v);
			if(this.history.length > 50){
				this.history.splice(0, 1);
			}
			//console.log(this.history);
			function getRandomInt(min, max) {
			  min = Math.ceil(min);
			  max = Math.floor(max);
			  return Math.floor(Math.random() * (max - min)) + min;
			}
			var num = getRandomInt(0, 255);
			console.log(num);


			for(var i = 0; i < window.users.length; i++){
				var v = createVector(window.users[i].x1, window.users[i].y1);
				this.history.push(v);
				if(this.history.length > 50){
					this.history.splice(0, 1);
				}
			}
			//console.log(this.history);
		}

		this.show = function(){
			for (var j = 0; j < this.history.length; j++){
				var pos = this.history[j];
				//var color = window.users[i].c;
				//console.log(color);
				//fill(color, 0, random(255), j);
				ellipse(pos.x, pos.y, j, j);
				//console.log(j);
			}



			/*for(var j = 0; j < window.users.length; j++){
				for (var k = 0; k < this.history.length; k++){
					var p = this.history[k];
					var color = p.c;
					//var p = window.users[k];
					fill(p.c, 0, p.c, random(255));
					ellipse(p.x, p.y, 24, 24);
					console.log(p);
				}
			}*/
		//}

		//this.hide = function(){
		//}
	//}*/





/*function newDrawing(data){
	i = data.i;

	x1 = data.x1;
	w = data.w;

	pX = (x1/w);
	x = pX * window.windowSize.w;

	y1 = data.y1;
	h = data.h;

	pY = (y1/h);
	y = pY * window.windowSize.h;

	c = data.c;
	
	window.data = data;
	window.xG = x;
	window.yG = y;
	window.randomColor = c;

	return [window.data, window.xG, window.yG, window.randomColor];
}*/

function newUser(data){
	//var object = object;
	//var index = undefined;
		/*addOrReplace(data);
		function addOrReplace(object){
			index = object.i;
			users[index] = object;
			//console.log(users2[index].x1);
			console.log(object);
			//console.log(users2.indexOf(object, object.i));
		}*/
	/*index = data.i;
	users[index] = data;
	addOrReplace(data);
	function addOrReplace(object){
		index = object.i;
		users[index] = object;
	}*/

	//var users = window.users;
	//index = data.i;
	//users[index] = data;

	//users.push(data);
	//console.log(users);
	addOrReplace(data);
	function addOrReplace(object){
		index = object.i;

		var index = usersIndex[object.i]; //takes id and assigns an index #
		//console.log(index);
		if(index === undefined){
			index = users.length;
			usersIndex[object.i] = index;
		}
		users[index] = object;
		//console.log(users[0].x1);
		//console.log(index);
	}

	window.data = data;

	//window.users = users;
	//console.log(window.users);
	//return window.users;



	//console.log(users);
	//console.log(users[index].x1);//location of drawing socket
	//return window.users;

	//console.log(users2);
	//console.log(users[index]);
	//return window.users;
}

/*function sockID(sockID){
	sockID = sockID;
	console.log(sockID);
}*/

function disconnect(sockID){
	//window.disconnected = sockID;
	//console.log(window.disconnected);

	//var users = window.users;
	//console.log(usersIndex[sockID]);
	index = usersIndex[sockID];
	users.splice(index, 1);
	//delete users[index];
	

	//window.users = users;
	//console.log(window.disconnected);
	//return [window.disconnected, window.users];
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  windowSize = {
		w: document.documentElement.clientWidth, 
		h: document.documentElement.clientHeight
	};

  return window.windowSize;
  // set background to gray
  background(00);
}