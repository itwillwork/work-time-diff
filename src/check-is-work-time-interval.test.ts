import { checkIsWorkTimeInterval } from './check-is-work-time-interval';

const workingTime = {
    workingHours: {
        from: 10,
        to: 20,
    },
    workingDays: ['1', '2', '3', '4', '5'],
    daysOff: ['2023-05-30'],
};

const cases: Array<[...Parameters<ReturnType<typeof checkIsWorkTimeInterval>>, ReturnType<ReturnType<typeof checkIsWorkTimeInterval>>]> = [
    // regular
    [['2023-05-26T10:00:00+03:00', '2023-05-26T20:00:00+03:00'], true],
    // weekend
    [['2023-05-27T10:00:00+03:00', '2023-05-27T20:00:00+03:00'], false],
    // day off
    [['2023-05-30T10:00:00+03:00', '2023-05-30T20:00:00+03:00'], false],
];

describe("'checkIsWorkTimeInterval' utility", () => {
    test.each(cases)('%#. checkIsWorkTimeInterval(%j) === %j', (sourceTimeIntervals, expectedResult) => {
        expect(checkIsWorkTimeInterval(workingTime)(sourceTimeIntervals)).toEqual(expectedResult);
    });
});
