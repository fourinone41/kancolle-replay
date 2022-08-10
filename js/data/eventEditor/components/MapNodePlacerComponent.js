(() => {

function MapNodePlacer() {
	this.component = null;
	this.renderer = null;
	this.stage = new PIXI.Container();
	this.nodes = {};
	this.paths = {};
	this.active = false;
	
	this.stage.addChild(this.layerBG = new PIXI.Container());
	this.stage.addChild(this.layerMap = new PIXI.Container());
	this.stage.addChild(this.layerRoutes = new PIXI.Container());
	this.stage.addChild(this.layerNodes = new PIXI.Container());
	this.stage.addChild(this.layerPaths = new PIXI.Container());
	this.stage.addChild(this.layerEdit = new PIXI.Container());
	
	this.nodeCursor = SpritePool.get('assets/maps/nodeB.png');
	this.nodeCursor.alpha = .5;
	this.nodeCursor.pivot.set(10);
	
	this.layerEdit.addChild(this.nodeCursor);
	this.layerMap.position.set(MapNodePlacer.MAP_OFFSET_X,MapNodePlacer.MAP_OFFSET_Y);
	this.layerRoutes.position.set(MapNodePlacer.MAP_OFFSET_X,MapNodePlacer.MAP_OFFSET_Y);
	this.layerPaths.position.set(MapNodePlacer.MAP_OFFSET_X,MapNodePlacer.MAP_OFFSET_Y);
	this.layerBG.addChild(SpritePool.get('assets/82_res.images.ImgBackgroundDay.jpg'));
	this.layerBG.interactive = this.layerBG.buttonMode = true;
	this.layerBG.click = function() {
		this.component.clickedBG(this.nodeCursor.x-MapNodePlacer.MAP_OFFSET_X,this.nodeCursor.y-MapNodePlacer.MAP_OFFSET_Y);
	}.bind(this);
	
	this.setup = function(component,divRender) {
		this.active = true;
		this.component = component;
		this.renderer = PIXI.autoDetectRenderer(MapNodePlacer.WIDTH, MapNodePlacer.HEIGHT,{backgroundColor : 0x000000});
		divRender.appendChild(this.renderer.view);
		
		this.updateMap();
		this.updateRoutes();
		for (let name in this.component.mapData.nodes) {
			this._createNode(name);
		}
		// Path
		if (!this.component.mapData.paths) this.component.mapData.paths = [];
		for (let name in this.component.mapData.paths) {
			this._createPath(name);
		}
		this._animate();
	}
	
	this.onRecycle = function() {
		this.active = false;
		for (let name in this.nodes) this._deleteNode(name);
		this.renderer.destroy(true);
		this.component = null;
		this.renderer = null;
	}
	
	this._animate = function(timeNow) {
		if (!this.active) return;
		requestAnimationFrame(this._animate);
		
		let mouse = this.renderer.plugins.interaction.mouse.global;
		this.nodeCursor.position.set(Math.round(mouse.x),Math.round(mouse.y));
		
		this.nodeCursor.visible = this.component.cursorMode == 'place' && !this.component.nameInvalid;
		for (let name in this.nodes) {
			if (!this.component.mapData.nodes[name]) {
				this._deleteNode(name);
			}
		}
		for (let name in this.component.mapData.nodes) {
			if (!this.nodes[name]) {
				this._createNode(name);
			}
			this.nodes[name].update();
			if (this.nodes[name].hovered) this.nodeCursor.visible = false;
		}

		// Paths 

		for (let pathName in this.paths) {
			if (!this.component.mapData.paths[pathName]) {
				this._deletePath(pathName);
			}
		}

		for (let name in this.component.mapData.paths) {
			if (!this.paths[name]) {
				this._createPath(name);
			}
			this.paths[name].update();
		}
		
		this.renderer.render(this.stage);
	}.bind(this);
	
	this._createNode = function(name) {
		if (this.nodes[name]) return;
		this.nodes[name] = ObjectPool.create(MapNode,[this,name]);
	}
	
	this._deleteNode = function(name) {
		ObjectPool.recycle(this.nodes[name]);
		delete this.nodes[name];
	}

	this._createPath = function(name) {
		if (this.paths[name]) return;
		this.paths[name] = ObjectPool.create(MapPath,[this,name]);
	}
	
	this._deletePath = function(name) {
		ObjectPool.recycle(this.paths[name]);
		delete this.paths[name];
	}
	
	this.updateMap = function() {
		let sprs = this.layerMap.children.slice();
		for (let spr of sprs) {
			SpritePool.recycle(spr);
		}
		if (this.component.mapData.mapImage) {
			this.layerMap.addChild(SpritePool.get(this.component.mapData.mapImage));
		}
	}
	
	this.updateRoutes = function() {
		let sprs = this.layerRoutes.children.slice();
		for (let spr of sprs) {
			SpritePool.recycle(spr);
		}
		for (let key in this.component.hiddenRoutesImages) {
			if (!this.component.routeToggles[key]) continue;
			for (let img of this.component.hiddenRoutesImages[key]) {
				if (!img.customName) continue;
				let spr = SpritePool.get(img.customName);
				if (!spr) continue;
				spr.position.set(+img.x,+img.y);
				this.layerRoutes.addChild(spr);
			}
		}
	}
	
	this.destroy = function() {
		ObjectPool.recycle(this);
	}
};
MapNodePlacer.WIDTH = 800;
MapNodePlacer.HEIGHT = 480;
MapNodePlacer.MAP_OFFSET_X = 17;
MapNodePlacer.MAP_OFFSET_Y = 22;

function MapNode() {
	this.nodePlacer = null;
	this.name = null;
	this.type = '';
	this.graphic = new PIXI.Container();
	this.gGlow = SpritePool.get('assets/maps/nodeGlow.png');
	this.gNode = null;
	this.hitbox = new PIXI.Graphics();
	this.hovered = false;

	this.graphic.addChild(this.hitbox);
	this.graphic.addChild(this.gGlow);
	this.gGlow.pivot.set(28);
	this.gGlow.visible = false;
	this.hitbox.beginFill(0);
	this.hitbox.drawCircle(15,15,15);
	this.hitbox.pivot.set(15);
	this.hitbox.alpha = 0;
	this.hitbox.interactive = this.hitbox.buttonMode = true;
	this.hitbox.click = function() {
		this.nodePlacer.layerNodes.removeChild(this.graphic);
		this.nodePlacer.layerNodes.addChild(this.graphic);
		this.nodePlacer.component.clickedNode(this.name);
	}.bind(this);
	this.hitbox.mouseover = function() {
		this.hovered = true;
	}.bind(this);
	this.hitbox.mouseout = function() {
		this.hovered = false;
	}.bind(this);

	this.letters = [];
	
	this.setup = function(nodePlacer,name) {
		this.name = name;
		this.nodePlacer = nodePlacer;
		this.nodePlacer.layerNodes.addChild(this.graphic);
	}
	
	this.onRecycle = function() {
		this.nodePlacer.layerNodes.removeChild(this.graphic);
		this.name = null;
		this.nodePlacer = null;
	}
	
	this.update = function() {
		let nodeData = this.nodePlacer.component.mapData.nodes[this.name];
		if (!nodeData) return; 
		this.graphic.visible = !nodeData.hidden || this.nodePlacer.component.routeToggles[nodeData.hidden] !== false;
		this.graphic.position.set(nodeData.x+MapNodePlacer.MAP_OFFSET_X,nodeData.y+MapNodePlacer.MAP_OFFSET_Y);


		while (this.letters.length)
		{
			const letter = this.letters.pop();
			SpritePool.recycle(letter);
		}

		if (nodeData.letterOffsetX !== undefined && nodeData.letterOffsetY !== undefined && nodeData.letterOffsetX !== null && nodeData.letterOffsetY !== null) {		
			var offset = -10;	
			for (const letter of this.name) {
				if (/[A-Z0-9]/g.test(letter.toUpperCase())) {
					const path = "assets/maps/letters/"+ letter.toUpperCase() +".png";

					const letterSprite = SpritePool.get(path);
					letterSprite.pivot.set(offset + nodeData.letterOffsetX, -10 + nodeData.letterOffsetY);
					offset -= 10;
					this.graphic.addChild(letterSprite);
					this.letters.push(letterSprite);
				}
			}
		}

		this.gGlow.visible = this.hovered || this.nodePlacer.component.currentNode == this.name;
		let type = this._getImg(nodeData);
		if (type != this.type) {
			this.type = type;
			let typeData = MapNode.NODE_TYPES[type];
			SpritePool.recycle(this.gNode);
			this.gNode = SpritePool.get(typeData.img);
			this.gNode.pivot.set(typeData.pivotX,typeData.pivotY);
			this.graphic.addChild(this.gNode);
		}
	}
	
	this._getImg = function(nodeData) {
		if (nodeData.dropoff) return 'anchor';
		if (nodeData.type == COMMON.NODE_TYPES.RESOURCE_GAIN_NODE.type) return 'resource';
		if (nodeData.type == COMMON.NODE_TYPES.EMPTY_NODE.type) return 'empty';
		if (nodeData.type == COMMON.NODE_TYPES.RESOURCE_LOSS_NODE.type) return 'maelstrom';
		if (nodeData.type == COMMON.NODE_TYPES.NORMAL_BATTLE_NODE.type) {
			if (nodeData.ambush) return 'ambush';
			if (nodeData.night2) return 'night';
			if (nodeData.nightToDay2) return 'nightToDay';
			if (nodeData.aironly) return 'air';
			if (nodeData.raid) return 'raid';
			if (nodeData.boss) return 'boss';
			return 'battle';
		}
		return 'empty';
	}
}

function MapPath() {
	this.nodePlacer = null;
	this.name = null;
	this.graphic = new PIXI.Container();
	//this.gGlow = SpritePool.get('assets/maps/nodeGlow.png');
	this.gPath = null;
	//this.hitbox = new PIXI.Graphics();
	this.hovered = false;

	//this.graphic.addChild(this.hitbox);
	//this.graphic.addChild(this.gGlow);
	//this.gGlow.pivot.set(28);
	//this.gGlow.visible = false;
	//this.hitbox.beginFill(0);
	//this.hitbox.drawCircle(15,15,15);
	//this.hitbox.pivot.set(15);
	//this.hitbox.alpha = 0;
	//this.hitbox.interactive = this.hitbox.buttonMode = true;
	//this.hitbox.click = function() {
	//	this.nodePlacer.layerNodes.removeChild(this.graphic);
	//	this.nodePlacer.layerNodes.addChild(this.graphic);
	//	this.nodePlacer.component.clickedNode(this.name);
	//}.bind(this);
	//this.hitbox.mouseover = function() {
	//	this.hovered = true;
	//}.bind(this);
	//this.hitbox.mouseout = function() {
	//	this.hovered = false;
	//}.bind(this);

	this.paths = [];
	
	this.setup = function(nodePlacer,name) {
		this.name = name;
		this.nodePlacer = nodePlacer;
		this.nodePlacer.layerPaths.addChild(this.graphic);
	}
	
	this.onRecycle = function() {
		this.nodePlacer.layerPaths.removeChild(this.graphic);
		this.name = null;
		this.nodePlacer = null;
	}
	
	this.update = function() {

		let pathData = this.nodePlacer.component.mapData.paths[this.name];
		let nodeA = this.nodePlacer.component.mapData.nodes[pathData.nodeA];
		let nodeB = this.nodePlacer.component.mapData.nodes[pathData.nodeB];

		// remove
		while (this.paths.length) {
			const rectangleToDelete = this.paths.pop();
			this.graphic.removeChild(rectangleToDelete);
		}

		// create
		const rectangle = new PIXI.Graphics();

		rectangle.lineStyle(3, this.hovered ? 0x000000 : 0xcbcde9, 0.75);

		const a = nodeA.x - nodeB.x;
		const b = nodeA.y - nodeB.y;
		const h = Math.sqrt(Math.pow(Math.abs(a), 2) + Math.pow(Math.abs(b), 2));
		var timesRequired = (h / 15);
		const aStep = (a / timesRequired) * -1;
		const bStep = (b / timesRequired) * -1;
		const aSpaceStep = (a / (timesRequired) * .25) * -1;
		const bSpaceStep = (b / (timesRequired) * .25) * -1;
		timesRequired *= 0.75;

		var aOffSet = nodeA.x + (aStep);
		var bOffset = nodeA.y + (bStep);
		
		rectangle.moveTo(aOffSet, bOffset);

		var security = 0;
		while (Math.sqrt(Math.pow(Math.abs(nodeA.x - aOffSet), 2) + Math.pow(Math.abs(nodeA.y - bOffset), 2)) < h) {

			rectangle.lineTo(aOffSet, bOffset);

			aOffSet += aSpaceStep;
			bOffset += bSpaceStep;

			rectangle.moveTo(aOffSet, bOffset);

			aOffSet += aStep;
			bOffset += bStep;

			security++;
			if (security > 1000) break;
		}

		rectangle.interactive = rectangle.buttonMode = true;
		rectangle.click = function() {
			//this.nodePlacer.component.clickedNode(this.name);
		}.bind(this);
		rectangle.mouseover = function() {
			this.hovered = true;
		}.bind(this);
		rectangle.mouseout = function() {
			this.hovered = false;
		}.bind(this);

		this.graphic.addChild(rectangle);
		this.paths.push(rectangle);
		
	}
}

MapNode.NODE_TYPES = {
	white: { img: 'assets/maps/nodeW.png', pivotX: 10, pivotY: 10 },
	battle: { img: 'assets/maps/nodeR.png', pivotX: 10, pivotY: 10 },
	boss: { img: 'assets/maps/nodeBoss.png', pivotX: 19, pivotY: 24 },
	night: { img: 'assets/maps/nodeN.png', pivotX: 10, pivotY: 10 },
	nightToDay: { img: 'assets/maps/nodeND.png', pivotX: 10, pivotY: 10 },
	air: { img: 'assets/maps/nodeAir.png', pivotX: 35, pivotY: 22 },
	raid: { img: 'assets/maps/nodeRaid.png', pivotX: 23, pivotY: 19 },
	ambush: { img: 'assets/maps/nodeAmbush.png', pivotX: 10, pivotY: 27 },
	resource: { img: 'assets/maps/nodeG.png', pivotX: 10, pivotY: 10 },
	empty: { img: 'assets/maps/nodeB.png', pivotX: 10, pivotY: 10 },
	maelstrom: { img: 'assets/maps/nodeP.png', pivotX: 10, pivotY: 10 },
	anchor: { img: 'assets/maps/nodeAnchor.png', pivotX: 25, pivotY: 25 },
};

let ObjectPool = {
	_pool: {},
	create: function(ObjectType,args) {
		let obj = this._pool[ObjectType.name] && this._pool[ObjectType.name].pop() || new ObjectType();
		obj.setup(...args);
		return obj;
	},
	recycle: function(obj) {
		obj.onRecycle();
		if (!this._pool[obj.constructor.name]) this._pool[obj.constructor.name] = [];
		this._pool[obj.constructor.name].push(obj);
	},
};

let SpritePool = {
	_pool: {},
	get: function(path) {
		if (!path) return null;
		if (this._pool[path] && this._pool[path].length) return this._pool[path].pop();
		let spr = PIXI.Sprite.fromImage(path);
		spr.namePath = path;
		return spr;
	},
	recycle: function(spr) {
		if (!spr) return;
		if (spr.parent) spr.parent.removeChild(spr);
		if (!this._pool[spr.namePath]) this._pool[spr.namePath] = [];
		this._pool[spr.namePath].push(spr);
	},
};


window.MapNodePlacerComponent = {
	props: ['mapData','currentNode'],
	emits: ['add-node','node-changed'],
	
	data: () => ({
		nodeNewName: '',
		nodeNewRoute: null,
		cursorMode: 'normal',
		autoNextNode: true,
		addLetter: false,
		routeToggles: {},
	}),
	
	mounted() {
		this.updateRouteToggles();
		this._nodePlacer = ObjectPool.create(MapNodePlacer,[this,this.$refs.divNodePlacer]);
	},
	
	computed: {
		nameInvalid() { return !!this.mapData.nodes[this.nodeNewName]; },
		
		hiddenRoutesImages() {
			let obj = {};
			for (let key in this.mapData.hiddenRoutes) {
				obj[key] = this.mapData.hiddenRoutes[key].images.map(img => Object.assign({},img));
			}
			return obj;
		},
		
		routeTogglesKeys() { return Object.keys(this.routeToggles).sort((a,b) => +a-+b); },
	},
	
	methods: {
		setAutoNextNode() {
			if (!this.autoNextNode) return;
			if (!this.nodeNewName) {
				this.nodeNewName = 'Start';
			} else if (this.nodeNewName == 'Start') {
				this.nodeNewName = 'A';
			} else {
				let m = this.nodeNewName.match(/\d+/g);
				if (m) {
					let num = +m[0]+1;
					this.nodeNewName = this.nodeNewName.substr(0,this.nodeNewName.length-m[0].length) + num.toString();
				} else {
					this.nodeNewName = String.fromCharCode(this.nodeNewName.charCodeAt()+1);
					if (!this.nodeNewName.match(/[A-Za-z]/)) this.nodeNewName = 'Z1';
				}
			}
			
			if (this.nameInvalid) this.setAutoNextNode();
		},
		
		clickedBG(x,y) {
			if (this.cursorMode == 'place') {
				if (!this.nodeNewName) return;
				if (this.mapData.nodes[this.nodeNewName]) return;
				this.$emit('add-node',this.nodeNewName,x,y,this.nodeNewRoute, this.addLetter);
				this.setAutoNextNode();
			}
		},
		
		clickedNode(name) {
			this.$emit('node-changed',name);
		},
		
		clickedPlaceButton() {
			this.cursorMode = 'place';
			if (!this.nodeNewName) {
				this.setAutoNextNode();
			}
		},
		
		clickedNodePlacer() {
			event.target.parentNode.focus();
		},
		
		keydownNodePlacer() {
			let nodeData = this.mapData.nodes[this.currentNode];
			if (!nodeData) return;
			switch (event.key) {
				case 'w': case 'W': case 'ArrowUp':
					nodeData.y--;
					break;
				case 's': case 'S': case 'ArrowDown':
					nodeData.y++;
					break;
				case 'a': case 'A': case 'ArrowLeft':
					nodeData.x--;
					break;
				case 'd': case 'D': case 'ArrowRight':
					nodeData.x++;
					break;
			}
		},
		
		updateRouteToggles() {
			for (let key in this.hiddenRoutesImages) {
				if (this.routeToggles[key] == null) this.routeToggles[key] = true;
			}
			for (let key in this.routeToggles) {
				if (this.hiddenRoutesImages[key] == null) delete this.routeToggles[key];
			}
		},
		
		toggleRoute(key) {
			this.routeToggles[key] = !this.routeToggles[key];
			this._nodePlacer.updateRoutes();
		},

		generatePaths() {
			return;
			this.mapData.paths.push({
				nodeA: "K",
				nodeB: "Y",
			});
		}
	},
	
	watch: {
		'mapData.mapImage': function() {
			this._nodePlacer.updateMap();
		},
		'hiddenRoutesImages': {
			handler: function() {
				this.updateRouteToggles();
				this._nodePlacer.updateRoutes();
			},
			deep: true,
		},
	},
	
	unmounted() {
		this._nodePlacer.destroy();
		this._nodePlacer = null;
	},
	
	template: `
	<div class="nodePlacer">
		<div tabindex="0" ref="divNodePlacer" @click="clickedNodePlacer" @keydown="keydownNodePlacer" class="nodePlacerCanvas"></div>
		<div class="nodePlacerControls">
			<div class="tabber">
				<div class="tabberButton" :class="{selected:cursorMode=='normal'}" @click="cursorMode='normal'"><img src="assets/cursor.png"/></div>
				<div class="tabberButton" :class="{selected:cursorMode=='place'}" @click="clickedPlaceButton"><img src="assets/maps/nodeB.png"/></div>
				<div>
					<div>
						<input v-model="nodeNewName" placeholder="New Node Name" maxlength="10" :class="{invalid:nameInvalid}"/>
						<label><input type="checkbox" v-model="autoNextNode"/>Auto Next Node?</label>
						<label><input type="checkbox" v-model="addLetter"/>Add letter on the map</label>
					</div>
					<div>
						<label>Add Placed Nodes to Unlock Route: <input type="number" v-model="nodeNewRoute" min="1" max="9"/></label>
					</div>
				</div>
			</div>
			<div class="routeControls" v-show="routeTogglesKeys.length">
				Show Unlockable Routes:
				<div class="tabber">
					<div v-for="key in routeTogglesKeys" :key="key" class="tabberButton" :class="{selected:routeToggles[key]}" @click="toggleRoute(key)">{{key}}</div>
				</div>
			</div>
		</div>
		<div class="note" v-show="currentNode">WASD/Arrows = Adjust node position</div>
		<div class="tabberButton" @click="generatePaths()">Generate paths</div>
	</div>
	`
}

})();