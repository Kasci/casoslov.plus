import moment from 'moment';

let pascha = [
    { "year": "2001", "g": [4, 15], "j": [4, 15] },
    { "year": "2002", "g": [3, 31], "j": [5, 5] },
    { "year": "2003", "g": [4, 20], "j": [4, 27] },
    { "year": "2004", "g": [4, 11], "j": [4, 11] },
    { "year": "2005", "g": [3, 27], "j": [5, 1] },
    { "year": "2006", "g": [4, 16], "j": [4, 23] },
    { "year": "2007", "g": [4, 8], "j": [4, 8] },
    { "year": "2008", "g": [3, 23], "j": [4, 27] },
    { "year": "2009", "g": [4, 12], "j": [4, 19] },
    { "year": "2010", "g": [4, 4], "j": [4, 4] },
    { "year": "2011", "g": [4, 24], "j": [4, 24] },
    { "year": "2012", "g": [4, 8], "j": [4, 15] },
    { "year": "2013", "g": [3, 31], "j": [5, 5] },
    { "year": "2014", "g": [4, 20], "j": [4, 20] },
    { "year": "2015", "g": [4, 5], "j": [4, 12] },
    { "year": "2016", "g": [3, 27], "j": [5, 1] },
    { "year": "2017", "g": [4, 16], "j": [4, 16] },
    { "year": "2018", "g": [4, 1], "j": [4, 8] },
    { "year": "2019", "g": [4, 21], "j": [4, 28] },
    { "year": "2020", "g": [4, 12], "j": [4, 19] },
    { "year": "2021", "g": [4, 4], "j": [5, 2] },
    { "year": "2022", "g": [4, 17], "j": [4, 24] },
    { "year": "2023", "g": [4, 9], "j": [4, 16] },
    { "year": "2024", "g": [3, 31], "j": [5, 5] },
    { "year": "2025", "g": [4, 20], "j": [4, 20] },
    { "year": "2026", "g": [4, 5], "j": [4, 12] },
    { "year": "2027", "g": [3, 28], "j": [5, 2] },
    { "year": "2028", "g": [4, 16], "j": [4, 16] },
    { "year": "2029", "g": [4, 1], "j": [4, 8] },
    { "year": "2030", "g": [4, 21], "j": [4, 28] },
    { "year": "2031", "g": [4, 13], "j": [4, 13] },
    { "year": "2032", "g": [3, 28], "j": [5, 2] },
    { "year": "2033", "g": [4, 17], "j": [4, 24] },
    { "year": "2034", "g": [4, 9], "j": [4, 9] },
    { "year": "2035", "g": [3, 25], "j": [4, 29] },
    { "year": "2036", "g": [4, 13], "j": [4, 20] },
    { "year": "2037", "g": [4, 5], "j": [4, 5] },
    { "year": "2038", "g": [4, 25], "j": [4, 25] },
    { "year": "2039", "g": [4, 10], "j": [4, 17] },
    { "year": "2040", "g": [4, 1], "j": [5, 6] },
    { "year": "2041", "g": [4, 21], "j": [4, 21] },
];

/**
 * return date string
 * @param year number like 2024
 * @param month number 1-12
 * @param day number 1-31
 */
function getMDate(year: number, month: number, day: number): string;
/**
 * return date string
 * @param year number like 2024
 * @param md array [1-12, 1-31]
 */
function getMDate(year: number, md: number[]): string;
/**
 * return date string
 * @param ymd array [year, 1-12, 1-31]
 */
function getMDate(ymd: number[]): string;
function getMDate(year: any, month?: any, day?: number): string {
    if (day && month) {
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    }
    if (month) {
        return `${year}-${month[0].toString().padStart(2, '0')}-${month[1].toString().padStart(2, '0')}`;
    }
    return `${year[0]}-${year[1].toString().padStart(2, '0')}-${year[2].toString().padStart(2, '0')}`;
}

/**
 * Return gregorian date for Pascha
 * @param year 
 * @returns [month, day] of Pascha
 */
export function getPascha(year: number): number[] {
    let date = pascha.find(it => parseInt(it.year) == year)?.g;
    if (date === undefined) throw new Error("UNKOWN PASCHAL YEAR");
    return date;    
}

/**
 * Get date of last Pascha
 * @param day 
 * @param month 
 * @param year 
 * @returns [year, month, day] of last Pascha
 */
export function getLastPascha(year: number, month: number, day: number): number[] {
    let [m, d] = getPascha(year);
    if (moment(getMDate(year,month,day)).isBefore(getMDate(year,m,d))) {
        let [m, d] = getPascha(year - 1);
        return [year-1, m, d]
    }
    return [year, m, d];
}

/**
 * Get date of next Pascha
 * @param day 
 * @param month 
 * @param year 
 * @returns [year, month, day] of next Pascha
 */
export function getNextPascha(year: number, month: number, day: number): number[] {
    let [m, d] = getPascha(year);
    if (moment(getMDate(year,month,day)).isAfter(getMDate(year,m,d))) {
        let [m, d] = getPascha(year + 1);
        return [year+1, m, d]
    }
    return [year, m, d];
}

/**
 * Get number of days until the next Pascha
 * @param year 
 * @param month 
 * @param day 
 * @returns number of days
 */
export function daysBeforePascha(year: number, month: number, day: number): number {
    let next = getNextPascha(year, month, day);
    return moment(getMDate(next)).diff(moment(getMDate(year, month, day)), 'days');
}

/**
 * Get number of days after the last Pascha
 * @param year 
 * @param month 
 * @param day 
 * @returns number of days
 */
export function daysAfterPascha(year: number, month: number, day: number): number {
    let last = getLastPascha(year, month, day);
    return moment(getMDate(year, month, day)).diff(moment(getMDate(last)), 'days');
}

export function getVoice(year: number, month: number, day: number): number {
    let after = daysAfterPascha(year, month, day);
    if (after < 6) return after+1;
    if (after == 6) return 8;
    return ((Math.floor(after / 7) - 1) % 8) + 1
}

export function isPreQuad(year: number, month: number, day: number): boolean {
    let before = daysBeforePascha(year, month, day);
    return before < 70 && before > 48;
}
export function isQuad(year: number, month: number, day: number): boolean {
    let before = daysBeforePascha(year, month, day);
    return before < 49 && before > 6;
}
export function isHolyWeek(year: number, month: number, day: number): boolean {
    let before = daysBeforePascha(year, month, day);
    return before < 7 && before > 0;
}
export function isBrightWeek(year: number, month: number, day: number): boolean {
    let after = daysAfterPascha(year, month, day);
    return after >=0 && after < 7;
}
export function isPent(year: number, month: number, day: number): boolean {
    let after = daysAfterPascha(year, month, day);
    return after > 6 && after < 50;
}
export function isPostPent(year: number, month: number, day: number): boolean {
    let after = daysAfterPascha(year, month, day);
    return after > 49 && after < 64; // TODO: check and fix this - especially based on traditions
}

export function is40(year: number, month: number, day: number): boolean {
    return isQuad(year, month, day) || isHolyWeek(year, month, day);
}
export function is50(year: number, month: number, day: number): boolean {
    return isPent(year, month, day) || isBrightWeek(year, month, day);
}

function isAfterPascha(year: number, month: number, day: number): boolean {
    return month < 9 && moment(getMDate(year, month, day)).isAfter(moment(getMDate(year, getPascha(year))));
}
function isAfterSundayAfterEpiphany(year: number, month: number, day: number): boolean {
    let epi = moment(getMDate(year, 1, 6)).day(7);
    return month < 9 && !moment(getMDate(year, month, day)).isBetween(moment(getMDate(year, 1, 1)), epi, 'D', "[]");
}
function isAfterSundayAfterElevation(year: number, month: number, day: number): boolean {
    let elev = moment(getMDate(year, 9, 14)).day(7);
    return !moment(getMDate(year, month, day)).isBetween(moment(getMDate(year, 9, 1)), elev, 'D', "[]");
}

function getWeekAfterPentecost(year: number, month: number, day: number): number {
    let after = daysAfterPascha(year, month, day);
    return Math.floor((after - 43) / 7);
}
function getWeekBeforePascha(year: number, month: number, day: number): number {
    let before = daysBeforePascha(year, month, day);
    return Math.floor((307 - before) / 7);
}
function getWeekOfM(year: number, month: number, day: number): number {
    let elev = moment(getMDate(year, 9, 14)).day(7);
    if (elev.isAfter(moment(getMDate(year, month, day)))) {
        elev = moment(getMDate(year-1, 9, 14)).day(7);
    }
    let diff = moment(getMDate(year, month, day)).diff(elev, 'days');
    return Math.floor((diff - 1) / 7) + 18;
}

export function getWeek(year: number, month: number, day: number): number {
    if (is40(year, month, day)) return -40;
    if (is50(year, month, day)) return -50;
    let ap = isAfterPascha(year, month, day);
    let ae = isAfterSundayAfterEpiphany(year, month, day);
    let ax = isAfterSundayAfterElevation(year, month, day);
    // ap xnor ae
    if ((ap && ae && ax) || !(ap || ae || ax)) return getWeekAfterPentecost(year, month, day);
    if (ax && !ae) return getWeekOfM(year, month, day);
    return getWeekBeforePascha(year, month, day);
}

export function log(year: number, month: number, day: number): void {
    console.log(getWeek(year, month, day));
    console.log(`${isAfterPascha(year, month, day)} ${isAfterSundayAfterElevation(year, month, day)} ${isAfterSundayAfterEpiphany(year, month, day)} - ${getWeekAfterPentecost(year, month, day)} ${getWeekOfM(year, month, day)} ${getWeekBeforePascha(year, month, day)}`)
}