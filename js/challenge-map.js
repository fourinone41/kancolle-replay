!function() {
var WorldMap = {
	worldMap: null,
	renderer: null,
	stage: null,
	buttons: null,
	
	init: function() {
		if (this.renderer) return;
		this.renderer = PIXI.autoDetectRenderer(800, 480,{backgroundColor : 0x000000});
		document.getElementById('divWorldMap').appendChild(this.renderer.view);
		
		this.stage = new PIXI.Container();
	},
	
	load: function(worldMap) {
		this.worldMap = worldMap;
		
		this.stage.removeChildren();
		this.stage.addChild(PIXI.Sprite.fromImage(worldMap.bg));
		
		this.buttons = {};
		for (let areaId in worldMap.areas) {
			let area = worldMap.areas[areaId];
			let btn = PIXI.Sprite.fromImage(worldMap.imgArea);
			btn.position.set(area.x,area.y);
			btn.scale.set(area.scale);
			btn.anchor.set(.5);
			let hitbox = btn.hitbox = new PIXI.Graphics();
			hitbox.beginFill(0x000000);
			hitbox.drawCircle(0,0,area.r);
			hitbox.endFill();
			hitbox.alpha = 0;
			hitbox.position.set(btn.x,btn.y);
			hitbox.interactive = hitbox.buttonMode = true;
			hitbox.click = function() {
				chLoadSortieInfo(area.maps[0]);
				hideWorldMap();
			}
			let number = btn.number = new PIXI.Text(areaId.toString());
			number.anchor.set(.5);
			number.position.set(btn.x,btn.y);
			this.stage.addChild(btn);
			this.stage.addChild(number);
			this.stage.addChild(hitbox);
			this.buttons[areaId] = btn;
		}
		this.update();
		
		let self = this;
		let loader = new PIXI.loaders.Loader();
		loader.add('wm',worldMap.bg).add('area',worldMap.imgArea).load(function() {
			setTimeout(function() {
				self.renderer.render(self.stage);
				self.loaded = true;
			},1);
		});
	},
	
	update: function() {
		for (let areaId in this.worldMap.areas) {
			let area = this.worldMap.areas[areaId], btn = this.buttons[areaId];
			btn.number.visible = btn.hitbox.visible = btn.visible = area.maps.some(m => CHDATA.event.unlockedS.indexOf(m) != -1);
			btn.tint = (area.maps.every(m => CHDATA.event.maps[m].clear))? 0x00ff00 : 0xffffff;
		}
		if (this.loaded) {
			this.renderer.render(this.stage);
		}
	},
};

window.initWorldMap = function(worldMap) {
	worldMap = worldMap || MAPDATA[WORLD].worldMap;
	if (!worldMap) return;
	
	WorldMap.init();
	WorldMap.load(worldMap);
}

window.showWorldMap = function() {
	if (!WorldMap.worldMap || ONSORTIE) return;
	
	WorldMap.update();
	$('#divWorldMap').show();
	$('#sortiespace').hide();
}

window.hideWorldMap = function() {
	if (ONSORTIE) return;
	$('#divWorldMap').hide();
	$('#sortiespace').show();
}

$('#divWorldMap').hide();

}();