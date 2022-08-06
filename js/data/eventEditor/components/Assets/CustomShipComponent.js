const CustomShipComponent = {
    props: ['shipData'],

    data: () => ({
        rangeItemList: [
            { key: 0, display: "None" },
            { key: 1, display: "Short" },
            { key: 2, display: "Medium" },
            { key: 3, display: "Long" },
            { key: 4, display: "V.Long" },
            { key: 5, display: "V.Long+" },
        ],
        
        shipTypeList: COMMON.SHIP_TYPES.filter(x => !x.notReal),
        
        shipClassItemList: COMMON.getShipClasses(),
        
        speedItemList: [
            { key: 0, display: "None" },
            { key: 5, display: "Slow" },
            { key: 10, display: "Fast" },
            { key: 15, display: "Fast+" },
            { key: 20, display: "Fastest" },
        ],

        installTypeItemList: [
            { key: 0, display: "Not an installation" },
            { key: 1, display: "Soft" },
            { key: 2, display: "Artillery imp" },
            { key: 3, display: "Supply depot" },
            { key: 4, display: "Isolated island" },
            { key: 5, display: "Isolated island (northernmost)" },
            { key: 6, display: "Harbour (Summer version)" },
        ]
    }),

    computed: {
        

        previousShip() {
            return {
                mid: this.shipData.prev,
            }
        },

        nextShip() {
            return {
                mid: this.shipData.prev,
            }
        },
    },

    methods: {
        setPreviousShip() {
            this.shipData.prev = this.previousShip.mid;
            COMMON.reloadShip(this.shipData.id);
        },
        deletePreviousShip() {
            this.shipData.prev = 0;
            COMMON.reloadShip(this.shipData.id);
        },
        
        playVoice(bgm) {
            COMMON.SOUND_MANAGER.playBGM(bgm, 1, true);
        },
    },
    
    watch: {
        
    },

    template: `
    
        <div class="editor-group">
            <table>

                <tr>
                    <td>ID</td>
                    <td><input v-model="shipData.id" readonly/></td>
                </tr>

                <tr>
                    <td>Name (English)</td>
                    <td><input v-model="shipData.name"/></td>
                </tr>

                <tr>
                    <td>Name (Japanese)</td>
                    <td><input v-model="shipData.nameJP"/></td>
                </tr>

                <tr>
                    <td>Image (160px x 40px)</td>
                    <td><input v-model="shipData.customImage"/></td>
                    <td><img :src="shipData.customImage"/></td>
                </tr>

                <tr>
                    <td>Type</td>
                    <td><vcomboboxeditor :data-source="shipData" :item-list="shipTypeList" data-field="type"/></td>
                </tr>

                <tr>
                    <td>Ship Class</td>
                    <td><vcomboboxeditor :data-source="shipData" :item-list="shipClassItemList" data-field="sclass" :can-be-null="true"/></td>
                </tr>

                <tr>
                    <td colspan="2">
                        <table>
                        
                            <tr>
                                <td>HP</td>
                                <td><input v-model="shipData.HP" type="number" step="1" :style="{ width: '45px' }" /></td>
                                <td>HP Max</td>
                                <td><input v-model="shipData.HPmax" type="number" step="1" :style="{ width: '45px' }" /></td>
                            </tr>
                        
                            <tr>
                                <td>Firepower</td>
                                <td><input v-model="shipData.FP" type="number" step="1" :style="{ width: '45px' }" /></td>
                                <td>Firepower base</td>
                                <td><input v-model="shipData.FPbase" type="number" step="1" :style="{ width: '45px' }" /></td>
                            </tr>
                        
                            <tr>
                                <td>Torpedo</td>
                                <td><input v-model="shipData.TP" type="number" step="1" :style="{ width: '45px' }" /></td>
                                <td>Torpedo base</td>
                                <td><input v-model="shipData.TPbase" type="number" step="1" :style="{ width: '45px' }" /></td>
                            </tr>
                        
                            <tr>
                                <td>Anti Air</td>
                                <td><input v-model="shipData.AA" type="number" step="1" :style="{ width: '45px' }" /></td>
                                <td>Anti Air base</td>
                                <td><input v-model="shipData.AAbase" type="number" step="1" :style="{ width: '45px' }" /></td>
                            </tr>
                        
                            <tr>
                                <td>Armor</td>
                                <td><input v-model="shipData.AR" type="number" step="1" :style="{ width: '45px' }" /></td>
                                <td>Armor base</td>
                                <td><input v-model="shipData.ARbase" type="number" step="1" :style="{ width: '45px' }" /></td>
                            </tr>
                        
                            <tr>
                                <td>Evasion</td>
                                <td><input v-model="shipData.EV" type="number" step="1" :style="{ width: '45px' }" /></td>
                                <td>Evasion base</td>
                                <td><input v-model="shipData.EVbase" type="number" step="1" :style="{ width: '45px' }" /></td>
                            </tr>

                            <tr>
                                <td>ASW</td>
                                <td><input v-model="shipData.ASW" type="number" step="1" :style="{ width: '45px' }" /></td>
                                <td>ASW base</td>
                                <td><input v-model="shipData.ASWbase" type="number" step="1" :style="{ width: '45px' }" /></td>
                            </tr>
                        
                            <tr>
                                <td>LOS</td>
                                <td><input v-model="shipData.LOS" type="number" step="1" :style="{ width: '45px' }" /></td>
                                <td>LOS base</td>
                                <td><input v-model="shipData.LOSbase" type="number" step="1" :style="{ width: '45px' }" /></td>
                            </tr>
                        
                            <tr>
                                <td>Luck</td>
                                <td><input v-model="shipData.LUK" type="number" step="1" :style="{ width: '45px' }" /></td>
                                <td>Luck max</td>
                                <td><input v-model="shipData.LUKmax" type="number" step="1" :style="{ width: '45px' }" /></td>
                            </tr>

                            <tr>
                                <td>Range</td>
                                <td><vcomboboxeditor :data-source="shipData" :item-list="rangeItemList" data-field="RNG"/></td>
                            </tr>
                            
                            <tr>
                                <td>Speed</td>
                                <td><vcomboboxeditor :data-source="shipData" :item-list="speedItemList" data-field="SPD"/></td>
                            </tr>

                            <tr>
                                <td>Installation type</td>
                                <td><vcomboboxeditor :data-source="shipData" :item-list="installTypeItemList" data-field="installtype"/></td>
                            </tr>

                        </table>
                    </td>
                </tr>

                <tr>
                    <td>Equipments</td>
                    <td>
                        <div class="equipDataRuleEditor">
                            <vequiplisteditor :data-source="shipData.EQUIPS" :slots="shipData.SLOTS" />
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>Fuel ressuply</td>
                    <td><input v-model="shipData.fuel" type="number" /></td>
                </tr>

                <tr>
                    <td>Ammo ressuply</td>
                    <td><input v-model="shipData.ammo" type="number" /></td>
                </tr>

                <tr>
                    <td>Remodel level</td>
                    <td><input v-model="shipData.nextlvl" type="number" /></td>
                </tr>
                
                <tr>
                    <td>Previous remodel</td>
                    <td>
                        <vshipeditor :ship="previousShip" @ship-set="setPreviousShip()" :ship-only="true" @ship-delete="deletePreviousShip()"></vshipeditor>
                    </td>
                </tr>
                
                <tr>
                    <td>Night attack type (Carriers)</td>
                    <td><input v-model="shipData.nightattack" type="number" /></td>
                </tr>
                
                <tr>
                    <td>Battle start line</td>
                    <td><input v-model="shipData.voice_start"/></td>
                    <td><button class="play-bgm" @click="playVoice(shipData.voice_start)">Play</button></td>
                </tr>
                <tr>
                    <td>Attack line</td>
                    <td><input v-model="shipData.voice_attack"/></td>
                    <td><button class="play-bgm" @click="playVoice(shipData.voice_attack)">Play</button></td>
                </tr>
                <tr>
                    <td>Night battle attack line (Friendly)</td>
                    <td><input v-model="shipData.voice_nbattack"/></td>
                    <td><button class="play-bgm" @click="playVoice(shipData.voice_nbattack)">Play</button></td>
                </tr>
                <tr>
                    <td>Shoha damage (Friendly)</td>
                    <td><input v-model="shipData.voice_damage1"/></td>
                    <td><button class="play-bgm" @click="playVoice(shipData.voice_damage1)">Play</button></td>
                </tr>
                <tr>
                    <td>Shuuha damage (Friendly)</td>
                    <td><input v-model="shipData.voice_damage2"/></td>
                    <td><button class="play-bgm" @click="playVoice(shipData.voice_damage2)">Play</button></td>
                </tr>
                <tr>
                    <td>Taiha damage (Friendly)</td>
                    <td><input v-model="shipData.voice_damage3"/></td>
                    <td><button class="play-bgm" @click="playVoice(shipData.voice_damage3)">Play</button></td>
                </tr>
                <tr>
                    <td>Attacked (Abyssal)</td>
                    <td><input v-model="shipData.voice_damage"/></td>
                    <td><button class="play-bgm" @click="playVoice(shipData.voice_damage)">Play</button></td>
                </tr>
                <tr>
                    <td>Sinking line</td>
                    <td><input v-model="shipData.voice_sunk"/></td>
                    <td><button class="play-bgm" @click="playVoice(shipData.voice_sunk)">Play</button></td>
                </tr>
            </table>
        </div>
    
    `
}