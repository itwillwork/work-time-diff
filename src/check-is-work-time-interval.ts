import { TimeIntervalT, WorkingTimeT } from './models';
import moment from 'moment';

export const checkIsWorkTimeInterval = (workingTime: WorkingTimeT) => {
    const workingWeekDaysSet = new Set(workingTime.workingDays);
    const dayOffDaysSet = new Set(workingTime.daysOff);

    return (timeInterval: TimeIntervalT): boolean => {
        const time = moment.parseZone(timeInterval[0]);

        const isWorkingWeekDay = workingWeekDaysSet.has(time.format('E'));
        const isDayOff = dayOffDaysSet.has(time.format('YYYY-MM-DD'));

        return isWorkingWeekDay && !isDayOff;
    };
};
