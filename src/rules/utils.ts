import fs from 'fs'

let OKTOICH_PATH: string = "/c/Users/ZZ01PC693/MyStuff/Cerkovne/Liturgical_books/CU_json/oktoich/0_source/"

let OKTOICH_VOICE: string[] = ["Hlas1","Hlas2","Hlas3","Hlas4","Hlas5","Hlas6","Hlas7","Hlas8"]
let OKTOICH_DAY: string[] = ["0_Nedela", "1_Pondelok", "2_Utorok", "3_Streda", "4_Stvrtok", "5_Piatok", "6_Sobota"]

export function getJson(voice: number, day: number) {
    const json = fs.readFileSync(OKTOICH_PATH+OKTOICH_VOICE[voice-1]+"/"+OKTOICH_DAY[day]+".json", {encoding: 'utf-8'});
    const data = JSON.parse(json);
    return data;
}