const ages = [18, 19, 22, 33];
const ages2 = [13, 15, 18, 16, 20];
const ages3 = [19, 23, 25, 28, 29];
const allAges = ages.concat(ages2).concat([5, 10]).concat(ages3);
const allAges2 = [ages, ages2, [5, 10], ages3];
const allAges3 = [...ages, ...ages2, ...[5, 10], ages3];
// console.log(allAges3);

const maxInArray = [350, 439, 840];
const max = Math.max(...maxInArray);
console.log(max);