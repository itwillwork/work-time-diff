import { checkIsValidTimeInterval } from './check-is-valid-time-interval';

const cases: Array<[...Parameters<typeof checkIsValidTimeInterval>, ReturnType<typeof checkIsValidTimeInterval>]> = [
    // regular
    [['2023-05-27T10:00:00+03:00', '2023-05-27T20:00:00+03:00'], true],
    // start after end
    [['2023-05-26T22:58:09+03:00', '2023-05-26T20:00:00+03:00'], false],
    // end before start
    [['2023-05-29T10:00:00+03:00', '2023-05-29T01:58:09+03:00'], false],
    // not same date
    [['2023-05-26T10:00:00+03:00', '2023-05-29T20:00:00+03:00'], false],
    // not same month
    [['2023-05-26T10:00:00+03:00', '2023-06-26T20:00:00+03:00'], false],
    // not same year
    [['2023-05-26T10:00:00+03:00', '2026-05-26T20:00:00+03:00'], false],
];

describe("'checkIsValidTimeInterval' utility", () => {
    test.each(cases)('%#. checkIsValidTimeInterval(%j) === %j', (sourceTimeIntervals, expectedResult) => {
        expect(checkIsValidTimeInterval(sourceTimeIntervals)).toEqual(expectedResult);
    });
});
