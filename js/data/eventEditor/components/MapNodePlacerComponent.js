(() => {

function MapNodePlacer(component,divRender) {
	this.component = component;
	this.renderer = PIXI.autoDetectRenderer(800, 480,{backgroundColor : 0x000000});
	this.stage = new PIXI.Container();
	this.nodes = {};
	
	this.stage.addChild(this.layerBG = new PIXI.Container());
	this.stage.addChild(this.layerMap = new PIXI.Container());
	this.stage.addChild(this.layerNodes = new PIXI.Container());
	this.stage.addChild(this.layerEdit = new PIXI.Container());
	divRender.appendChild(this.renderer.view);
	
	this.nodeCursor = PIXI.Sprite.fromImage('assets/maps/nodeB.png');
	this.nodeCursor.alpha = .5;
	this.nodeCursor.pivot.set(10);
	
	this.layerEdit.addChild(this.nodeCursor);
	this.layerMap.position.set(MapNodePlacer.MAP_OFFSET_X,MapNodePlacer.MAP_OFFSET_Y);
	this.layerBG.addChild(PIXI.Sprite.fromImage('assets/82_res.images.ImgBackgroundDay.jpg'));
	this.layerBG.interactive = this.layerBG.buttonMode = true;
	this.layerBG.click = function() {
		this.component.clickedBG(this.nodeCursor.x-MapNodePlacer.MAP_OFFSET_X,this.nodeCursor.y-MapNodePlacer.MAP_OFFSET_Y);
	}.bind(this);
	
	this._init = function() {
		this.updateMap();
		for (let name in this.component.mapData.nodes) {
			this._createNode(name);
		}
		this._animate();
	}
	
	this._animate = function(timeNow) {
		requestAnimationFrame(this._animate);
		
		let mouse = this.renderer.plugins.interaction.mouse.global;
		this.nodeCursor.position.set(Math.round(mouse.x),Math.round(mouse.y));
		
		this.nodeCursor.visible = this.component.cursorMode == 'place' && !this.component.nameInvalid;
		for (let name in this.component.mapData.nodes) {
			if (!this.nodes[name]) {
				this._createNode(name);
			}
			this.nodes[name].update();
			if (this.nodes[name].hovered) this.nodeCursor.visible = false;
		}
		for (let name in this.nodes) {
			if (!this.component.mapData.nodes[name]) {
				this._deleteNode(name);
			}
		}
		
		this.renderer.render(this.stage);
	}.bind(this);
	
	this._createNode = function(name) {
		if (this.nodes[name]) return;
		this.nodes[name] = new MapNode(this,name);
	}
	
	this._deleteNode = function(name) {
		this.layerNodes.removeChild(this.nodes[name].graphic);
		delete this.nodes[name];
	}
	
	this.updateMap = function() {
		this.layerMap.removeChildren();
		this.layerMap.addChild(PIXI.Sprite.fromImage(this.component.mapData.mapImage));
	}
	
	this._init();
};
MapNodePlacer.MAP_OFFSET_X = 17;
MapNodePlacer.MAP_OFFSET_Y = 22;


function MapNode(nodePlacer,name) {
	this.nodePlacer = nodePlacer;
	this.name = name;
	this.type = '';
	this.graphic = new PIXI.Container();
	this.gGlow = PIXI.Sprite.fromImage('assets/maps/nodeGlow.png');
	this.hitbox = new PIXI.Graphics();
	this.hovered = false;

	this.nodePlacer.layerNodes.addChild(this.graphic);
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
	
	this.update = function() {
		let nodeData = this.nodePlacer.component.mapData.nodes[name];
		this.graphic.position.set(nodeData.x+MapNodePlacer.MAP_OFFSET_X,nodeData.y+MapNodePlacer.MAP_OFFSET_Y);
		this.gGlow.visible = this.hovered || this.nodePlacer.component.currentNode == this.name;
		let type = this._getImg(nodeData);
		if (type != this.type) {
			this.type = type;
			let typeData = MapNode.NODE_TYPES[type];
			this.graphic.removeChildren();
			let sprNew = PIXI.Sprite.fromImage(typeData.img);
			sprNew.pivot.set(typeData.pivotX,typeData.pivotY);
			this.graphic.addChild(this.hitbox);
			this.graphic.addChild(this.gGlow);
			this.graphic.addChild(sprNew);
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


window.MapNodePlacerComponent = {
	props: ['mapData','currentNode'],
	emits: ['add-node','node-changed'],
	
	data: () => ({
		nodeNewName: '',
		cursorMode: 'normal',
		autoNextNode: true,
	}),
	
	mounted() {
		this._nodePlacer = new MapNodePlacer(this,this.$refs.divNodePlacer);
	},
	
	computed: {
		nameInvalid() { return !!this.mapData.nodes[this.nodeNewName]; },
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
				this.$emit('add-node',this.nodeNewName,x,y);
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
		
		
	},
	
	watch: {
		'mapData.mapImage': function() {
			this._nodePlacer.updateMap();
		},
	},
	
	template: `
	<div class="nodePlacer">
		<div tabindex="0" ref="divNodePlacer" @click="clickedNodePlacer" @keydown="keydownNodePlacer" class="nodePlacerCanvas"></div>
		<div class="nodePlacerControls">
			<div class="tabber">
				<div class="tabberButton" :class="{selected:cursorMode=='normal'}" @click="cursorMode='normal'"><img src="assets/cursor.png"/></div>
				<div class="tabberButton" :class="{selected:cursorMode=='place'}" @click="clickedPlaceButton"><img src="assets/maps/nodeB.png"/></div>
				<div>
					<input v-model="nodeNewName" placeholder="New Node Name" maxlength="10" :class="{invalid:nameInvalid}"/>
					<label><input type="checkbox" v-model="autoNextNode"/>Auto Next Node?</label>
				</div>
			</div>
			<div class="note" v-show="currentNode">WASD/Arrows = Adjust node position</div>
		</div>
	</div>
	`
}

})();