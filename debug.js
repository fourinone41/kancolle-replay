const chrClearLocks = () => {
    for (const shipKey in CHDATA.ships) {
        delete CHDATA.ships[shipKey].lock;
    }
    InitUI();
}

const CHEATS = true;


if (CHEATS) {
    setTimeout(() => {
        chrCopySupports();
    }, 2000);
}

const chrCopySupports = () => {

    for (const shipKey in CHDATA.fleets[4]) {
        CHDATA.fleets[3][shipKey] = CHDATA.fleets[4][shipKey];
    }

    InitUI();
}

const chrRandomizeCurrentMapBonuses = () => {
    
    const map = MAPDATA[WORLD].maps[MAPNUM];
    const paths = [];

    let constructMapLayout = () => {

        const starts = [];

        for (const node in map.nodes) {
            if (node.includes('Start')) starts.push(node);
        }
    
        let constructPaths = (node, nodeFrom) => {

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

    }

    constructMapLayout();

    for (const node in map.nodes) {
        const nodeData = map.nodes[node];
        nodeData.bonuses = [];
    }

    ChrRandomizeBonuses.MakeBonusesFromNodes(paths);

    MAPDATA[97].saveMapData(MAPNUM, map)
}

