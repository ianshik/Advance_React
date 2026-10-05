const numbers1=[10,30,20,70,68,40];
const numbers2=[10,30,20,70,68,40];
const numbers3=[10,30,20,70,68,40];

const doubled=numbers1.map(x=>2*x);
const divby7=numbers2.filter(x=>x%7==0);
const avg=numbers3.reduce((x,y)=>{
    x=x+y;
    return x;
},0)/numbers3.length;

doubled.forEach(element => {
    console.log(element);
});

divby7.forEach(element => {
    console.log(element);
});

console.log(avg);