import { getJson } from './utils'
import { Feast } from '../festalCycle';

export class Vespers {
    katizma: number | null;
    stichiryPJV: (string|object)[];
    siPJV: (string|object)[];
    stichiryStichovni: (string|object)[];
    siStichovni: (string|object)[];
    tropare: (string|object)[];
    
    constructor() {
        this.katizma = null;
        this.stichiryPJV = [];
        this.siPJV = [];
        this.stichiryStichovni = [];
        this.siStichovni = [];
        this.tropare = [];
    }
}

/**
 * TODO: add Katizma calculation
 * @param day 
 * @returns 
 */
function getV_Katizma(day: number): number {
    console.log("TODO: Katizma V");
    return -1;
}

function getV_HV_Oktoich(voice: number, day: number, ammout: number): object[] {
    let data = getJson(voice, day);
    let arr: object[] = data["V"]["HV"]
    return arr.slice(0, ammout)
}
function getV_S_Oktoich(voice: number, day: number): object[] {
    let data = getJson(voice, day);
    let arr: object[] = data["V"]["S"]
    return arr
}
function getV_T_Oktoich(voice: number, day: number): object[] {
    let data = getJson(voice, day);
    let arr: object[] = data["V"]["T"]
    return arr
}

export function getJedenSvatyKazdodennyVespersRule(weekday: number, voice: number, feast: Feast) : Vespers {
    let vespers = new Vespers();
    vespers.stichiryPJV = [
        ...getV_HV_Oktoich(voice, weekday, 3),
        `Minea 3: feast ${feast.type} or ${feast.day}/${feast.month}`
    ];
    vespers.siPJV = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik PJV hlasu naslavnika alebo Minea`
    ];
    vespers.stichiryStichovni = [
        ...getV_S_Oktoich(voice, weekday)
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik PJV hlasu naslavnika`
    ];
    vespers.tropare = [
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik troparu podla hlasu troparu svateho`
    ];
    return vespers;
}

export function getDvajaSvatiKazdodenniVespersRule(weekday: number, voice: number, feast1: Feast, feast2: Feast): Vespers {
    let vespers = new Vespers();
    vespers.stichiryPJV = [
        `Minea svaty1 3: feast ${feast1.type} or ${feast1.day}/${feast1.month}`,
        `Minea svaty2 3: feast ${feast2.type} or ${feast2.day}/${feast2.month}`
    ];
    vespers.siPJV = [
        `Minea (ak je): ${feast1.type} or ${feast1.day}/${feast1.month}`,
        `Bohorodicnik PJV hlasu naslavnika alebo Minea`
    ];
    vespers.stichiryStichovni = [
        ...getV_S_Oktoich(voice, weekday)
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast1.type} or ${feast1.day}/${feast1.month}`,
        `Bohorodicnik PJV hlasu naslavnika`
    ];
    vespers.tropare = [
        `Tropar svateho ${feast1.type} or ${feast1.day}/${feast1.month}`,
        `Tropar svateho ${feast2.type} or ${feast2.day}/${feast2.month}`,
        `Bohorodicnik troparu podla hlasu troparu druheho svateho`
    ];
    return vespers;
}

export function getSestricnyKazdodennyVespersRule(weekday: number, voice: number, feast: Feast): Vespers {
    let vespers = new Vespers();
    vespers.stichiryPJV = [
        `Minea 6: feast ${feast.type} or ${feast.day}/${feast.month}`
    ];
    vespers.siPJV = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik PJV hlasu naslavnika alebo Minea`
    ];
    vespers.stichiryStichovni = [
        ...getV_S_Oktoich(voice, weekday)
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik PJV hlasu naslavnika`
    ];
    vespers.tropare = [
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik troparu podla hlasu troparu svateho`
    ];
    return vespers;
}

export function getJedenSvatyNedelaVespersRule(voice: number, feast: Feast): Vespers {
    let vespers = new Vespers();
    vespers.katizma = 1;
    vespers.stichiryPJV = [
        ...getV_HV_Oktoich(voice, 0, 7),
        `Minea 3: feast ${feast.type} or ${feast.day}/${feast.month}`
    ];
    vespers.siPJV = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Dogmat PJV ${voice} hlasu`
    ];
    vespers.stichiryStichovni = [
        ...getV_S_Oktoich(voice, 0)
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik PJV hlasu naslavnika`
    ];
    vespers.tropare = [
        ...getV_T_Oktoich(voice, 0),
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik troparu podla hlasu troparu svateho`
    ];
    return vespers;
}

export function getDvajaSvatiNedelaVespersRule(voice: number, feast1: Feast, feast2: Feast): Vespers {
    let vespers = new Vespers();
    vespers.katizma = 1;
    vespers.stichiryPJV = [
        ...getV_HV_Oktoich(voice, 0, 4),
        `Minea svaty1 3: feast ${feast1.type} or ${feast1.day}/${feast1.month}`,
        `Minea svaty2 3: feast ${feast2.type} or ${feast2.day}/${feast2.month}`
    ];
    vespers.siPJV = [
        `Minea (ak je): ${feast1.type} or ${feast1.day}/${feast1.month}`,
        `Dogmat PJV ${voice} hlasu`
    ];
    vespers.stichiryStichovni = [
        ...getV_S_Oktoich(voice, 0)
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast1.type} or ${feast1.day}/${feast1.month}`,
        `Bohorodicnik PJV hlasu naslavnika`
    ];
    vespers.tropare = [
        ...getV_T_Oktoich(voice, 0),
        `Tropar svateho ${feast1.type} or ${feast1.day}/${feast1.month}`,
        `Tropar svateho ${feast2.type} or ${feast2.day}/${feast2.month}`,
        `Bohorodicnik troparu podla hlasu troparu druheho svateho`
    ];
    return vespers;
}

export function getSestricnyNedelaVespersRule(voice: number, feast: Feast): Vespers {
    let vespers = new Vespers();
    vespers.katizma = 1;
    vespers.stichiryPJV = [
        ...getV_HV_Oktoich(voice, 0, 6),
        `Minea 4: feast ${feast.type} or ${feast.day}/${feast.month}`
    ];
    vespers.siPJV = [
        `Minea: ${feast.type} or ${feast.day}/${feast.month}`,
        `Dogmat PJV ${voice} hlasu`
    ];
    vespers.stichiryStichovni = [
        ...getV_S_Oktoich(voice, 0)
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik PJV hlasu naslavnika`
    ];
    vespers.tropare = [
        ...getV_T_Oktoich(voice, 0),
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik troparu podla hlasu troparu svateho`
    ];
    return vespers;
}