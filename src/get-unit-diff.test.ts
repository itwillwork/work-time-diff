import { getUnitDiff } from './get-unit-diff';

const workingTime = {
    workingHours: {
        from: 10,
        to: 20,
    },
    workingDays: ['1', '2', '3', '4', '5'],
    daysOff: [],
};

const cases: Array<[...Parameters<typeof getUnitDiff>, ReturnType<typeof getUnitDiff>]> = [
    [workingTime, 'minutes', 1],
    [workingTime, 'hours', 60],
    [workingTime, 'days', 600],
    [workingTime, 'weeks', 3000],
];

describe("'getUnitDiff' utility", () => {
    test.each(cases)('%#. getUnitDiff(%j, %s) === %d', (workingTime, unitType, expectedResult) => {
        expect(getUnitDiff(workingTime, unitType)).toEqual(expectedResult);
    });
});
