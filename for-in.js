// const numbers=[22,34,44,54,56,67];

// for(const number of numbers){         ---->ekhane array te loop chalaite amra use kori holo for.....of.........;
// console.log(number)}

const student= {
    name:'Goru Alamin',
    id: 987,
    age:24,
    favSub:['Bangla','Sociology','Religious']
}

//ar key te loop chalaite amra use korbo holo for..........key in..........;

for(const key in student){
    const value =student[key];
    console.log(key,':', value);
}