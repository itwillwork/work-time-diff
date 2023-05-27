import { UnitT, UnitTypeT, WorkingTimeT } from './models';

const MIN = 1;
const MIN_IN_HOUR = MIN * 60;

export const getUnitDiff = (workingTime: WorkingTimeT, unitType: UnitTypeT): UnitT => {
    switch (unitType) {
        case 'minutes': {
            return MIN;
        }
        case 'hours': {
            return MIN_IN_HOUR;
        }
        case 'days': {
            const workingHoursDiff = workingTime.workingHours.to - workingTime.workingHours.from;
            return workingHoursDiff * MIN_IN_HOUR;
        }

        case 'weeks': {
            const workingHoursDiff = workingTime.workingHours.to - workingTime.workingHours.from;
            const weekDaysCount = workingTime.workingDays.length;
            return weekDaysCount * workingHoursDiff * MIN_IN_HOUR;
        }
        default: {
            return 0;
        }
    }
};
