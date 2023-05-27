export type UnitTypeT = 'minutes' | 'hours' | 'days' | 'weeks';
export type UnitT = number; // min
export type ISOTimeT = string;
export type DateT = string;
export type TimeIntervalT = [ISOTimeT, ISOTimeT];
export type WorkingTimeT = {
    workingHours: {
        from: number;
        to: number;
    };
    workingDays: string[];
    daysOff: string[];
};
