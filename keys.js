const person={
    name:'Goru🐄',
    profession:'Ghas Khawya',
    age:'1 year',
    isSingle:true,
    'home address':'Goyal'
}
delete person.age;//kono kisu delete korte 
console.log(person);

const keys = Object.keys(person);// key kotar name janar jonno 
console.log(keys);

const values = Object.values(person);//key er value janar jonno
console.log(values);

console.log(Object.entries(person));// key ar value aksathe akekta array er moddhe anar jonno .