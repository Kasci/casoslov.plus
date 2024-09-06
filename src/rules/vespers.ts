import { getJson } from './utils'
import { Feast } from '../festalCycle';

export class Vespers {
    katizma: number | null;
    stichiryPJV: (string|object)[];
    siPJV: (string|object)[];
    readings: (string|object)[];
    stichiryLitia: (string|object)[];
    siLitia: (string|object)[];
    stichiryStichovni: (string|object)[];
    siStichovni: (string|object)[];
    tropare: (string|object)[];
    
    constructor() {
        this.katizma = null;
        this.stichiryPJV = [];
        this.siPJV = [];
        this.readings = [];
        this.stichiryLitia = [];
        this.siLitia = [];
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
function getM_HV_Oktoich(voice: number, day: number, ammout: number): object[] {
    let data = getJson(voice, day);
    let arr: object[] = data["M"]["HV"]
    return arr.slice(0, ammout)
}
function getV_HV_B_Oktoich(voice: number, day: number): object {
    let data = getJson(voice, day);
    let arr: object[] = data["V"]["HV_B"]
    return arr[0];
}
function getV_S_Oktoich(voice: number, day: number, ammount: number = 0): object[] {
    let data = getJson(voice, day);
    let arr: object[] = data["V"]["S"]
    if (ammount > 0) 
        return arr.slice(0, ammount);
    return arr;
}
function getM_S_Oktoich(voice: number, day: number, ammount: number = 0): object[] {
    let data = getJson(voice, day);
    let arr: object[] = data["M"]["S"]
    if (ammount > 0) 
        return arr.slice(0, ammount);
    return arr;
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
        `Bohorodicnik SS hlasu naslavnika`
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
        `Bohorodicnik SS hlasu naslavnika`
    ];
    vespers.tropare = [
        `Tropar svateho ${feast1.type} or ${feast1.day}/${feast1.month}`,
        `Tropar svateho ${feast2.type} or ${feast2.day}/${feast2.month}`,
        `Bohorodicnik troparu podla hlasu troparu druheho svateho`
    ];
    return vespers;
}

export function getJedenSvatySobotaVespersRule(weekday: number, voice: number, feast: Feast) : Vespers {
    let vespers = new Vespers();
    vespers.stichiryPJV = [
        `Minea 3: feast ${feast.type} or ${feast.day}/${feast.month}`,
        ...getV_HV_Oktoich(voice, weekday, 3),
    ];
    vespers.siPJV = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        getV_HV_B_Oktoich(voice, 0)
    ];
    vespers.stichiryStichovni = [
        ...getV_S_Oktoich(voice, weekday)
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik SS hlasu naslavnika`
    ];
    vespers.tropare = [
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik nedelny troparu podla hlasu troparu svateho`
    ];
    return vespers;
}

export function getDvajaSvatiSobotaVespersRule(weekday: number, voice: number, feast1: Feast, feast2: Feast): Vespers {
    let vespers = new Vespers();
    vespers.stichiryPJV = [
        `Minea svaty1 3: feast ${feast1.type} or ${feast1.day}/${feast1.month}`,
        `Minea svaty2 3: feast ${feast2.type} or ${feast2.day}/${feast2.month}`
    ];
    vespers.siPJV = [
        `Minea (ak je): ${feast1.type} or ${feast1.day}/${feast1.month}`,
        getV_HV_B_Oktoich(voice, 0)
    ];
    vespers.stichiryStichovni = [
        ...getV_S_Oktoich(voice, weekday)
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast1.type} or ${feast1.day}/${feast1.month}`,
        `Bohorodicnik SS hlasu naslavnika`
    ];
    vespers.tropare = [
        `Tropar svateho ${feast1.type} or ${feast1.day}/${feast1.month}`,
        `Tropar svateho ${feast2.type} or ${feast2.day}/${feast2.month}`,
        `Bohorodicnik nedelny troparu podla hlasu troparu druheho svateho`
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
        `Bohorodicnik SS hlasu naslavnika`
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
        `Bohorodicnik SS hlasu naslavnika`
    ];
    vespers.tropare = [
        ...getV_T_Oktoich(voice, 0),
        `Tropar svateho ${feast1.type} or ${feast1.day}/${feast1.month}`,
        `Tropar svateho ${feast2.type} or ${feast2.day}/${feast2.month}`,
        `Bohorodicnik troparu podla hlasu troparu druheho svateho`
    ];
    return vespers;
}
                                                                                                    
//                  ,&@@@@@@@@@@@(.                                                    
//     ...     /@@@@@&*        .#&@@@@@%                                               
//    .@@@  (@@@#                     &@@@#                                            
//    .@@@&@@#                          .@@@                                           
//    .@@@@#            @@@@@@@@&         @@@.                                         
//     (((            #@@@@@@@@@@@        *@@&                                         
//                    @@@@@@@@@@@@/       .@@@                                         
//                     @@@@@@@@@@%        @@@*                                         
//      ,@@@@@%          .&@@@#          %@@%                                          
//    &@@@@@@@@@@.                     .@@@.                                           
//   .@@@@@@@@@@@@                    @@@                                              
//    @@@@@@@@@@@#                    *@@@/                                            
//     ,@@@@@@@@                         @@@                                           
//                     *@@@@@@@@@         @@@                                          
//                    &@@@@@@@@@@@,       *@@%                                         
//                    @@@@@@@@@@@@*       .@@@                                         
//    .@@@@            @@@@@@@@@@,        @@@/                                         
//    .@@@@@%             .%&#           &@@&                                          
//    .@@@ #@@@                        *@@@*                                           
//    .@@@    @@@@@.               ,@@@@@.                                             
//               .&@@@@@@@@@@@@@@@@@&.                                                 
                                                                                    

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
        `Bohorodicnik SS hlasu naslavnika`
    ];
    vespers.tropare = [
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik troparu podla hlasu troparu svateho`
    ];
    return vespers;
}

export function getSestricnySobotaVespersRule(weekday: number, voice: number, feast: Feast): Vespers {
    let vespers = new Vespers();
    vespers.stichiryPJV = [
        `Minea 6: feast ${feast.type} or ${feast.day}/${feast.month}`
    ];
    vespers.siPJV = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        getV_HV_B_Oktoich(voice, 0)
    ];
    vespers.stichiryStichovni = [
        ...getV_S_Oktoich(voice, weekday)
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik SS hlasu naslavnika`
    ];
    vespers.tropare = [
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik nedelny troparu podla hlasu troparu svateho`
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
        `Bohorodicnik SS hlasu naslavnika`
    ];
    vespers.tropare = [
        ...getV_T_Oktoich(voice, 0),
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik troparu podla hlasu troparu svateho`
    ];
    return vespers;
}

                                                                                                   
//                  @@@@.                                                  
//              @@@@@@@@@@@@                                               
//                @@@@@@@@                                                 
//                 #@@@@%                                                  
//                 #@@@@%                                                  
//    .@@          #@@@@%          @@,                                     
//   (@@@@@@&&&&&&&@@@@@@&&&&&&&@@@@@@/                                    
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                   
//   ,@@@@@@*......#@@@@%......,@@@@@@#                                    
//    *@@          #@@@@%          /@(                                     
//                 #@@@@%                                                  
//                 #@@@@%                                                  
//                @@@@@@@@                                                 
//              &@@@@@@@@@@%                                               
//                 .@@@@                                                   
                                                                                                    
                                                                                                    

export function getPolyelejKazdodennyVespersRule(weekday: number, voice: number, feast: Feast): Vespers {
    let vespers = new Vespers();
    vespers.katizma = 1;
    vespers.stichiryPJV = [
        `Minea 6/8: feast ${feast.type} or ${feast.day}/${feast.month}`
    ];
    vespers.siPJV = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Dogmat PJV hlasu naslavnika`
    ];
    vespers.readings = [
        `3 citania svatemu`
    ]
    vespers.stichiryStichovni = [
        `Minea: ${feast.type} or ${feast.day}/${feast.month}`
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik SS v nedelu podla hlasu naslavnika`
    ];
    vespers.tropare = [
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik nedelny troparu podla hlasu troparu svateho`
    ];
    return vespers;
}

export function getPolyelejSobotaVespersRule(voice: number, feast: Feast): Vespers {
    let vespers = new Vespers();
    vespers.katizma = 1;
    vespers.stichiryPJV = [
        `Minea 6/8: feast ${feast.type} or ${feast.day}/${feast.month}`
    ];
    vespers.siPJV = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Dogmat PJV ${voice} hlasu`
    ];
    vespers.readings = [
        `3 citania svatemu`
    ]
    vespers.stichiryStichovni = [
        `Minea: ${feast.type} or ${feast.day}/${feast.month}`
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik SS v nedelu podla hlasu naslavnika`
    ];
    vespers.tropare = [
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik nedelny troparu podla hlasu troparu svateho`
    ];
    return vespers;
}

export function getPolyelejNedelaVespersRule(voice: number, feast: Feast): Vespers {
    let vespers = new Vespers();
    vespers.katizma = 1;
    vespers.stichiryPJV = [
        ...getV_HV_Oktoich(voice, 0, 4),
        `Minea 6: feast ${feast.type} or ${feast.day}/${feast.month}`
    ];
    vespers.siPJV = [
        `Minea: ${feast.type} or ${feast.day}/${feast.month}`,
        `Dogmat PJV ${voice} hlasu`
    ];
    vespers.readings = [
        `3 Citania svatemu`
    ]
    vespers.stichiryStichovni = [
        ...getV_S_Oktoich(voice, 0)
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik SS hlasu naslavnika`
    ];
    vespers.tropare = [
        ...getV_T_Oktoich(voice, 0),
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik troparu podla hlasu troparu svateho`
    ];
    return vespers;
}

                                                                                                   
//                                (@@@@@@%.                                                
//                               @@@@@@@@@@                                                
//                                /@@@@@@*                                                 
//                                 #@@@@#                                                  
//                                 #@@@@%                                                  
//                    &@@@(        #@@@@%        (@@@&                                     
//                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                    
//     @@@          .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.         .@@@                      
//     %@@*           @@@@@        #@@@@%        @@@@@           (@@(                      
//     .@@@            *           #@@@@#                        @@@                       
//      %@@%                       #@@@@#                       @@@(                       
//       @@@#                      @@@@@@                      &@@%                        
//        %@@@                   (@@@@@@@@#                   @@@#                         
//         .@@@(               .@@@@@@@@@@@&.               %@@@                           
//           (@@@(                   ##                   %@@@,                            
//             ,@@@@.                                  ,@@@@                               
//                %@@@@%                            &@@@@(                                 
//                   .@@@@@@&*                *@@@@@@&                                     
//                        .%@@@@@@@@@@@@@@@@@@@@#.               

export function getSBdenimKazdodennySmallVespersRule(weekday: number, voice: number, feast: Feast): Vespers {
    let vespers = new Vespers();
//     vespers.stichiryPJV = [
//         `Minea 4: PJV z malej vecierne`
//     ];
//     vespers.siPJV = [
//         `Minea: ${feast.type} or ${feast.day}/${feast.month}`,
//         `Dogmat malej vecierne PJV ${voice} hlasu`
//     ];
//     vespers.stichiryStichovni = [
//         `Minea 3: z velkej vecierne`
//     ];
//     vespers.siStichovni = [
//         `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
//         `Bohorodicnik SS malej vecierne hlasu naslavnika`
//     ];
//     vespers.tropare = [
//         ...getV_T_Oktoich(voice, 0),
//         `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
//         `Bohorodicnik troparu podla hlasu troparu svateho`
//     ];
    return vespers;
}

export function getSBdenimKazdodennyVespersRule(weekday: number, voice: number, feast: Feast): Vespers {
    let vespers = new Vespers();
    vespers.katizma = 1;
    vespers.stichiryPJV = [
        `Minea 8: feast ${feast.type} or ${feast.day}/${feast.month}`
    ];
    vespers.siPJV = [
        `Minea: ${feast.type} or ${feast.day}/${feast.month}`,
        `Dogmat PJV hlasu naslavnika`
    ];
    vespers.readings = [
        `3 Citania svatemu`
    ];
    vespers.stichiryLitia = [
        `1 stichira chramu?`,
        `Minea: stichiry svateho na Litii`,
    ];
    vespers.siLitia = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik svatemu alebo SS! nedelny hlasu naslavnika`
    ];
    vespers.stichiryStichovni = [
        `Minea 3 ${feast.type} or ${feast.day}/${feast.month}`,
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik SS nedelny hlasu naslavnika`
    ];
    vespers.tropare = [
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month} 2x`,
        `Tropar Bohorodice Divo`,
    ];
    return vespers;
}

export function getSBdenimSobotaVespersRule(voice: number, feast: Feast): Vespers {
    let vespers = new Vespers();
    vespers.katizma = 1;
    vespers.stichiryPJV = [
        `Minea 8: feast ${feast.type} or ${feast.day}/${feast.month}`
    ];
    vespers.siPJV = [
        `Minea: ${feast.type} or ${feast.day}/${feast.month}`,
        `Dogmat PJV ${voice} hlasu`
    ];
    vespers.readings = [
        `3 Citania svatemu`
    ];
    vespers.stichiryLitia = [
        `1 stichira chramu?`,
        `Minea: stichiry svateho na Litii`,
    ];
    vespers.siLitia = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik svatemu alebo SS! nedelny hlasu naslavnika`
    ];
    vespers.stichiryStichovni = [
        `Minea 3 ${feast.type} or ${feast.day}/${feast.month}`,
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik SS nedelny hlasu naslavnika`
    ];
    vespers.tropare = [
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month} 2x`,
        `Tropar Bohorodice Divo`,
    ];
    return vespers;
}

export function getSBdenimNedelaSmallVespersRule(voice: number, feast: Feast): Vespers {
    let vespers = new Vespers();
    vespers.stichiryPJV = [
        ...getM_HV_Oktoich(voice, 0, 4),
    ];
    vespers.siPJV = [
        `Minea: ${feast.type} or ${feast.day}/${feast.month}`,
        `Dogmat malej vecierne PJV ${voice} hlasu`
    ];
    vespers.stichiryStichovni = [
        ...getM_S_Oktoich(voice, 0, 1),
        `Minea 3: z velkej vecierne`
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik SS malej vecierne hlasu naslavnika`
    ];
    vespers.tropare = [
        ...getV_T_Oktoich(voice, 0),
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik troparu podla hlasu troparu svateho`
    ];
    return vespers;
}
export function getSBdenimNedelaVespersRule(voice: number, feast: Feast): Vespers {
    let vespers = new Vespers();
    vespers.katizma = 1;
    vespers.stichiryPJV = [
        ...getV_HV_Oktoich(voice, 0, 4),
        `Minea 6: feast ${feast.type} or ${feast.day}/${feast.month}`
    ];
    vespers.siPJV = [
        `Minea: ${feast.type} or ${feast.day}/${feast.month}`,
        `Dogmat PJV ${voice} hlasu`
    ];
    vespers.readings = [
        `3 Citania svatemu`
    ];
    vespers.stichiryLitia = [
        `1 stichira chramu?`,
        `Minea: stichiry svateho na Litii`,
    ];
    vespers.siLitia = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik SS! hlasu naslavnika`
    ];
    vespers.stichiryStichovni = [
        ...getV_S_Oktoich(voice, 0)
    ];
    vespers.siStichovni = [
        `Minea (ak je): ${feast.type} or ${feast.day}/${feast.month}`,
        `Bohorodicnik SS hlasu naslavnika`
    ];
    vespers.tropare = [
        `Tropar Bohorodice Divo 2x`,
        `Tropar svateho ${feast.type} or ${feast.day}/${feast.month}`,
    ];
    return vespers;
}

//                            .*#@@@@@&#*.                                               
//                     %@@@@@@@@@@@@@@@@@@@@@@@@#                                        
//                *@@@@@&.                    ,@@@@@@.                                   
//             (@@@@/                              (@@@@*                                
//           @@@@,                                    *@@@@                              
//         @@@@                    %(                    @@@@                            
//       &@@@                 /@@@@@@@@@@#                 @@@%                          
//      @@@,                   @@@@@@@@@@                   (@@@                         
//     @@@.                      @@@@@@                      ,@@@                        
//    @@@,                       #@@@@%                       *@@@                       
//   *@@@            #           #@@@@%           &            @@@.                      
//   &@@            @@@@@/       #@@@@%       /@@@@@           *@@&                      
//   @@@          (@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#         .@@@                      
//   @@@           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          .@@@                      
//   #@@#           &@@@         #@@@@%         @@@@           &@@,                      
//    @@@                        #@@@@#                        @@@                       
//    *@@@                       #@@@@#                       @@@,                       
//     /@@@                     .@@@@@@.                     @@@*                        
//      .@@@                   @@@@@@@@@@                  ,@@@                          
//        @@@@                 ,&@@@@@@&.                 @@@&                           
//          @@@@                                       ,@@@@                             
//            %@@@@                                 .@@@@#                               
//               &@@@@&                          &@@@@#                                  
//                  .&@@@@@@&/.          .(&@@@@@@&                                      
//                        ,%@@@@@@@@@@@@@@@@#,                                           
                                                                                                    
