var CHDATA;
var MAPNUM;
var WORLD;

class ChrDisplayEventInfo {

    constructor () {
        this.root = $(`
        <div>
            <div id="mapButtons"></div>

            <div id="pageContent">
                <div id="mapInfo">
                    <div id="mapInfoMapInfo"></div>
                </div>
                <div id="mapAndCompsContainer">
                    <div id="map"></div>
                    <div id="comp"></div>
                </div>
                <div class="foldable-element" id="routing">
                    <div class="foldable-element-title mapInfoTitle">Routing infos</div>
                    <div id="routingContainer"></div>
                </div>
            </div>
        
        </div>`);
    
        this.Init();
    }

    Comps = {};

    selectedDiff = null;
    
    Init () {
        $('body').append(this.root);

        // --- load comps 
        let FILE = localStorage.ch_file;
        this.Comps = JSON.parse(localStorage['ch_basic'+FILE]).event.comps;
        CHDATA = JSON.parse(localStorage['ch_basic'+FILE]);
        this.Worlds =  JSON.parse(localStorage['ch_basic'+FILE]).maps;

        // --- Map 
        /**
         * @type {ChrMap}
         */
        this.map = new ChrMap($("#map")[0]);

        this.map.OnNodeClick = (letter) => {
            this.DisplayComps(this.currentMap, letter);
        }

        // --- Map buttons
        for (let mapNum = 0; mapNum < ChrDisplayEventInfo.MAP_COUNT; mapNum++) {
            let button = $(`<div class="mapButton">E-${mapNum + 1}</div>`);

            button.click(() => {
                this.currentMap = mapNum + 1;
                MAPNUM = this.currentMap;
                WORLD = this.GetCurrentWorld();
                
                this.map.LoadMap(this.GetCurrentWorld(), mapNum + 1);

                // --- Display map infos
                this.DisplayMapInfos();

                // --- Routing
                this.DisplayRouting();

                this.InitFoldableElement();
            });

            $("#mapButtons").append(button)
        }
    }

    GetCurrentWorld() {
        return this.Worlds[this.currentMap].world;
    }

    GetRoutingRules() {
        let rules = {};

        if (MAPDATA[this.GetCurrentWorld()].maps[this.currentMap].startCheckRule) {
            rules.Start = {
                rules: MAPDATA[this.GetCurrentWorld()].maps[this.currentMap].startCheckRule
            };
        }

        let nodes = MAPDATA[this.GetCurrentWorld()].maps[this.currentMap].nodes;

        for (const node in nodes) {
            rules[node] = nodes[node];
        }

        return rules;
    }

    DisplayRouting () {
        let nodes = this.GetRoutingRules();

        let routingEl = $("<table>");
        routingEl.addClass("routingTable foldable-element");

        routingEl.append($(`
        <tr>
            <th>Node</th>
            <th>Routing</th>
        </tr>`));

        //--- nodes routing
        for (const nodeKey in nodes) {
            let rules = nodes[nodeKey].rules;

            if (!rules) continue;

            let line = $("<tr>");

            line.append(`<td class="node-battle">${nodeKey}</td>`)

                line.append(this.MakeRoutingEl(rules));

            routingEl.append(line);
        }

        $("#routingContainer").html(routingEl);
    }

    MakeRoutingEl(rules) {
        let root = $("<td>");

        let nodeRulesTranslated = {};
        
        /**
        * @type {ChRule}
        */
        let rule;

        for (rule of rules) {
            switch (rule.type) {
                case "fixed":
                    nodeRulesTranslated[rule.fixedNode] = rule.getDescription();
                    break;

                case "random": 
                    let descriptions = rule.GetRandomDescription();

                    for (const node in descriptions) {
                        if (!nodeRulesTranslated[node]) nodeRulesTranslated[node] = "";

                        nodeRulesTranslated[node] += descriptions[node];
                        nodeRulesTranslated[node] += "<br>";
                    }

                    break;
            
                default:
                    let description = rule.getDescription();

                    if (typeof(description) == "string") {
                        if (!nodeRulesTranslated[rule.conditionCheckedNode]) nodeRulesTranslated[rule.conditionCheckedNode] = "";
                        if (rule.conditionFailedNode && !nodeRulesTranslated[rule.conditionFailedNode]) nodeRulesTranslated[rule.conditionFailedNode] = "";

                        nodeRulesTranslated[rule.conditionCheckedNode] += description;
                        nodeRulesTranslated[rule.conditionCheckedNode] += "<br>";
                    } 
                    else {
                        for (const node in description) {
                            if (!nodeRulesTranslated[node]) nodeRulesTranslated[node] = "";
    
                            nodeRulesTranslated[node] += description[node];
                            nodeRulesTranslated[node] += "<br>";
                        }
                    }


                    break;
            }
        }

        for (const nodeKey in nodeRulesTranslated) {
            let routingLine = $("<div>");
            routingLine.addClass("routingLine");

            let description = nodeRulesTranslated[nodeKey];
            if (!description) description = "Other requirements not met";

            routingLine.append($(`
                <div class="node-battle">${nodeKey}</div>
                <div>${description}</div>
            `));

            root.append(routingLine);
        }

        return root;
    }
    
    DisplayComps (mapnum, node) {
        let comps = this.GetComps(mapnum, node);

        let compRoot = $(`<table>`)

        let nodeData = MAPDATA[this.GetCurrentWorld()].maps[mapnum].nodes[node];

        let nodeInfos = [];
        
        if (nodeData.night || (Object.values(comps).map(x => x.NB ? 1 : 0).includes(1))) {
            nodeInfos.push(`<span class="yasen-text">Night node</span>`);
        }

        if (nodeData.distance) {
            nodeInfos.push(`Node range : ${nodeData.distance ? nodeData.distance : 0}`);
        }

        compRoot.append($(`
            <tr>
                <th>Formation</th>
                <th>${nodeInfos.join(' - ')}</th>
                <th>AD/AP<br>AS/AS+</th>
            </tr>
            `));

        let compsKeys = null;
        let compsKeysFinal = null;
        
        if (this.selectedDiff) {
            let nodeData = MAPDATA[this.GetCurrentWorld()].maps[mapnum].nodes[node];

            compsKeys = nodeData.compDiff[this.selectedDiff];
            if (nodeData.compDiffF) {
                compsKeys = compsKeys.concat(nodeData.compDiffF[this.selectedDiff]);
                compsKeysFinal = nodeData.compDiffF[this.selectedDiff];
            }
        }

        for (const compKey in comps) {
            if (compsKeys && !compsKeys.includes(compKey)) continue;

            if (Object.hasOwnProperty.call(comps, compKey)) {
                const comp = comps[compKey];

                compRoot.append(this.DisplayComp(comp, compKey, compsKeysFinal && compsKeysFinal.includes(compKey)));
            }
        }

        $("#comp").html("<div>");

        if (MAPDATA[this.GetCurrentWorld()].diffMode == 1 || MAPDATA[this.GetCurrentWorld()].diffMode == 2) {
            
            let diffButtons = $("<div>");

            for (const diff of MAPDATA[this.GetCurrentWorld()].allowDiffs) {

                let diffTexte = this.GetDiffText(diff);                

                let classes = `diff-button` + (this.selectedDiff == diff ? ` diff-button-selected` : '');
                let button = $(`<button class="${classes}">${diffTexte}</button>`);

                button.click(() => { this.selectedDiff = diff; this.DisplayComps(mapnum, node) });

                diffButtons.append(button)
            }

            $("#comp").append(diffButtons);
        }

        $("#comp").append(compRoot);
    }

    GetDiffText(diff) {
        switch (diff) {
            case 4:
                return "Casual";

            case 1:
                return "Easy";
        
            case 2:
                return "Medium";
                
            case 3:
                return "Hard";
            
            default: 
                return "???";
        }
    }

    STAT_KEYS = ["HP", "FP", "TP", "AA", "AR"];

    GetTableFromComp(ships) {

        let table = $("<div>");
        table.addClass("comp-table");

        for (const shipId of ships) {
            let column = $(`<div>`);
            column.addClass("ship-stat-column");

            // --- Ship image 
            let imgEl = $(`<img>`);
    
            imgEl.attr("src", `assets/icons/${SHIPDATA[shipId].image}`);

            column.append(imgEl);

            for (const statKey of this.STAT_KEYS) {
                let statEl = $(`<div>`);
    
                statEl.addClass(`stat-line-${statKey}`);
                statEl.append(`${statKey}: ${SHIPDATA[shipId][statKey]}`);

                column.append(statEl);
            }

            table.append(column);
        }

        return table;
    }

    GetFormation(formation) {
        if (this.FORMATIONS_NAMES[formation]) return this.FORMATIONS_NAMES[formation];

        return "unknown";
    }

    FORMATIONS_NAMES = {
        1: "Line ahead",
        2: "Double line",
        3: "Diamond",
        4: "Echelon",
        5: "Line abreast",
        6: "Vanguard", 

        11: "Cruising Formation 1 (Combined LA)", 
        12: "Cruising Formation 2 (Combined DL)", 
        13: "Cruising Formation 3 (Combined diamond)", 
        14: "Cruising Formation 4 (Combined LAb)",

        '111': "Cruising Formation 1 <br>(Combined LAb)",
        '111E': "Cruising Formation 1 <br>(Combined LAb)",
        '112': "Cruising Formation 2 <br>(Combined DL)",
        '112E': "Cruising Formation 2 <br>(Combined DL)",
        '113': "Cruising Formation 3 <br>(Combined diamond)",
        '113E': "Cruising Formation 3 <br>(Combined diamond)",
        '114': "Cruising Formation 4 <br>(Combined LA)",
        '114E': "Cruising Formation 4 <br>(Combined LA)",

        '211': "Cruising Formation 1 <br>(Combined LAb)",     
        '211E': "Cruising Formation 1 <br>(Combined LAb)",
        '212': "Cruising Formation 2 <br>(Combined DL)",
        '212E': "Cruising Formation 2 <br>(Combined DL)",
        '213': "Cruising Formation 3 <br>(Combined diamond)",
        '213E': "Cruising Formation 3 <br>(Combined diamond)",
        '214': "Cruising Formation 4 <br>(Combined LA)",
        '214E': "Cruising Formation 4 <br>(Combined LA)",

        '311': "Cruising Formation 1 <br>(Combined LAb)",     
        '311E': "Cruising Formation 1 <br>(Combined LAb)",
        '312': "Cruising Formation 2 <br>(Combined DL)",
        '312E': "Cruising Formation 2 <br>(Combined DL)",
        '313': "Cruising Formation 3 <br>(Combined diamond)",
        '313E': "Cruising Formation 3 <br>(Combined diamond)",
        '314': "Cruising Formation 4 <br>(Combined LA)",
        '314E': "Cruising Formation 4 <br>(Combined LA)",
    };

    DisplayComp(comp, compKey, isLastDance) {
        let line = $("<tr>");

        // --- comp name
        let column = $("<td></td>").append(compKey);
        column.append("<br>");
        column.append(this.GetFormation(comp.f));

        if (isLastDance) { 
            column.append(`<br><span class="last-dance-text">Final</span>`)
        }

        line.append(column);

        column = $("<td>").append(this.GetTableFromComp(comp.c));
        if (comp.ce) {
            column.append(this.GetTableFromComp(comp.ce));
        }

        line.append(column);
        
        column = $(`<td>${this.GetAS(comp)}</td>`);
        line.append(column);

        return line;
        
    }

    GetComps(mapnum, node) {
        let mapName = 'E-' + mapnum;
        
        let comps = this.Comps[mapName][node];
    
        if (!comps) throw 'Node not found';
    
        return comps;
    }

    GetAS(compd) {
        var enemies = [];
		var overrideStats = (MAPDATA[this.GetCurrentWorld()].overrideStats)? MAPDATA[this.GetCurrentWorld()].overrideStats[sid] : null;

        for (var i=0; i<compd.c.length; i++) {
            var sid = compd.c[i];
			enemies.push(createDefaultShip(sid, overrideStats));
        }

        let fleet = new Fleet(1);
        fleet.loadShips(enemies);

        let ap = fleet.fleetAirPower(false, false);

        return `${Math.floor(ap/3)} / ${Math.floor(ap/1.5)}<br>${Math.floor(ap*1.5)} / ${Math.floor(ap*3)}`;
    }

    
    InitFoldableElement() {
        $(".foldable-element-title").off('click');

        $(".foldable-element-title").click((e) => {

            let element = $(e.target);

            if (element.hasClass('foldable-element-hidden')) {
                element.removeClass('foldable-element-hidden');

                let parent = element.parent();
                parent.find(":not(.foldable-element-title)").show();
            } else {
                element.addClass('foldable-element-hidden');
                
                let parent = element.parent();
                parent.find(":not(.foldable-element-title)").hide();
            }
        });
    }

    //#region Map infos
    DisplayMapInfos() {
        let map = MAPDATA[this.GetCurrentWorld()].maps[this.currentMap];

        let mapInfos = map.mapInfo ? map.mapInfo : "";

        if (mapInfos) {
            mapInfos = $(`<div class="foldable-element"><div class="mapInfoTitle foldable-element-title">Informations about this map :</div><div class="mapInfoContent">${mapInfos}</div></div>`);
        }

        $("#mapInfoMapInfo").html(mapInfos);

        // --- Historical routing

        /**
         * @type {ChRule[]}
         */
        let historicalRoutingRules = [];
        let histoGroups = [];

        /**
         * 
         * @param {ChRule} rule 
         */
        function getHistoGroupes (rule) {
            if (rule.type == 'shipIds' && !histoGroups.includes(rule.shipsIdsListName) && rule.historicalGroups) {
                historicalRoutingRules.push(rule);
                histoGroups.push(rule.shipsIdsListName);
            }

            if (rule.type == 'multiRules') {
                for (const rule2 of rule.rules) {
                    getHistoGroupes(rule2);
                }
            }
        }

        for (const nodeKey in map.nodes) {
            let node =  map.nodes[nodeKey];
            if (!node.rules) continue;

            for (const rule of node.rules) {
                getHistoGroupes(rule);
            }
        }

        if (historicalRoutingRules.length) {
            let groupsInfo = $('<div>').addClass("foldable-element");

            groupsInfo.append($(`<div class="mapInfoTitle foldable-element-title">Historical groups for routing :</div>`));

            let groups = $("<div>").addClass("mapInfoContent");

            for (const rule of historicalRoutingRules) {
                let group = $("<div>");

                let groupTitle = $("<div>").addClass("mapInfoContentGroupTitle");
                groupTitle.append(rule.shipsIdsListName)

                let groupContainer = $("<div>").addClass("mapInfoContentGroupContainer");

                for (const shipMid of rule.getShipIds()) {
                    let shipImg = $("<img>");
                    shipImg.attr("src", 'assets/icons/' + SHIPDATA[shipMid].image);

                    groupContainer.append(shipImg);
                }

                group.append(groupTitle);
                group.append(groupContainer);

                groups.append(group);
            }

            groupsInfo.append(groups);

            $("#mapInfoMapInfo").append(groupsInfo);
        }

        if (map.debuffRules) {
            $("#mapInfoMapInfo").append(this.DisplayDebuffInfos(map.debuffRules, map, MAPDATA[this.GetCurrentWorld()]));
        }
    } 

    /**
     * 
     * @param {ChGimmickList} rules 
     * @returns 
     */
    DisplayDebuffInfos(rules, map, event) {

        let diffs = event.allowDiffs ? event.allowDiffs : [4,1,2,3];

        let debuffInfoRoot = $('<div>').addClass("foldable-element");
        
        debuffInfoRoot.append($(`<div class="mapInfoTitle foldable-element-title">Debuff</div>`));

        let debuffInfoContent = $("<div>").addClass("mapInfoContent");

        if (rules.additionnalParameters && rules.additionnalParameters.numberOfStepRequired) {
            debuffInfoContent.append(`This map can be debuffed after completing ${rules.additionnalParameters.numberOfStepRequired} of the following steps :`);
        } else {
            debuffInfoContent.append("This map can be debuffed after completing the following steps :");
        }

        let debuffInfoTable = $('<table>').addClass('gimmick-table');

        let debuffInfoColumns = $('<tr>');
        debuffInfoColumns.append($(`<th>Difficulties</th>`));

        for (const diff of diffs) {
            debuffInfoColumns.append($(`<th>${this.GetDiffText(diff)}</th>`))
        }

        debuffInfoTable.append(debuffInfoColumns);

        // --- Map part
        if (rules.mapPartNumber) {
            let debuffLine = $("<tr>");

            let descTd = $('<td>').attr('colspan', 5);

            descTd.append(`Reach part ${rules.mapPartNumber}`);
            debuffLine.append(descTd);

            if (rules.mapPartNumber >= CHDATA.event.maps[rules.mapNum].part) {
                descTd.addClass('debuff-step-done');
            }
            
            debuffInfoTable.append(debuffLine);
        }

        for (const rule of rules.gimmicks) {
            let debuffLine = $("<tr>");

            let nodeName = rule.node;

            // --- Case of mapnum defined in each rule (eg spring 16 with multi map debuff)
            if (!rules.mapNum) {
                nodeName = `E-${rule.mapnum} ${rule.node}`
            }

            debuffLine.append($(`<td>${nodeName}</td>`));

            let previousDesc = ""
            let descTd = $('<td>');
            let colSpan = 1;

            for (let diff of diffs) {

                let desc = rule.getDescription(diff);

                if (desc.length < 20 || desc != previousDesc) {
                    descTd = $('<td>');
                    descTd.append(desc);
                    debuffLine.append(descTd);

                    if (rule.gimmickDone()) {
                        descTd.addClass('debuff-step-done');
                    }
                } else {
                    descTd.attr('colspan', ++colSpan);
                }
                
                previousDesc = desc;
            }
            
            debuffInfoTable.append(debuffLine);
        }

        debuffInfoContent.append(debuffInfoTable);
        debuffInfoRoot.append(debuffInfoContent);

        debuffInfoContent.append('Debuff effects : ')

        let debuffEffects = $('<ul>').addClass('debuff-effects');

        // --- Debuff amount ?
        for (const node in map.nodes) {

            if (!map.nodes[node].debuffAmount) continue;

            let debuffAmount = map.nodes[node].debuffAmount;

            if (typeof debuffAmount === 'object') {                
                for (const mid in debuffAmount) {
                    debuffEffects.append(`<li>On node ${node}, any ${SHIPDATA[mid].name} will receive an armor break of ${debuffAmount[mid]}</li>`);
                }
            } else {
                debuffEffects.append(`<li>On node ${node}, the flagship will receive an armor break of ${debuffAmount}</li>`);
            }
        }
            
        debuffInfoContent.append(debuffEffects);

        return debuffInfoRoot;
    }
    //#endregion
}

ChrDisplayEventInfo.MAP_COUNT = 7;

