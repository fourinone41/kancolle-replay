let makeEventClass = new ChrMakeEvent($('body'));

let events = [];

checkEvents = () => {

    for (const event of events) {
        event();
    }

    events = [];

    setTimeout(() => {
        checkEvents();
    }, 80);
}

setTimeout(() => {
    checkEvents();
}, 80);

const FILE = localStorage.ch_file;
var basic = JSON.parse(localStorage['ch_basic'+FILE]);
var CHDATA = JSON.parse(localStorage['ch_data'+FILE]);

makeEventClass.InitMapButtons();
makeEventClass.ChangeMap(1);

function ChrRandomizeEvent() {
    ChrRandomizeMap(basic.maps[1].world, 1).then((e1) => {
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

    return;
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
    
    events.push(() => { loadObject.Show(); });

    events.push(() => {loadObject.Reset()});
    events.push(() => {loadObject.SetTitle("Randomizing maps")});

    events.push(() => {loadObject.total[0] = 7; });
    events.push(() => {loadObject.currentProgress[0] = mapNumber - 1; });
    
    events.push(() => { loadObject.AddProgress("Randomizing E" + mapNumber + " ... ", 0); });
    
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
                events.push(() => { loadObject.SetProgress("Error : Node " + node + " cant be reached", 100, 2); });
                throw 'unreachable node';
            }
        }
    }

    let makeStartRules = () => {
        map.startCheckRule = ChrRandomizeEventHelper.CreateStartRules(map, paths);
    }

    let makeMapRouting = () => {

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

        let unlockRequired = null;
        let lastPart = null;

        const abPossible = !!map.enemyRaid;

        for (const part in map.hiddenRoutes) {

            let partRequired = null;

            if (map.hiddenRoutes[part].unlockRules && map.hiddenRoutes[part].unlockRules.mapPartNumber) partRequired = map.hiddenRoutes[part].unlockRules.mapPartNumber - 1;
            if (map.hiddenRoutes[part].unlockRules) {
                const unlockRule = map.hiddenRoutes[part].unlockRules.gimmicks.find(gimmick => gimmick.type == "PartClear");

                if (unlockRule) partRequired = unlockRule.additionnalParameters.partToClear;
            }

            map.hiddenRoutes[part].unlockRules = ChrRandomizeGimmicks.RandomizeGimmicks("mapPart", mapNumber, {
                partToUnlock: part,
                mapPartRequired : partRequired,
                routeUnlockRequired: unlockRequired
            }, map.nodes, abPossible);

            unlockRequired = part;
            lastPart = partRequired && partRequired > lastPart ? partRequired : lastPart;
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

    const delay = 100;

    return new Promise((resolve) => {

        events.push(() => { loadObject.SetProgress("Constructing map layout ... ", 0, 1); });
        setTimeout(() => {
            constructMapLayout();
            events.push(() => { loadObject.SetProgress("Map layout constructed ", 100, 1); });
            events.push(() => { loadObject.SetProgress("Checking map layout ... ", 0, 2); });
    
            setTimeout(() => {
                checkMapLayout();
                events.push(() => { loadObject.SetProgress("Map layout checked", 100, 2); });
                events.push(() => { loadObject.SetProgress("Making Start rules", 0, 3); });
                
                    setTimeout(() => {
                        makeStartRules();
                        events.push(() => { loadObject.SetProgress("Start rules ready", 0, 3); });
                        events.push(() => { loadObject.SetProgress("Making routing", 10, 3); });

                        setTimeout(() => {
                            makeMapRouting();
                            events.push(() => { loadObject.SetProgress("Routing complete", 100, 3); });
                            events.push(() => { loadObject.SetProgress("Creating gimmicks", 100, 3); });

                            setTimeout(() => {
                                makeGimmicks();
                                events.push(() => { loadObject.SetProgress("Gimmicks ready", 100, 3); });
                                events.push(() => { loadObject.SetProgress("Creating bonuses", 100, 3); });
                                
                                setTimeout(() => {
                                    makeBonuses();
                                    events.push(() => { loadObject.SetProgress("Bonuses ready", 100, 3); });
                                    resolve(map);
                                }, delay);
                            }, delay);
    
                        }, delay);

                    }, delay);

            }, delay);
        }, delay);
    })
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




