const college ={
    name: 'Nalta Bokachoda college',
    address: 'Nalta',
    student: 1200,
    events: ['21 feb', 'Independent day', 'Victory day'],
    people:{
        total:90,
        Principle:{
            name:'Goru hossain',
            experience:'No experience',
            degree:'Bo Kolom'
        }
    }
}

console.log(college.people.total)
console.log(college['people']['Principle']['name'])
college.events[2]='Moron Day'
console.log(college.events)