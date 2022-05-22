const chrClearLocks = () => {
    for (const shipKey in CHDATA.ships) {
        delete CHDATA.ships[shipKey].lock;
    }
    InitUI();
}

const CHEATS = false;


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