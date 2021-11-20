
const MAPOFFX = 17, MAPOFFY = 22;

class ChrMap  {

    OnNodeClick = (nodeLetter) => {

    }

    constructor (container) {
        this.renderer = PIXI.autoDetectRenderer(800, 480,{backgroundColor : 0x000000});
        container.appendChild(this.renderer.view);

        this.stage = new PIXI.Container();

        this.map = new PIXI.Container();
        this.stage.addChild(this.map);
    }

    AddMapNode(letter, type, world, mapnum) {
        var node = MAPDATA[world].maps[mapnum].nodes[letter];
        if (node.aironly && world <= 27 && world > 20) return; //already drawn on Summer 2014 map
        
        var nodeG = null;
        if (node.aironly) {
            nodeG = PIXI.Sprite.fromImage('assets/maps/nodeAir.png');
            nodeG.pivot.set(35,22);
        } else if (node.raid) {
            nodeG = PIXI.Sprite.fromImage('assets/maps/nodeRaid.png');
            nodeG.pivot.set(23,19);
        } else if (node.night2 && type != 3) {
            nodeG = PIXI.Sprite.fromImage('assets/maps/nodeN.png');
            nodeG.pivot.set(10,10);
        } else if (node.nightToDay2 && !node.boss) {
            nodeG = PIXI.Sprite.fromImage('assets/maps/nodeND.png');
            nodeG.pivot.set(10,10);
        } else if (node.ambush) {
            nodeG = PIXI.Sprite.fromImage('assets/maps/nodeAmbush.png');
            nodeG.pivot.set(10,27);
        } else if (!node.boss) {
            if (node.dropoff) {
                nodeG = PIXI.Sprite.fromImage('assets/maps/nodeAnchor.png');
                nodeG.pivot.set(25,25);
            } else {
                var img;
                switch (type||node.type) {
                    case 1: img = 'assets/maps/nodeR.png'; break;
                    case 2: img = 'assets/maps/nodeG.png'; break;
                    case 3: img = 'assets/maps/nodeB.png'; break;
                    case 4: img = 'assets/maps/nodeP.png'; break;
                }
                nodeG = PIXI.Sprite.fromImage(img);
                nodeG.pivot.set(10,10);
            }
        } else {
            nodeG = PIXI.Sprite.fromImage('assets/maps/nodeBoss.png');
            nodeG.pivot.set(19,24);
        }
        nodeG.position.set(node.x+MAPOFFX,node.y+MAPOFFY);
        
        nodeG.interactive = nodeG.buttonMode = node.type != 3 && node.type != 2 && node.type != 4;
        nodeG.click = () => {
            this.OnNodeClick(letter);
        }

        this.stage.addChild(nodeG);
    }
    
    LoadMap(world, mapnum) {
        this.stage = new PIXI.Container();

        this.map = new PIXI.Container();
        this.stage.addChild(this.map);
        this.map.removeChildren();
    
        this.map.addChild(PIXI.Sprite.fromImage('assets/maps/'+world+'/'+mapnum+'.png'));
        this.map.position.set(MAPOFFX,MAPOFFY);

        if (MAPDATA[world].maps[mapnum].hiddenRoutes) {
            for (var key in MAPDATA[world].maps[mapnum].hiddenRoutes) {
                
                var route = MAPDATA[world].maps[mapnum].hiddenRoutes[key];

                for (var image of route.images) {
                    var spr = PIXI.Sprite.fromImage('assets/maps/'+world+'/'+image.name);
                    spr.position.set(image.x,image.y);
                    this.map.addChild(spr);
                }
            }
        }
    
        /*for (var letter in mapnodes) { stage.removeChild(mapnodes[letter]); }
        mapnodes = {};*/
        for (let letter in MAPDATA[world].maps[mapnum].nodes) {
            
            if (letter.includes('Start')) continue;
            
            this.AddMapNode(letter, MAPDATA[world].maps[mapnum].nodes[letter].type, world, mapnum);
        }

        /*if (world > 27 || world <= 20) { //fill unvisited air nodes
            for (var letter in MAPDATA[world].maps[mapnum].nodes) {
                var node = MAPDATA[world].maps[mapnum].nodes[letter];
                
                if (node.replacedBy) continue;
                //if ((node.aironly||node.raid||node.night2||node.nightToDay2||node.ambush) && CHDATA.event.maps[mapnum].visited.indexOf(letter) == -1) this.AddMapNode(letter);
            }
        }*/
        
        setInterval(() => {
            this.renderer.render(this.stage);
        }, 100);
    }
}
