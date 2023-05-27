import { splitTimeInterval } from './split-time-interval';

const workingTime = {
    workingHours: {
        from: 10,
        to: 20,
    },
    workingDays: ['1', '2', '3', '4', '5'],
    daysOff: [],
};

const cases: Array<[...Parameters<typeof splitTimeInterval>, ReturnType<typeof splitTimeInterval>]> = [
    [
        workingTime,
        ['2023-05-26T13:58:09+03:00', '2023-05-29T13:58:09+03:00'],
        [
            ['2023-05-26T13:58:09+03:00', '2023-05-26T20:00:00+03:00'],
            ['2023-05-27T10:00:00+03:00', '2023-05-27T20:00:00+03:00'],
            ['2023-05-28T10:00:00+03:00', '2023-05-28T20:00:00+03:00'],
            ['2023-05-29T10:00:00+03:00', '2023-05-29T13:58:09+03:00'],
        ],
    ],
    // check time zone
    [
        workingTime,
        ['2023-05-26T13:58:09+01:00', '2023-05-29T13:58:09+01:00'],
        [
            ['2023-05-26T13:58:09+01:00', '2023-05-26T20:00:00+01:00'],
            ['2023-05-27T10:00:00+01:00', '2023-05-27T20:00:00+01:00'],
            ['2023-05-28T10:00:00+01:00', '2023-05-28T20:00:00+01:00'],
            ['2023-05-29T10:00:00+01:00', '2023-05-29T13:58:09+01:00'],
        ],
    ],
    // not range values
    [
        workingTime,
        ['2023-05-26T22:58:09+03:00', '2023-05-29T01:58:09+03:00'],
        [
            ['2023-05-26T22:58:09+03:00', '2023-05-26T20:00:00+03:00'],
            ['2023-05-27T10:00:00+03:00', '2023-05-27T20:00:00+03:00'],
            ['2023-05-28T10:00:00+03:00', '2023-05-28T20:00:00+03:00'],
            ['2023-05-29T10:00:00+03:00', '2023-05-29T01:58:09+03:00'],
        ],
    ],
];

describe("'splitTimeInterval' utility", () => {
    test.each(cases)('%#. splitTimeInterval(%j, %s) === %d', (workingTime, unitType, expectedResult) => {
        expect(splitTimeInterval(workingTime, unitType)).toEqual(expectedResult);
    });
});
