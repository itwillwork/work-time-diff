import { TimeIntervalT, UnitT } from './models';
import moment from 'moment';

export const getSummaryTimeIntervalsDiff = (timeIntervals: Array<TimeIntervalT>): UnitT => {
    return timeIntervals.reduce((result, timeInterval) => {
        const startTimeInterval = moment.parseZone(timeInterval[0]);
        const endTimeInterval = moment.parseZone(timeInterval[1]);

        result += endTimeInterval.diff(startTimeInterval, 'minutes');

        return result;
    }, 0);
};
