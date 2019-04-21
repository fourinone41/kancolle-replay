var renderer = PIXI.autoDetectRenderer(800, 480,{backgroundColor : 0x000000});
document.getElementById('mapspace').appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();
var map = PIXI.Sprite.fromImage('2.png');
var nodeR = PIXI.Sprite.fromImage('nodeR.png');
var nodeG = PIXI.Sprite.fromImage('nodeG.png');
var nodeB = PIXI.Sprite.fromImage('nodeB.png');
var nodeP = PIXI.Sprite.fromImage('nodeP.png');
nodeR.pivot.set(10,10);
nodeG.pivot.set(10,10);
nodeB.pivot.set(10,10);
nodeP.pivot.set(10,10);
nodeR.alpha = .5;
nodeG.alpha = .5;
nodeB.alpha = .5;
nodeP.alpha = .5;

map.position.set(0,0);
stage.addChild(map);

var nodemarker;
var CURNODETYPE;
var CURLETTER = "A";
var OUTPUT = '';
setMarker(1);

function setMarker(type) {
	stage.removeChild(nodemarker);
	switch (type) {
		case 1: nodemarker = nodeR; break;
		case 2: nodemarker = nodeG; break;
		case 3: nodemarker = nodeB; break;
		case 4: nodemarker = nodeP; break;
	}
	stage.addChild(nodemarker);
	CURNODETYPE = type;
}

document.onkeypress = function(e) {
	e = e || window.event;
	var key = e.keyCode || e.which;
	console.log(key);
	
	if (key >= 49 && key <= 53) setMarker(key-48);
	if (key >= 97 && key <= 123) {
		CURLETTER = String.fromCharCode(key).toUpperCase();
		document.getElementById('curletter').innerText = CURLETTER;
	}
}

document.getElementById('mapspace').onclick = function() {
	if (nodemarker.x > 800) return;
	var newnode;
	switch(CURNODETYPE) {
		case 1: newnode = PIXI.Sprite.fromImage('nodeR.png'); break;
		case 2: newnode = PIXI.Sprite.fromImage('nodeG.png'); break;
		case 3: newnode = PIXI.Sprite.fromImage('nodeB.png'); break;
		case 4: newnode = PIXI.Sprite.fromImage('nodeP.png'); break;
	}
	stage.addChild(newnode);
	newnode.position.set(nodemarker.x,nodemarker.y);
	newnode.pivot.set(10,10);
	
	OUTPUT += "\t\t\t\t\t'"+CURLETTER+"': {\n";
	OUTPUT += "\t\t\t\t\t\ttype: "+CURNODETYPE+",\n";
	OUTPUT += "\t\t\t\t\t\tx: "+nodemarker.x+",\n";
	OUTPUT += "\t\t\t\t\t\ty: "+nodemarker.y+",\n";
	if (CURNODETYPE == 1) {
		OUTPUT += "\t\t\t\t\t\tcompDiff: {\n"
		OUTPUT += "\t\t\t\t\t\t\t\n"
		OUTPUT += "\t\t\t\t\t\t},\n"
	}
	OUTPUT += "\t\t\t\t\t},\n";
	
	document.getElementById('out').value = OUTPUT;
	
	CURLETTER = String.fromCharCode(CURLETTER.charCodeAt()+1);
	document.getElementById('curletter').innerText = CURLETTER;
}

function animate() {
    requestAnimationFrame(animate);
	
	var mouse = renderer.plugins.interaction.mouse.global;
	nodemarker.position.set(mouse.x,mouse.y);
	
    renderer.render(stage);
}
animate();