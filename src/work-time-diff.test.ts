import { getWorkTimeDiff } from './index';

const workingTime = {
    workingHours: {
        from: 10,
        to: 20,
    },
    workingDays: ['1', '2', '3', '4', '5'],
    daysOff: ['2023-05-29'],
};

const cases: Array<[...Parameters<typeof getWorkTimeDiff>, ReturnType<typeof getWorkTimeDiff>]> = [
    [workingTime, '2023-05-26T14:00:00+03:00', '2023-05-30T14:00:00+03:00', 'days', 1],
    [workingTime, '2023-05-26T14:00:00+03:00', '2023-05-30T14:00:00+03:00', 'hours', 10],
    [workingTime, '2023-05-26T14:00:00+03:00', '2023-05-30T14:00:00+03:00', 'minutes', 60 * 10],

    // invert
    [workingTime, '2023-05-30T14:00:00+03:00', '2023-05-26T14:00:00+03:00', 'hours', -10],

    // different timezones with invert
    [workingTime, '2023-05-30T14:00:00+03:00', '2023-05-26T12:00:00+01:00', 'hours', -10],
];

describe("'getWorkTimeDiff' utility", () => {
    test.each(cases)('%#. getWorkTimeDiff(%j, %s, %s, %s) === %i', (workingTime, startTime, endTime, unitType, expectedResult) => {
        expect(getWorkTimeDiff(workingTime, startTime, endTime, unitType)).toEqual(expectedResult);
    });
});
