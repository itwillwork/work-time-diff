import { ISOTimeT, TimeIntervalT } from './models';
import moment from 'moment/moment';

export const createTimeInterval = (startTime: ISOTimeT, endTime: ISOTimeT): [number, TimeIntervalT] => {
    const start = moment.parseZone(startTime);
    const end = moment.parseZone(endTime);

    const isValidInterval = start.isBefore(end);

    const sign = isValidInterval ? 1 : -1;
    const timeInterval: TimeIntervalT = isValidInterval ? [startTime, endTime] : [endTime, startTime];

    return [sign, timeInterval];
};
