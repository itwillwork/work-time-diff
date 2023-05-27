import { DateT, ISOTimeT } from './models';
import moment from 'moment/moment';

export const getDaysBetweenDates = (startDate: ISOTimeT, endDate: ISOTimeT) => {
    const currentDate = moment.parseZone(startDate).startOf('day');
    const dates: DateT[] = [];

    while (currentDate.isSameOrBefore(endDate)) {
        dates.push(currentDate.format('YYYY-MM-DD'));
        currentDate.add(1, 'days');
    }

    return dates;
};
