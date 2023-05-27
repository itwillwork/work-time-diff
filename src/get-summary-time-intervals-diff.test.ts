import { getSummaryTimeIntervalsDiff } from './get-summary-time-intervals-diff';

const workingTime = {
    workingHours: {
        from: 10,
        to: 20,
    },
    workingDays: ['1', '2', '3', '4', '5'],
    daysOff: [],
};

const cases: Array<[...Parameters<typeof getSummaryTimeIntervalsDiff>, ReturnType<typeof getSummaryTimeIntervalsDiff>]> = [
    // two intervals
    [
        [
            ['2023-05-27T10:00:00+03:00', '2023-05-27T20:00:00+03:00'],
            ['2023-05-28T10:00:00+03:00', '2023-05-28T20:00:00+03:00'],
        ],
        20 * 60,
    ],
    // revert intervals
    [[['2023-05-27T20:00:00+03:00', '2023-05-27T10:00:00+03:00']], -1 * 10 * 60],
];

describe("'getSummaryTimeIntervalsDiff' utility", () => {
    test.each(cases)('%#. getSummaryTimeIntervalsDiff(%j) === %i', (timeIntervals, expectedResult) => {
        expect(getSummaryTimeIntervalsDiff(timeIntervals)).toEqual(expectedResult);
    });
});
