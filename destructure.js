const person = {name: 'Jack William', age:18, job:'marketer', gfName:'kulsum'};


// const {name, job,gfName} = person;
// // const gfName = person.gfName;
// console.log(name, job, gfName);

const friends = ['sakib', 'sharukh', 'aamir','saif', 'kutta'];
const [chotofirst, porer, ...rest]= friends;
console.log(chotofirst,porer, ...rest);