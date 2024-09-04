import moment from 'moment';
import { Feast, getFeasts, getRank } from './festalCycle';
import { getVoice } from './paschalCycle';
import { Vespers, //
        getJedenSvatyKazdodennyVespersRule, getDvajaSvatiKazdodenniVespersRule, getSestricnyKazdodennyVespersRule, //
        getJedenSvatyNedelaVespersRule, getDvajaSvatiNedelaVespersRule, getSestricnyNedelaVespersRule } from './rules/vespers';

export class Rule {

    vespers: Vespers;
    // compline: Compline;
    // midnight: Midnight;
    // matins: Matins;
    // first: Hour;
    // third: Hour;
    // sixth: Hour;
    // ninth: Hour;
    // liturgy: Liturgy;

    constructor() {
        this.vespers = new Vespers();
        // this.compline = new Compline();
        // this.midnight = new Midnight();
        // this.matins = new Matins();
        // this.first = new Hour();
        // this.third = new Hour();
        // this.sixth = new Hour();
        // this.ninth = new Hour();
        // this.liturgy = new Liturgy();
    }

    static getJedenSvatyKazdodennyRule(weekday: number, voice: number, feast: Feast): Rule {
        let rule: Rule = new Rule();
        rule.vespers = getJedenSvatyKazdodennyVespersRule(weekday, voice, feast);
        return rule;
    }
    
    static getDvajaSvatiKazdodenniRule(weekday: number, voice: number, feast1: Feast, feast2: Feast): Rule {
        let rule: Rule = new Rule();
        rule.vespers = getDvajaSvatiKazdodenniVespersRule(weekday, voice, feast1, feast2);
        return rule;
    }

    static getSestricnySMalymKazdodennyRule(weekday: number, voice: number, feast: Feast): Rule {
        let rule: Rule = new Rule();
        rule.vespers = getSestricnyKazdodennyVespersRule(weekday, voice, feast);
        return rule;
    }

    static getSestricnySVelkymKazdodennyRule(weekday: number, voice: number, feast: Feast): Rule {
        let rule: Rule = new Rule();
        rule.vespers = getSestricnyKazdodennyVespersRule(weekday, voice, feast);
        return rule;
    }
    
    static getJedenSvatyNedelaRule(voice: number, feast: Feast): Rule {
        let rule = new Rule();
        rule.vespers = getJedenSvatyNedelaVespersRule(voice, feast);
        return rule;
    }

    static getDvajaSvatiNedelaRule(voice: number, feast1: Feast, feast2: Feast): Rule {
        let rule = new Rule();
        rule.vespers = getDvajaSvatiNedelaVespersRule(voice, feast1, feast2);
        return rule;
    }

    static getSestricnySMalymNedelaRule(voice: number, feast: Feast): Rule {
        let rule = new Rule();
        rule.vespers = getSestricnyNedelaVespersRule(voice, feast);
        return rule;
    }

    static getSestricnySVelkymNedelaRule(voice: number, feast: Feast): Rule {
        let rule = new Rule();
        rule.vespers = getSestricnyNedelaVespersRule(voice, feast);
        return rule;
    }

}

export function getRule(year: number, month: number, day: number): Rule {
    let weekday = moment(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`).weekday();
    let feasts: Feast[] = getFeasts(month, day);
    let rank = getRank(month, day);
    let voice = getVoice(year, month, day);
    if (rank === "jedenSvaty") {
        if (weekday === 0) 
            return Rule.getJedenSvatyNedelaRule(voice, feasts[0]);
        return Rule.getJedenSvatyKazdodennyRule(weekday, voice, feasts[0]);
    } else if (rank === "dvajaSvati") {
        if (weekday === 0) 
            return Rule.getDvajaSvatiNedelaRule(voice, feasts[0], feasts[1]);
        return Rule.getDvajaSvatiKazdodenniRule(weekday, voice, feasts[0], feasts[1]);
    } else if (rank === "sestricnySMalymSlavoslovim") {
        if (weekday === 0) 
            return Rule.getSestricnySMalymNedelaRule(voice, feasts[0]);
        return Rule.getSestricnySMalymKazdodennyRule(weekday, voice, feasts[0]);
    }else if (rank === "sestricnySVelkymSlavoslovim") {
        if (weekday === 0) 
            return Rule.getSestricnySVelkymNedelaRule(voice, feasts[0]);
        return Rule.getSestricnySVelkymKazdodennyRule(weekday, voice, feasts[0]);
    }
    return new Rule();
}