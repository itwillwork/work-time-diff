import { getUnitDiff } from './get-unit-diff';
import { splitTimeInterval } from './split-time-interval';
import { ISOTimeT, UnitTypeT, WorkingTimeT } from './models';
import { getSummaryTimeIntervalsDiff } from './get-summary-time-intervals-diff';
import { convertSameTimeZone } from './convert-same-time-zone';
import { checkIsValidTimeInterval } from './check-is-valid-time-interval';
import { checkIsWorkTimeInterval } from './check-is-work-time-interval';
import { createTimeInterval } from './create-time-interval';

export const getWorkTimeDiff = (workingTime: WorkingTimeT, startISOTime: ISOTimeT, sourceEndIsoTime: ISOTimeT, unitType: UnitTypeT) => {
    const endISOTime = convertSameTimeZone(sourceEndIsoTime, startISOTime);

    const [sign, sourceTimeInterval] = createTimeInterval(startISOTime, endISOTime);

    const timeIntervals = splitTimeInterval(workingTime, sourceTimeInterval);

    const filteredTimeIntervals = timeIntervals.filter(checkIsValidTimeInterval).filter(checkIsWorkTimeInterval(workingTime));

    const summaryTimeIntervalsDiff = getSummaryTimeIntervalsDiff(filteredTimeIntervals);

    const unitDiff = getUnitDiff(workingTime, unitType);

    return sign * Math.floor(summaryTimeIntervalsDiff / unitDiff);
};
