const ages = [12, 14, 16, 19];
const ages2 = [15, 16,13];
const ages3 = [14, 163,143];
const allAges = ages.concat(ages2).concat(ages3).concat([69]);

const allAges2 = [...ages, ...ages2, ...ages3, 69];
// console.log(allAges2);

const bdt = [678,325,243,342];
const max = Math.min(...bdt);
console.log(max);