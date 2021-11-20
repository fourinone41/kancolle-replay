class ChrDisplayEventInfo {

    constructor () {
        this.root = $(`
        <div>
            <div id="mapButtons"></div>
            <div id="map"></div>
            <div id="comp"></div>
        
        </div>`);
    
        this.Init();
    }

    Comps = {};
    
    Init () {
        $('body').append(this.root);

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
                this.map.LoadMap(50, mapNum + 1);
                this.currentMap = mapNum + 1;
            });

            $("#mapButtons").append(button)
        }
    }

    DisplayComps (mapnum, node) {
        let comps = this.GetComps(mapnum, node);

        let compRoot = $(`<table>`)

        compRoot.append($(`
            <tr>
                <th>Formation</th>
                <th>Type TODO</th>
                <th>AD/AP
                AS/AS+</th>
            </tr>
            `));

        for (const compKey in comps) {
            if (Object.hasOwnProperty.call(comps, compKey)) {
                const comp = comps[compKey];

                compRoot.append(this.DisplayComp(comp, compKey));
            }
        }

        $("#comp").html(compRoot);
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

    DisplayComp(comp, compKey) {
        let line = $("<tr>");

        // --- comp name
        let column = $("<td></td>").append(compKey);
        line.append(column);

        column = $("<td></td>").append(this.GetTableFromComp(comp.c));
        line.append(column);
        
        column = $("<td></td>");
        line.append(column);

        return line;
        
    }

    GetComps(mapnum, node) {
        let mapName = 'E-' + mapnum;

        if (!this.Comps[mapName]) {
            // --- load comps 
            let FILE = localStorage.ch_file;
            this.Comps = JSON.parse(localStorage['ch_basic'+FILE]).event.comps;
        }
        
        let comps = this.Comps[mapName][node];
    
        if (!comps) throw 'Node not found';
    
        return comps;
    }
}

ChrDisplayEventInfo.MAP_COUNT = 7;