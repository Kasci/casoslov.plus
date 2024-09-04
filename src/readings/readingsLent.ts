export class ReadingsLent {
    week: number;
    day: number;
    dayWeek: string;
    dayName: string;
    epistle?: string;
    gospel?: string;
    altEpistle?: string;
    altGospel?: string;
    sixthHour?: string;
    vespers1?: string;
    vespers2?: string;
    vespers3?: string;
    vespersGospel?: string;
    matinsGospel?: string;
};

let readings: ReadingsLent[] = [
    {week:8, day:0, dayWeek:"Nedeľa", dayName:"Mäsopôstna nedeľa"},
    {week:7, day:3, dayWeek:"Streda", dayName:"Streda syropôstneho týždňa", sixthHour:"Joel 2:12-26", vespers1:"Joel 3:12-21"},
    {week:7, day:5, dayWeek:"Piatok", dayName:"Piatok syropôstneho týždňa", sixthHour:"Zach 8:7-17", vespers1:"Zach 8:18-23"},
    {week:7, day:0, dayWeek:"Nedeľa", dayName:"Syropôstna nedeľa"},
    {week:6, day:1, dayWeek:"Pondelok", dayName:"Pondelok 1. týždňa Veľkého pôstu", sixthHour:"Iz 1:1-20", vespers1:"Gn 1:1-13", vespers2:"Pris 1:1-20"},
    {week:6, day:2, dayWeek:"Utorok", dayName:"Utorok 1. týždňa Veľkého pôstu", sixthHour:"Iz 1:19-2:3", vespers1:"Gn 1:14-23", vespers2:"Pris 1:20-33"},
    {week:6, day:3, dayWeek:"Streda", dayName:"Streda 1. týždňa Veľkého pôstu", sixthHour:"Iz 2:3-11", vespers1:"Gn 1:24-2:3", vespers2:"Pris 2:1-21"},
    {week:6, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 1. týždňa Veľkého pôstu", sixthHour:"Iz 2:11-21", vespers1:"Gn 2:4-19", vespers2:"Pris 3:1-19"},
    {week:6, day:5, dayWeek:"Piatok", dayName:"Piatok 1. týždňa Veľkého pôstu", sixthHour:"Iz 3:1-14", vespers1:"Gn 2:20-3:20", vespers2:"Pris 3:19-34"},
    {week:6, day:6, dayWeek:"Sobota", dayName:"Sobota 1. týždňa Veľkého pôstu", epistle:"Heb 1:1-12", gospel:"Mk 2:23-3:5"},
    {week:6, day:0, dayWeek:"Nedeľa", dayName:"Nedeľa 1. týždňa Veľkého pôstu", epistle:"Heb 11:24-26,32-12:2", gospel:"Jn 1:43-51"},
    {week:5, day:1, dayWeek:"Pondelok", dayName:"Pondelok 2. týždňa Veľkého pôstu", sixthHour:"Iz 4:2-6; 5:1-7", vespers1:"Gn 3:21-4:7", vespers2:"Pris 3:34-4:22"},
    {week:5, day:2, dayWeek:"Utorok", dayName:"Utorok 2. týždňa Veľkého pôstu", sixthHour:"Iz 5:7-16", vespers1:"Gn 4:8-15", vespers2:"Pris 5:1-15"},
    {week:5, day:3, dayWeek:"Streda", dayName:"Streda 2. týždňa Veľkého pôstu", sixthHour:"Iz 5:16-26", vespers1:"Gn 4:16-26", vespers2:"Pris 5:15-6:3"},
    {week:5, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 2. týždňa Veľkého pôstu", sixthHour:"Iz 6:1-12", vespers1:"Gn 5:1-24", vespers2:"Pris 6:3-20"},
    {week:5, day:5, dayWeek:"Piatok", dayName:"Piatok 2. týždňa Veľkého pôstu", sixthHour:"Iz 7:1-14", vespers1:"Gn 5:32-6:8", vespers2:"Pris 6:20-7:1"},
    {week:5, day:6, dayWeek:"Sobota", dayName:"Sobota 2. týždňa Veľkého pôstu", epistle:"Heb 3:12-16", gospel:"Mk 1:35-44", altEpistle:"1 Sol 4:13-17 (All Souls)", altGospel:"Jn 5:24-30 (All Souls)"},
    {week:5, day:0, dayWeek:"Nedeľa", dayName:"Nedeľa 2. týždňa Veľkého pôstu", epistle:"Heb 1:10-2:3", gospel:"Mk 2:1-12", altEpistle:"Heb 7:26-8:2 (St. Gregory)", altGospel:"Jn 10:9-19 (St. Gregory)"},
    {week:4, day:1, dayWeek:"Pondelok", dayName:"Pondelok 3. týždňa Veľkého pôstu", sixthHour:"Iz 8:13-9:7", vespers1:"Gn 6:9-22", vespers2:"Pris 8:1-21"},
    {week:4, day:2, dayWeek:"Utorok", dayName:"Utorok 3. týždňa Veľkého pôstu", sixthHour:"Iz 9:9-10:4", vespers1:"Gn 7:1-5", vespers2:"Pris 8:32-9:11"},
    {week:4, day:3, dayWeek:"Streda", dayName:"Streda 3. týždňa Veľkého pôstu", sixthHour:"Iz 10:12-20", vespers1:"Gn 7:6-9", vespers2:"Pris 9:12-18"},
    {week:4, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 3. týždňa Veľkého pôstu", sixthHour:"Iz 11:10-12:2", vespers1:"Gn 7:11-8:3", vespers2:"Pris 10:1-22"},
    {week:4, day:5, dayWeek:"Piatok", dayName:"Piatok 3. týždňa Veľkého pôstu", sixthHour:"Iz 13:2-13", vespers1:"Gn 8:4-21", vespers2:"Pris 10:31-11:12"},
    {week:4, day:6, dayWeek:"Sobota", dayName:"Sobota 3. týždňa Veľkého pôstu", epistle:"Heb 10:32-38", gospel:"Mk 2:14-17", altEpistle:"1 Sol 4:13-17 (All Souls)", altGospel:"Jn 5:24-30 (All Souls)"},
    {week:4, day:0, dayWeek:"Nedeľa", dayName:"Nedeľa 3. týždňa Veľkého pôstu", epistle:"Heb 4:14-5:6", gospel:"Mk 8:34-9:1"},
    {week:3, day:1, dayWeek:"Pondelok", dayName:"Pondelok 4. týždňa Veľkého pôstu", sixthHour:"Iz 14:24-32", vespers1:"Gn 8:21-9:7", vespers2:"Pris 11:19-12:6"},
    {week:3, day:2, dayWeek:"Utorok", dayName:"Utorok 4. týždňa Veľkého pôstu", sixthHour:"Iz 25:1-9", vespers1:"Gn 9:8-17", vespers2:"Pris 12:8-22"},
    {week:3, day:3, dayWeek:"Streda", dayName:"Streda 4. týždňa Veľkého pôstu", sixthHour:"Iz 26:21-27:9", vespers1:"Gn 9:18-10:1", vespers2:"Pris 12:23-13:9"},
    {week:3, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 4. týždňa Veľkého pôstu", sixthHour:"Iz 28:14-22", vespers1:"Gn 10:32-11:9", vespers2:"Pris 13:20-14:6"},
    {week:3, day:5, dayWeek:"Piatok", dayName:"Piatok 4. týždňa Veľkého pôstu", sixthHour:"Iz 29:13-23", vespers1:"Gn 12:1-7", vespers2:"Pris 14:15-26"},
    {week:3, day:6, dayWeek:"Sobota", dayName:"Sobota 4. týždňa Veľkého pôstu", epistle:"Heb 6:9-12", gospel:"Mk 7:31-37", altEpistle:"1 Sol 4:13-17 (All Souls)", altGospel:"Jn 5:24-30 (All Souls)"},
    {week:3, day:0, dayWeek:"Nedeľa", dayName:"Nedeľa 4. týždňa Veľkého pôstu", epistle:"Heb 6:13-20", gospel:"Mk 9:17-31", altEpistle:"Ef 5:9-19 (St. Jn)", altGospel:"Mt 4:25-5:12 (St. Jn)"},
    {week:2, day:1, dayWeek:"Pondelok", dayName:"Pondelok 5. týždňa Veľkého pôstu", sixthHour:"Iz 37:33-36:6", vespers1:"Gn 13:12-18", vespers2:"Pris 14:27-15:4"},
    {week:2, day:2, dayWeek:"Utorok", dayName:"Utorok 5. týždňa Veľkého pôstu", sixthHour:"Iz 40:18-31", vespers1:"Gn 15:1-15", vespers2:"Pris 15:7-19"},
    {week:2, day:3, dayWeek:"Streda", dayName:"Streda 5. týždňa Veľkého pôstu", sixthHour:"Iz 41:4-14", vespers1:"Gn 17:1-9", vespers2:"Pris 15:20-16:9"},
    {week:2, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 5. týždňa Veľkého pôstu", sixthHour:"Iz 42:5-16", vespers1:"Gn 18:20-33", vespers2:"Pris 16:17-17:17"},
    {week:2, day:5, dayWeek:"Piatok", dayName:"Piatok 5. týždňa Veľkého pôstu", sixthHour:"Iz 45:11-17", vespers1:"Gn 22:1-18", vespers2:"Pris 17:17-18:5"},
    {week:2, day:6, dayWeek:"Sobota", dayName:"Sobota 5. týždňa Veľkého pôstu", epistle:"Heb 9:24-28", gospel:"Mk 8:27-31", altEpistle:"Heb 9:1-7 (Akathistos Saturday)", altGospel:"Lk 10:38-42, 11:27-28 (Akathistos Saturday)"},
    {week:2, day:0, dayWeek:"Nedeľa", dayName:"Nedeľa 5. týždňa Veľkého pôstu", epistle:"Heb 9:11-14", gospel:"Mk 10:32-45"},
    {week:1, day:1, dayWeek:"Pondelok", dayName:"Pondelok 6. týždňa Veľkého pôstu", sixthHour:"Iz 48:17-49:4", vespers1:"Gn 27:1-41", vespers2:"Pris 19:16-25"},
    {week:1, day:2, dayWeek:"Utorok", dayName:"Utorok 6. týždňa Veľkého pôstu", sixthHour:"Iz 49:6-10", vespers1:"Gn 31:3-16", vespers2:"Pris 21:3-21"},
    {week:1, day:3, dayWeek:"Streda", dayName:"Streda 6. týždňa Veľkého pôstu", sixthHour:"Iz 58:1-11", vespers1:"Gn 43:26-31; 45:1-16", vespers2:"Pris 21:23-22:4"},
    {week:1, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 6. týždňa Veľkého pôstu", sixthHour:"Iz 65:8-16", vespers1:"Gn 46:1-7", vespers2:"Pris 23:15-24:5"},
    {week:1, day:5, dayWeek:"Piatok", dayName:"Piatok 6. týždňa Veľkého pôstu", sixthHour:"Iz 66:10-24", vespers1:"Gn 49:33-50:26", vespers2:"Pris 31:8-31"},
    {week:1, day:6, dayWeek:"Sobota", dayName:"Lazárova sobota", epistle:"Heb 12:28-13:8", gospel:"Jn 11:1-45"},
    {week:1, day:0, dayWeek:"Nedeľa", dayName:"Kvetná nedeľa", vespers1:"Gn 49:1,2,8-12", vespers2:"Sof 3:14-19", vespers3:"Zach 9:9-15", epistle:"Fil 4:4-9", gospel:"Jn 12:1-18", matinsGospel:"Mt 21:1-11,15-17"},
    {week:0, day:1, dayWeek:"Pondelok", dayName:"Pondelok veľkého týždňa", sixthHour:"Ez 1:1-20", vespers1:"Ex 1:1-20", vespers2:"Job 1:1-12", vespersGospel:"Mt 24:3-35", matinsGospel:"Mt 21:18-43"},
    {week:0, day:2, dayWeek:"Utorok", dayName:"Utorok veľkého týždňa", sixthHour:"Ez 1:21-2:1", vespers1:"Ex 2:5-10", vespers2:"Job 1:13-22", vespersGospel:"Mt 24:36-26:2", matinsGospel:"Mt 22:15-23:39"},
    {week:0, day:3, dayWeek:"Streda", dayName:"Streda veľkého týždňa", sixthHour:"Ez 2:3-3:3", vespers1:"Ex 2:11-22", vespers2:"Job 2:1-10", vespersGospel:"Mt 26:6-16", matinsGospel:"Jn 12:17-50"},
    {week:0, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok veľkého týždňa", vespers1:"Ex 19:10-19", vespers2:"Job 38:1-23; 42:1-5", vespers3:"Iz 50:4-11", epistle:"1 Kor 11:23-32", gospel:"Mt 26:1-20; Jn 13:3-17; Mt 26:21-39; Lk, 22:43-45; Mt 26:40-27:2 (Composite Reading)", matinsGospel:"Lk 22:1-39"},
    {week:0, day:5, dayWeek:"Piatok", dayName:"Piatok veľkého týždňa", sixthHour:"Royal readings", vespers1:"Ex 33:11-23", vespers2:"Job 42:12-16", vespers3:"Iz 52:13-54:1", epistle:"1 Kor 1:18-2:2", gospel:"Mt 27:1-38; Lk 23:39-43; Mt 27:39-54; Jn 19:31-37; Mt 27:55-61 (Composite Reading)", matinsGospel:"12 passion gospels"},
    {week:0, day:6, dayWeek:"Sobota", dayName:"Sobota veľkého týždňa", vespers1:"15 vesperal readings", epistle:"Rim 6:3-11", gospel:"Mt 28:1-20", matinsGospel:"3 matinal readings"}
];

export default readings;