const EVENT_DATA = {
    eventData: {
        maps: {
        }
    },
    comps: {

    }
};


let makeEventClass = new ChrMakeEvent($('body'));

const FILE = localStorage.ch_file;
//var basic = JSON.parse(localStorage['ch_basic'+FILE]);
//var CHDATA = JSON.parse(localStorage['ch_data'+FILE]);

makeEventClass.InitMapButtons();
makeEventClass.ChangeMap(1);

function ChrRandomizeEvent() {
    const maps = chRandomizeMaps();

    const tasks = [];

    for (let index = 1; index < 8; index++) {
        tasks.push(ChrRandomizeMap(maps[index].world, index).then((mapData) => {
            //saveMapData(1, e1);
            EVENT_DATA.eventData.maps[index] = mapData;
        }));
    }
    
    Promise.all(tasks).then(() => {

        chInitAbyssalTables ();
        EVENT_DATA.comps = chRandomizeCompsFromMapList(maps);

        let a = window.document.createElement('a');
        a.href = window.URL.createObjectURL(new Blob([JSON.stringify(EVENT_DATA)], {type: 'application/json'}));
        a.download = 'event_export.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        makeEventClass.ChangeMap(1);
    });
    
    
    /*ChrRandomizeMap(basic.maps[1].world, 1).then((e1) => {
        saveMapData(1, e1);

        ChrRandomizeMap(basic.maps[2].world, 2).then((e2) => {

            saveMapData(2, e2);
            ChrRandomizeMap(basic.maps[3].world, 3).then((e3) => {

                saveMapData(3, e3);
                ChrRandomizeMap(basic.maps[4].world, 4).then((e4) => {

                    saveMapData(4, e4);
                    ChrRandomizeMap(basic.maps[5].world, 5).then((e5) => {

                        saveMapData(5, e5);
                        ChrRandomizeMap(basic.maps[6].world, 6).then((e6) => {

                            saveMapData(6, e6);
                            ChrRandomizeMap(basic.maps[7].world, 7).then((e7) => {
                                saveMapData(7, e7);
                            });
                        });
                    });
                });
            });
        });
    });

    return;*/
    //loadObject.Hide();
}

function saveMapData(mapnum, map) {

    // --- Delete useless data
    for (const node in map.nodes) {
        let nodeData = map.nodes[node];

        delete nodeData.fleetsTypes;
    }

    localStorage.setItem('chrRandom-' + mapnum, JSON.stringify(map));
}

function ChrRandomizeMap(eventNumber, mapNumber) {
    
    console.debug(`Randomizing ${MAPDATA[eventNumber].name} E${mapNumber}`);
        
    /**
     * @type {ChrRandomizeEventHelper.PathObject[]}
     */
    let paths = [];
    let starts = [];
    
    let map = MAPDATA[eventNumber].maps[mapNumber];

    let countSecurity = 0;
    let checkLoop = () => {
        countSecurity++;
        if (countSecurity > 999999) {
            alert('loop detected');
            throw 'loop detected';
        }
    }

    let constructMapLayout = () => {

        for (const node in map.nodes) {
            if (node.includes('Start')) starts.push(node);
        }
    
        let constructPaths = (node, nodeFrom) => {

            checkLoop();

            /**
             * @type {{ rules: ChRule[] }}
             */
            let nodeData = map.nodes[node];

            /**
             * 
             */
            let path = {};

            path.node = node;
            path.nodeData = nodeData;

            // --- Init node data
            ChrRandomizeEventHelper.InitNodeData(path.nodeData);

            if (!path.nodeData.rules) { 
                path.pathEnd = true;
                return path; 
            }

            path.paths = [];
            let nodesDone = [];

            const constructPathOfPath = (rule) => {
                let nextNode = rule.conditionCheckedNode || rule.fixedNode;

                if (rule.type == 'routeSelect')  {

                    for (const selectNode of rule.routeSelect) {
                        path.paths.push(constructPaths(selectNode, node));
                    }

                    return;
                }

                if (rule.type == 'random')  {

                    for (const randomNode of Object.keys(rule.randomNodes)) {
                        if (randomNode) path.paths.push(constructPaths(randomNode, node));
                    }

                    return;
                }

                if (rule.type == 'ifthenelse')  {

                    constructPathOfPath(rule.ifthenelse.then);

                    if (rule.ifthenelse.else) {
                        constructPathOfPath(rule.ifthenelse.else);
                    }

                    return;
                }

                if (!nextNode) {
                    console.debug(rule);
                    throw 'Error reading rule of node ' + node;
                }

                if (!nodesDone.includes(nextNode) && nextNode != nodeFrom) {
                    path.paths.push(constructPaths(nextNode, node));
                    nodesDone.push(nextNode);
                }

                nextNode = rule.conditionFailedNode;

                if (nextNode && !nodesDone.includes(nextNode) && nextNode != nodeFrom) {
                    path.paths.push(constructPaths(nextNode, node));
                    nodesDone.push(nextNode);
                }
            }
            
            for (const rule of path.nodeData.rules) {
                constructPathOfPath(rule);
            }

            return path;
        }

        for (const start of starts) {
            paths.push(constructPaths(start));
        }

        console.debug(starts);
        console.debug(paths);
    }

    let checkMapLayout = () => {
        let nodes = [];

        let checkNode = (path) => {
            nodes.push(path.node);

            if (!path.paths) return;

            for (const nextPath of path.paths) {
                checkNode(nextPath);
            }
        }
        
        for (const path of paths) {
            checkNode(path);
        }

        for (const node in map.nodes) {
            if (!nodes.includes(node)) {
                alert("Error : Node " + node + " cant be reached", 100, 2);
                throw 'unreachable node';
            }
        }
    }

    let makeStartRules = () => {
        return;
        map.startCheckRule = ChrRandomizeEventHelper.CreateStartRules(map, paths);
    }

    let makeMapRouting = () => {
        return;
        for (const path of paths) {
            
            /**
             * 
             * @param {ChrRandomizeEventHelper.PathObject} currentPath 
             */
            let makeRouting = (currentPath) => {
                if (!currentPath.paths) return;
                
                for (const nextPath of currentPath.paths) {

                    ChrRandomizeEventHelper.CreateRandomRules(currentPath, nextPath);

                    makeRouting(nextPath);
                }
            }

            ChrRandomizeEventHelper.CreateRandomRules(null, path);
            makeRouting(path);
        }
    }

    const makeGimmicks = () => {

        let unlockRequired = 0;
        let lastPart = null;

        const abPossible = !!map.enemyRaid;

        for (const part in map.hiddenRoutes) {

            let partRequired = null;

            if (map.hiddenRoutes[part].unlockRules && map.hiddenRoutes[part].unlockRules.mapPartNumber) partRequired = map.hiddenRoutes[part].unlockRules.mapPartNumber - 1;
            if (map.hiddenRoutes[part].unlockRules) {
                const unlockRule = map.hiddenRoutes[part].unlockRules.gimmicks.find(gimmick => gimmick.type == "PartClear");

                if (unlockRule) partRequired = unlockRule.partToClear;
            }

            map.hiddenRoutes[part].unlockRules = ChrRandomizeGimmicks.RandomizeGimmicks("mapPart", mapNumber, {
                partToUnlock: part,
                mapPartRequired : partRequired,
                routeUnlockRequired: unlockRequired
            }, map.nodes, abPossible);

            unlockRequired = part;
            lastPart = partRequired && partRequired > lastPart ? partRequired : lastPart;

            for (var image of map.hiddenRoutes[part].images) {
                image.customName = 'assets/maps/'+eventNumber+'/'+image.name;
            }
        }

        map.debuffRules = ChrRandomizeGimmicks.RandomizeGimmicks("debuff", mapNumber, {
            partToUnlock: lastPart,
            mapPartRequired : lastPart,
            routeUnlockRequired: unlockRequired
        }, map.nodes, abPossible);
    }

    const makeBonuses = () => {

        for (const node in map.nodes) {
            const nodeData = map.nodes[node];
            nodeData.bonuses = [];
        }

        ChrRandomizeBonuses.MakeBonusesFromNodes(paths);
    }

    const initMapData = () => {
        map.mapPreviewImage = `assets/maps/${eventNumber}/${mapNumber}m.png`;
        map.mapImage = `assets/maps/${eventNumber}/${mapNumber}.png`;
    }

    return new Promise((resolve) => {

        initMapData();

        constructMapLayout();

        checkMapLayout();

        makeStartRules();

        makeMapRouting();

        makeGimmicks();

        makeBonuses();
        resolve(map);
    });
}

var LoadElement = function() {
    this.root = $('<div>');
    this.root.addClass("chr-loader");
    this.total = {};
    this.currentProgress = {};

    this.Reset = () => {
        this.root.html(`
    
            <div class="title"></div>

            <div class="text"></div>
            <div class="progress"></div>
            <br>

            <div class="text"></div>
            <div class="progress"></div>
            <br>

            <div class="text"></div>
            <div class="progress"></div>
            <br>

            <div class="text"></div>
            <div class="progress"></div>
            <br>
            
            <div class="text"></div>
            <div class="progress"></div>
            <br>
            
            <div class="text"></div>
            <div class="progress"></div>
            <br>
            
            <div class="text"></div>
            <div class="progress"></div>
            <br>
            
            <div class="text"></div>
            <div class="progress"></div>
            <br>
            
            <div class="text"></div>
            <div class="progress"></div>
            <br>
        
        `);
    }

    this.Reset();

    this.SetTitle = (title) => { this.root.find(".title").html(title); }

    this.SetProgress = (text, percentage, level) => { 
        if (!level) level = 0;
        $(this.root.find(".text")[level]).html(text); 
        $(this.root.find(".progress")[level]).html(percentage + '%'); 
    }

    this.AddProgress = (text, level) => { 
        if (!level) level = 0;

        this.currentProgress[level]++;
        
        this.SetProgress(text, Math.floor(this.currentProgress[level] / this.total[level] * 100), level);
    }

    this.Show = () => { this.root.show(); }
    this.Hide = () => { this.root.hide(); }

    this.Hide();
} 

const loadObject = new LoadElement();
$('body').append(loadObject.root);

let randomizeEventButton = $("<button>Randomize event</button>");

randomizeEventButton.click(() => {
    ChrRandomizeEvent();
});

$("#globalButtons").append(randomizeEventButton);




