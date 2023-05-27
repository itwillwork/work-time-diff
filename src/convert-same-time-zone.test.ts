import { convertSameTimeZone } from './convert-same-time-zone';

const cases: Array<[...Parameters<typeof convertSameTimeZone>, ReturnType<typeof convertSameTimeZone>]> = [
    ['2023-05-26T13:58:09+01:00', '2023-05-26T00:00:00+01:00', '2023-05-26T13:58:09+01:00'],
    ['2023-05-26T13:58:09+03:00', '2023-05-26T00:00:00+01:00', '2023-05-26T11:58:09+01:00'],
];

describe("'convertSameTimeZone' utility", () => {
    test.each(cases)('%#. convertSameTimeZone(%j, %s) === %d', (workingTime, unitType, expectedResult) => {
        expect(convertSameTimeZone(workingTime, unitType)).toEqual(expectedResult);
    });
});
