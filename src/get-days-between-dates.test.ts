import { getDaysBetweenDates } from './get-days-between-dates';

const cases: Array<[...Parameters<typeof getDaysBetweenDates>, ReturnType<typeof getDaysBetweenDates>]> = [
    ['2023-05-26T13:58:09+03:00', '2023-05-29T13:58:09+03:00', ['2023-05-26', '2023-05-27', '2023-05-28', '2023-05-29']],
    // check time zone
    ['2023-05-26T00:10:00+01:00', '2023-05-29T23:50:00+01:00', ['2023-05-26', '2023-05-27', '2023-05-28', '2023-05-29']],
    // check midninght
    ['2023-05-26T22:58:09+03:00', '2023-05-29T01:58:09+03:00', ['2023-05-26', '2023-05-27', '2023-05-28', '2023-05-29']],
];

describe("'getDaysBetweenDates' utility", () => {
    test.each(cases)('%#. getDaysBetweenDates(%s, %s) === %j', (workingTime, unitType, expectedResult) => {
        expect(getDaysBetweenDates(workingTime, unitType)).toEqual(expectedResult);
    });
});
