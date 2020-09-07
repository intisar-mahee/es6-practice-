const doubleIt = num => num*2;
const add=(x,y)=> x+y;
const give5=()=>5;
const result = add(5,15);
const result2= give5();

const newMAth=(x,y)=>{
    const sum = x+y;
    const minus = x-y;
    const final = sum*minus;
    return final;
}
const result4 = newMAth(15 , 10);
console.log(result4);