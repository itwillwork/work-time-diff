import { DateT, TimeIntervalT, WorkingTimeT } from './models';
import moment, { Moment } from 'moment';
import { getDaysBetweenDates } from './get-days-between-dates';

const setMomentDateTime = (sourceDate: Moment, date: DateT, hour: number): Moment => {
    const [year, month, day] = date.split('-');

    sourceDate.set('date', +day);
    sourceDate.set('month', +month - 1);
    sourceDate.set('year', +year);

    sourceDate.set('hours', hour);
    sourceDate.set('minutes', 0);
    sourceDate.set('second', 0);

    return sourceDate;
};

export const splitTimeInterval = (workingTime: WorkingTimeT, sourceTimeInterval: TimeIntervalT): Array<TimeIntervalT> => {
    const dates = getDaysBetweenDates(sourceTimeInterval[0], sourceTimeInterval[1]);

    const timeIntervals = dates.map((date): TimeIntervalT => {
        return [
            setMomentDateTime(moment.parseZone(sourceTimeInterval[0]), date, workingTime.workingHours.from).format(),
            setMomentDateTime(moment.parseZone(sourceTimeInterval[1]), date, workingTime.workingHours.to).format(),
        ];
    });

    // set start
    timeIntervals[0][0] = sourceTimeInterval[0];

    // set end
    timeIntervals[timeIntervals.length - 1][1] = sourceTimeInterval[1];

    return timeIntervals;
};
