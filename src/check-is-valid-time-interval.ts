import { TimeIntervalT } from './models';
import moment from 'moment';

export const checkIsValidTimeInterval = (timeInterval: TimeIntervalT): boolean => {
    const startTime = moment.parseZone(timeInterval[0]);
    const endTime = moment.parseZone(timeInterval[1]);

    return startTime.isSame(endTime, 'year') && startTime.isSame(endTime, 'month') && startTime.isSame(endTime, 'date') && startTime.isBefore(endTime);
};
