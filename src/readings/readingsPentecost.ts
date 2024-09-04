export class ReadingsPentecost {
    week: number;
    day: number;
    dayWeek: string;
    dayName: string;
    epistle?: string;
    gospel?: string;
    altEpistle?: string;
    altGospel?: string;
    vespers1?: string;
    vespers2?: string;
    vespers3?: string;
    vespersGospel?: string;
    matinsGospel?: string;
};

let readings: ReadingsPentecost[] = [
    {week:0, day:0, dayWeek:"Nedeľa", dayName:"Pascha", epistle:"Sk §1 (1:1-8)", gospel:"Jn §1 (1:1-17)", vespersGospel:"Jn §65 (20:19-25)"},
    {week:0, day:1, dayWeek:"Pondelok", dayName:"Pondelok svetlého týždňa", epistle:"Sk §2 (1:12-17, 21-26)", gospel:"Jn §2 (1:18-28)"},
    {week:0, day:2, dayWeek:"Utorok", dayName:"Utorok svetlého týždňa", epistle:"Sk §4 (2:14-21)", gospel:"Lk §113 (24:12-35)"},
    {week:0, day:3, dayWeek:"Streda", dayName:"Streda svetlého týždňa", epistle:"Sk §5 (2:22-36)", gospel:"Jn §4 (1:35-51)"},
    {week:0, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok svetlého týždňa", epistle:"Sk §6 (2:38-43)", gospel:"Jn §8 (3:1-15)"},
    {week:0, day:5, dayWeek:"Piatok", dayName:"Piatok svetlého týždňa", epistle:"Sk §7 (3:1-8)", gospel:"Jn §7 (2:12-22)"},
    {week:0, day:6, dayWeek:"Sobota", dayName:"Sobota svetlého týždňa", epistle:"Sk §8 (3:11-16)", gospel:"Jn §11 (3:22-33)"},
    {week:1, day:0, dayWeek:"Nedeľa", dayName:"Antipascha", epistle:"Sk §14 (5:12-20)", gospel:"Jn §65 (20:19-31)", matinsGospel:"Mt §116 (28:16-20)"},
    {week:1, day:1, dayWeek:"Pondelok", dayName:"Pondelok 1. týždňa Päťdesiatnice", epistle:"Sk §9 (3:19-26)", gospel:"Jn §6 (2:1-11)"},
    {week:1, day:2, dayWeek:"Utorok", dayName:"Utorok 1. týždňa Päťdesiatnice", epistle:"Sk §10 (4:1-10)", gospel:"Jn §10 (3:16-21)"},
    {week:1, day:3, dayWeek:"Streda", dayName:"Streda 1. týždňa Päťdesiatnice", epistle:"Sk §11 (4:13-22)", gospel:"Jn §15 (5:17b-24)"},
    {week:1, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 1. týždňa Päťdesiatnice", epistle:"Sk §12 (4:23-31)", gospel:"Jn §16 (5:24-30)"},
    {week:1, day:5, dayWeek:"Piatok", dayName:"Piatok 1. týždňa Päťdesiatnice", epistle:"Sk §13 (5:1-11)", gospel:"Jn §17 (5:30b-6:2)"},
    {week:1, day:6, dayWeek:"Sobota", dayName:"Sobota 1. týždňa Päťdesiatnice", epistle:"Sk §15 (5:21-33)", gospel:"Jn §19 (6:14-27)"},
    {week:2, day:0, dayWeek:"Nedeľa", dayName:"Nedeľa 2. týždňa Päťdesiatnice", epistle:"Sk §16 (6:1-7)", gospel:"Mk §69 (15:43-16:8)", matinsGospel:"Mk §71 (16:9-20)"},
    {week:2, day:1, dayWeek:"Pondelok", dayName:"Pondelok 2. týždňa Päťdesiatnice", epistle:"Sk §17 (6:8-7:5a, 47-60)", gospel:"Jn §13 (4:46b-54)"},
    {week:2, day:2, dayWeek:"Utorok", dayName:"Utorok 2. týždňa Päťdesiatnice", epistle:"Sk §18 (8:5-17)", gospel:"Jn §20 (6:27-33)"},
    {week:2, day:3, dayWeek:"Streda", dayName:"Streda 2. týždňa Päťdesiatnice", epistle:"Sk §19 (8:18-25)", gospel:"Jn §21 (6:35-39)"},
    {week:2, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 2. týždňa Päťdesiatnice", epistle:"Sk §20 (8:26-39)", gospel:"Jn §22 (6:40-44)"},
    {week:2, day:5, dayWeek:"Piatok", dayName:"Piatok 2. týždňa Päťdesiatnice", epistle:"Sk §21 (8:40-9:19a)", gospel:"Jn §23 (6:48-54)"},
    {week:2, day:6, dayWeek:"Sobota", dayName:"Sobota 2. týždňa Päťdesiatnice", epistle:"Sk §22 (9:19-31)", gospel:"Jn §52 (15:17-16:2)"},
    {week:3, day:0, dayWeek:"Nedeľa", dayName:"Nedeľa 3. týždňa Päťdesiatnice", epistle:"Sk §23 (9:32-42)", gospel:"Jn §14 (5:1-15)", matinsGospel:"Lk §112 (24:1-12)"},
    {week:3, day:1, dayWeek:"Pondelok", dayName:"Pondelok 3. týždňa Päťdesiatnice", epistle:"Sk §24 (10:1-16)", gospel:"Jn §24 (6:56-69)"},
    {week:3, day:2, dayWeek:"Utorok", dayName:"Utorok 3. týždňa Päťdesiatnice", epistle:"Sk §25 (10:21-33)", gospel:"Jn §25 (7:1-13)"},
    {week:3, day:3, dayWeek:"Streda", dayName:"Streda 3. týždňa Päťdesiatnice", epistle:"Sk §34 (14:6b-18)", gospel:"Jn §26 (7:14-30)", vespers1:"Mich 4:2-3, 5; 5:2-5, 8", vespers2:"Iz 55:1-3, 6-13", vespers3:"Pris 9:1-11"},
    {week:3, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 3. týždňa Päťdesiatnice", epistle:"Sk §26 (10:34-43)", gospel:"Jn §29 (8:12-20)"},
    {week:3, day:5, dayWeek:"Piatok", dayName:"Piatok 3. týždňa Päťdesiatnice", epistle:"Sk §27 (10:44-11:10)", gospel:"Jn §30 (8:21-30)"},
    {week:3, day:6, dayWeek:"Sobota", dayName:"Sobota 3. týždňa Päťdesiatnice", epistle:"Sk §29 (12:1-11)", gospel:"Jn §31 (8:31-42a)"},
    {week:4, day:0, dayWeek:"Nedeľa", dayName:"Nedeľa 4. týždňa Päťdesiatnice", epistle:"Sk §28 (11:19-26, 29-30)", gospel:"Jn §12 (4:5-42)",  matinsGospel:"Jn §63 (20:1-10)"},
    {week:4, day:1, dayWeek:"Pondelok", dayName:"Pondelok 4. týždňa Päťdesiatnice", epistle:"Sk §30 (12:12-17)", gospel:"Jn §32 (8:42-51)"},
    {week:4, day:2, dayWeek:"Utorok", dayName:"Utorok 4. týždňa Päťdesiatnice", epistle:"Sk §31 (12:25-13:12)", gospel:"Jn §33 (8:51-59)"},
    {week:4, day:3, dayWeek:"Streda", dayName:"Streda 4. týždňa Päťdesiatnice", epistle:"Sk §32 (13:13-24)", gospel:"Jn §18 (6:5-14)"},
    {week:4, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 4. týždňa Päťdesiatnice", epistle:"Sk §35 (14:20b-27)", gospel:"Jn §35 (9:39-10:9)"},
    {week:4, day:5, dayWeek:"Piatok", dayName:"Piatok 4. týždňa Päťdesiatnice", epistle:"Sk §36 (15:5-34)", gospel:"Jn §37 (10:17-28)"},
    {week:4, day:6, dayWeek:"Sobota", dayName:"Sobota 4. týždňa Päťdesiatnice", epistle:"Sk §37 (15:35-41)", gospel:"Jn §38 (10:27-38)"},
    {week:5, day:0, dayWeek:"Nedeľa", dayName:"Nedeľa 5. týždňa Päťdesiatnice", epistle:"Sk §38 (16:16-34)", gospel:"Jn §34 (9:1-38)", matinsGospel:"Jn §64 (20:11-18)"},
    {week:5, day:1, dayWeek:"Pondelok", dayName:"Pondelok 5. týždňa Päťdesiatnice", epistle:"Sk §39 (17:1-15)", gospel:"Jn §40 (11:47-56)"},
    {week:5, day:2, dayWeek:"Utorok", dayName:"Utorok 5. týždňa Päťdesiatnice", epistle:"Sk §40a (17:19-28a)", gospel:"Jn §42 (12:19-36a)"},
    {week:5, day:3, dayWeek:"Streda", dayName:"Streda 5. týždňa Päťdesiatnice", epistle:"Sk §41 (18:22-28)", gospel:"Jn §43 (12:36-47)"},
    {week:5, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 5. týždňa Päťdesiatnice", epistle:"Sk §1 (1:1-12)", gospel:"Luke §114 (24:36-53)", matinsGospel:"Mk §71 (16:9-20)", vespers1:"Iz 2:2-3", vespers2:"Iz 62:10-63:3, 7-9", vespers3:"Zach 14:1, 4, 8-11"},
    {week:5, day:5, dayWeek:"Piatok", dayName:"Piatok 5. týždňa Päťdesiatnice", epistle:"Sk §42 (19:1-8)", gospel:"Jn §47 (14:1-11a)"},
    {week:5, day:6, dayWeek:"Sobota", dayName:"Sobota 5. týždňa Päťdesiatnice", epistle:"Sk §43 (20:7-12)", gospel:"Jn §48 (14:10b-21)"},
    {week:6, day:0, dayWeek:"Nedeľa", dayName:"Nedeľa 6. týždňa Päťdesiatnice", epistle:"Sk §44 (20:16-18a, 28-36)", gospel:"Jn §56 (17:1-13)", matinsGospel:"Jn §66 (21:1-14)", vespers1:"Gen 14:14-20", vespers2:"Dt 1:8-11, 15-17", vespers3:"Dt 10:14-21"},
    {week:6, day:1, dayWeek:"Pondelok", dayName:"Pondelok 6. týždňa Päťdesiatnice", epistle:"Sk §45 (21:8-14)", gospel:"Jn §49 (14:27b-15:7)"},
    {week:6, day:2, dayWeek:"Utorok", dayName:"Utorok 6. týždňa Päťdesiatnice", epistle:"Sk §46 (21:26-32)", gospel:"Jn §53 (16:2b-13a)"},
    {week:6, day:3, dayWeek:"Streda", dayName:"Streda 6. týždňa Päťdesiatnice", epistle:"Sk §47 (23:1-11)", gospel:"Jn §54 (16:15-23)"},
    {week:6, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 6. týždňa Päťdesiatnice", epistle:"Sk §48 (25:13-19)", gospel:"Jn §55 (16:23b-33a)"},
    {week:6, day:5, dayWeek:"Piatok", dayName:"Piatok 6. týždňa Päťdesiatnice", epistle:"Sk §50 (27:1-44)", gospel:"Jn §57 (17:18-26)"},
    {week:6, day:6, dayWeek:"Sobota", dayName:"Sobota 6. týždňa Päťdesiatnice", epistle:"Sk §51 (28:1-31)", gospel:"Jn §67 (21:15-25)", altEpistle:"1 Sol §270 (4:13-17)", altGospel:"Jn §16 (5:24-30)"},
    {week:7, day:0, dayWeek:"Nedeľa", dayName:"Päťdesiatnica", epistle:"Sk §3 (2:1-11)", gospel:"Jn §27 (7:37-52; 8:12)", matinsGospel:"Jn §65 (20:19-23)", vespers1:"Num 11:16-17, 24-29", vespers2:"Joel 2:23-32", vespers3:"Ez 36:24-28"}
    ];


export default readings;