### work-time-diff

```ts
const { getWorkTimeDiff } = require('work-time-diff');

const workingTime = {
    workingHours: {
        from: 10,
        to: 20,
    },
    workingDays: ['1', '2', '3', '4', '5'],
    daysOff: ['2023-05-29'],
};

const diff = getWorkTimeDiff(workingTime, '2023-05-26T14:00:00+03:00', '2023-05-30T14:00:00+03:00', 'hours');

console.log(diff); // 10
```
