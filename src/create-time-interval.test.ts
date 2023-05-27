import { createTimeInterval } from './create-time-interval';

const cases: Array<[...Parameters<typeof createTimeInterval>, ReturnType<typeof createTimeInterval>]> = [
    ['2023-05-26T10:00:00+01:00', '2023-05-26T20:00:00+01:00', [1, ['2023-05-26T10:00:00+01:00', '2023-05-26T20:00:00+01:00']]],
    ['2023-05-26T20:00:00+01:00', '2023-05-26T10:00:00+01:00', [-1, ['2023-05-26T10:00:00+01:00', '2023-05-26T20:00:00+01:00']]],
];

describe("'createTimeInterval' utility", () => {
    test.each(cases)('%#. createTimeInterval(%s, %s) === %j', (workingTime, unitType, expectedResult) => {
        expect(createTimeInterval(workingTime, unitType)).toEqual(expectedResult);
    });
});
