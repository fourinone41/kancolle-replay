class ChrMakeEvent {
    constructor (root) {
        this.root = $("<div>");
        
        this.root.append(`
            <div id="mapButtons"></div>

            <div id="globalButtons">
            </div>

            <div id="pageContent">
                <div id="mapInfo">
                    <div class="edit" label="Map number" dataField="name"></div>
                    <div class="edit" label="Name" dataField="nameT"></div>

                    <div class="edit" type="fleetTypes" label="Fleet types" dataField="fleetTypes"></div>

                    <div class="edit" type="bgm" label="Map BGM" dataField="bgmMap"></div>
                    <div class="edit" type="bgm" label="Day battle BGM" dataField="bgmDN"></div>
                    <div class="edit" type="bgm" label="Night battle BGM" dataField="bgmNN"></div>
                    <div class="edit" type="bgm" label="Boss day battle BGM" dataField="bgmDB"></div>
                    <div class="edit" type="bgm" label="Boss night battle BGM" dataField="bgmNB"></div>

                    <div class="edit" type="array" label="Boss nodes" dataField="bossnode"></div>

                    <div class="edit" label="BGM overrides" dataField="overrideBGM"></div>

                    <div class="edit" type="locks" label="Locks" dataField="giveLock"></div>
                    <div class="edit" type="locks" label="Banned locks" dataField="checkLock"></div>
                    <div class="edit" label="Handle special locks" dataField="lockSpecial"></div>

                    <div class="edit" label="Number of LBAS" dataField="lbas"></div>
                    <div class="edit" label="Number of sortie LBAS" dataField="lbasSortie"></div>

                    <div class="edit" type="parts" label="Parts" dataField="parts"></div>

                    <div class="edit" type="unlocks" label="Unlocks" dataField="hiddenRoutes"></div>

                    <div class="edit" label="Rewards" dataField="reward"></div>

                    <div class="edit" type="gimmicks" label="Debuff" dataField="debuffRules"></div>

                    <div class="edit" label="Start check" dataField="startCheckRule"></div>
                </div>
                <div id="mapAndCompsContainer">
                    <div id="partButtons"></div>
                    <div id="map"></div>
                    <div id="routing"></div>
                    <div id="comp"></div>
                </div>
            </div>
        `);

        root.append(this.root);
    };

    InitMapButtons() {
        // --- Map buttons
        for (let mapNum = 0; mapNum < ChrMakeEvent.MAP_COUNT; mapNum++) {
            let button = $(`<div class="mapButton">E-${mapNum + 1}</div>`);

            button.click(() => {
                this.ChangeMap(mapNum + 1);
            });

            this.root.find("#mapButtons").append(button)
        }
    }

    ChangeMap(mapNumber) {
        //this.currentMap = new ChMapData();
        this.currentMap = MAPDATA[50].maps[mapNumber];

        // --- Load map data
        this.LoadEditors();
    }

    LoadEditors() {
        let elements = this.root.find("#mapInfo").find('.edit');

        elements.each((index, element) => {
            element = $(element);
            element.html("");

            let dataField = element.attr('dataField');

            let type = element.attr('type');

            let containerLabel = $('<div>');
            containerLabel.append(element.attr('label') + ' : ');
            containerLabel.addClass('edit-label');
            element.append(containerLabel);

            let containerValue = $('<div>');
            element.append(containerValue);
            
            /**
             * @type {ChrMakeEvent.Editor}
             */
            let editor;

            switch (type) {
                default:
                    editor = new ChrMakeEvent.TextEditor(dataField, containerValue);
                    break;
                case "fleetTypes": 
                    editor = new ChrMakeEvent.FleetTypeEditor(dataField, containerValue);
                    break;
                case "bgm": 
                    editor = new ChrMakeEvent.BGMEditor(dataField, containerValue);
                    break;
                case "array": 
                    editor = new ChrMakeEvent.ArrayEditor(dataField, containerValue);
                    break;
                case "locks": 
                    editor = new ChrMakeEvent.LocksEditor(dataField, containerValue);
                    break;
                case "parts": 
                    editor = new ChrMakeEvent.PartsEditor(dataField, containerValue);
                    break;
                case "gimmicks": 
                    editor = new ChrMakeEvent.GimmicksEditor(dataField, containerValue);
                    break;
                    
                case "unlocks": 
                    editor = new ChrMakeEvent.UnlocksEditor(dataField, containerValue);
                    break;
            }

            editor.SetDataSource(this.currentMap);
        });
    }
} 


ChrMakeEvent.Editor = class {
    constructor (dataField, container) {
        this.dataField = dataField;
        this.container = container;
    }

    SetDataSource (dataSource) {
        
    }

    Init() {
        
    }
}

ChrMakeEvent.TextEditor = class extends ChrMakeEvent.Editor {
    constructor (dataField, container) {
        super(dataField, container);
        this.root = $('<div>');
    }

    SetDataSource (dataSource) {
        this.dataSource = dataSource;
        this.Init();
    }

    Init() {
        this.root.html(this.dataSource[this.dataField]);

        this.container.html(this.root);
    }
}

ChrMakeEvent.FleetTypeEditor = class extends ChrMakeEvent.Editor {
    constructor (dataField, container) {
        super(dataField, container);
        this.root = $('<div>');
    }

    SetDataSource (dataSource) {
        this.dataSource = dataSource;
        this.Init();
    }

    Init() {
        let fleets = this.dataSource[this.dataField];
        let fleetsName = [];

        for (const fleetType of fleets) {
            fleetsName.push(ChrDisplayEventInfo.GetFleetTypeAsString(fleetType));
        }

        this.root.html(fleetsName.join(' / '));

        this.container.html(this.root);
    }
}

ChrMakeEvent.BGMEditor = class extends ChrMakeEvent.Editor {
    constructor (dataField, container) {
        super(dataField, container);
        this.root = $('<div>');
    }

    SetDataSource (dataSource) {
        this.dataSource = dataSource;
        this.Init();
    }

    Init() {
        this.root.html(this.dataSource[this.dataField]);

        let playButton = $(`<button class="play-bgm" action="none">Play</button>`);
        playButton.click(() => {
            SM.playBGM(this.dataSource[this.dataField]);
        })
        this.root.append(playButton);

        this.container.html(this.root);
    }
}

ChrMakeEvent.ArrayEditor = class extends ChrMakeEvent.Editor {
    constructor (dataField, container) {
        super(dataField, container);
        this.root = $('<div>');
    }

    SetDataSource (dataSource) {
        this.dataSource = dataSource;
        this.Init();
    }

    Init() {
        this.root.html(this.dataSource[this.dataField].join(', '));

        this.container.html(this.root);
    }
}

ChrMakeEvent.LocksEditor = class extends ChrMakeEvent.Editor {
    constructor (dataField, container) {
        super(dataField, container);
        this.root = $('<div>');
    }

    SetDataSource (dataSource) {
        this.dataSource = dataSource;
        this.Init();
    }

    Init() {
        if (Array.isArray(this.dataSource[this.dataField])) this.root.html(this.dataSource[this.dataField].map(x => `<img src="assets/maps/lock${x}.png"/>`).join(' '));
        else this.root.html(`<img src="assets/maps/lock${this.dataSource[this.dataField]}.png"/>`);

        this.container.html(this.root);
    }
}

ChrMakeEvent.PartsEditor = class extends ChrMakeEvent.Editor {
    constructor (dataField, container) {
        super(dataField, container);
        this.root = $('<div>');
    }

    SetDataSource (dataSource) {
        this.dataSource = dataSource;
        this.Init();
    }

    Init() {
        let element = $("<div>");

        for (const part in this.dataSource[this.dataField]) {
            const partData = this.dataSource[this.dataField][part];

            let finalHP = [];
            let partHP = [];

            for (const diff of [4,1,2,3]) {
                if (!partData.maphp) continue;
                if (!partData.maphp[diff]) continue;

                partHP.push(partData.maphp[diff][1]);

                if (!partData.finalhp) continue;
                if (!partData.finalhp[diff]) continue;

                finalHP.push(partData.finalhp[diff]);
            }

            element.append(`
                <div class="map-part-edit">
                    Part ${part} 
                    <br>
                    Boss node : ${partData.currentBoss}<br>
                    ${partData.transport ? `Transport node : ${partData.transport}<br>` : ""}
                    Map HP/TP : ${partHP.join(' / ')}<br>
                    Last dance HP/TP : ${finalHP.join(' / ')}<br>
                </div>`
            )
        }

        this.root.html(element);
        this.container.html(this.root);
    }
}

ChrMakeEvent.GimmicksEditor = class extends ChrMakeEvent.Editor {
    constructor (dataField, container) {
        super(dataField, container);
        this.root = $('<div>');
    }

    SetDataSource (dataSource) {
        this.dataSource = dataSource;
        this.Init();
    }

    Init() {

        /**
         * @type {ChGimmickList}
         */
        let gimmicks = this.dataSource[this.dataField];

        if (!gimmicks) {
            this.root.html("None");

            this.container.html(this.root);

            return;
        }

        let gimmickInfos = $(`
            <div>
                ${gimmicks.mapPartNumber ? `Part ${gimmicks.mapPartNumber} required <br>` : ''}
                ${gimmicks.additionnalParameters.lastDanceOnly ? 'Last dance only<br>': ''}
                Number of steps required : ${gimmicks.additionnalParameters.numberOfStepRequired ? gimmicks.additionnalParameters.numberOfStepRequired : gimmicks.gimmicks.length} / ${gimmicks.gimmicks.length}<br>
                ${gimmicks.additionnalParameters.routeUnlockRequired ? 'Unlock '+ gimmicks.additionnalParameters.routeUnlockRequired + ' must be done before<br>': ''}
            </div>
        `);

        this.root.html(gimmickInfos);

        // --- Gimmick steps
        for (const gimmick of gimmicks.gimmicks) {
            let timeRequiredPerDiff = [];
            let rankRequiredPerDiff = [];

            for (const diff of [4,1,2,3]) {
                if (!gimmick.timesRequiredPerDiff) continue;

                if (!gimmick.timesRequiredPerDiff[diff]) timeRequiredPerDiff.push('-');
                else timeRequiredPerDiff.push(gimmick.timesRequiredPerDiff[diff]);

                if (!gimmick.ranksRequiredPerDiff) continue;

                if (!gimmick.ranksRequiredPerDiff[diff]) rankRequiredPerDiff.push('-');
                else rankRequiredPerDiff.push(gimmick.ranksRequiredPerDiff[diff]);
            }

            let desc;

            switch (gimmick.type) {
                case "ReachNode":
                    desc = 'Reach node';
                    break;
            
                case "AirState":
                    desc = 'Air state';
                    break;

                    
                case "PartClear":
                    desc = 'Clear part of map';
                    break;

                default: 
                    desc = 'Battle rank';
                    break;
            }

            gimmickInfos = $(`
                <div class="gimmick-edit">
                    Node : ${gimmick.node}<br>
                    Type : ${desc}<br>
                    Number of time required per diff : ${timeRequiredPerDiff.join(' / ')}<br>
                    ${gimmick.ranksRequiredPerDiff ? `Rank required : ${rankRequiredPerDiff.join(' / ')}<br>` : ''}
                    ${gimmick.partToClear ? `Part to clear : ${gimmick.partToClear}<br>` : ''}
                    ${gimmick.fleetType ? gimmick.fleetType.map(x => ChrDisplayEventInfo.GetFleetTypeAsString(x)).join(' or ') + "<br>" : ''}
                    
                </div>
            `);
            
            this.root.append(gimmickInfos);
        }

        this.container.html(this.root);
    }
}

ChrMakeEvent.UnlocksEditor = class extends ChrMakeEvent.Editor {
    constructor (dataField, container) {
        super(dataField, container);
        this.root = $('<div>');
    }

    SetDataSource (dataSource) {
        this.dataSource = dataSource;
        this.Init();
    }

    Init() {
        this.root.html("");
        for (const unlockNumber in this.dataSource[this.dataField]) {
            
            let element = $(`
                <div class="unlock-edit">
                    Unlock ${unlockNumber}

                    <div class="gimmicks-edit"></div>
                </div>
            `)

            let container = element.find(".gimmicks-edit");

            let edit = new ChrMakeEvent.GimmicksEditor("unlockRules", container);
            edit.SetDataSource(this.dataSource[this.dataField][unlockNumber]);

            this.root.append(element);
        }

        this.container.html(this.root);
    }
}

ChrMakeEvent.MAP_COUNT = 7;
var SM = new SoundManager();