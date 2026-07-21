const subject = 'chemistry';
const book = 'Chemistry';
//this is case sensitive , so the out put is else.eita jodi thik korte hoy taile amader ki korte hbe? je jinis ta amra upper case e likhsi condition mane if er vitore seita.toLowerCase(); kore dite hbe.Same jinis ta amra toUpperCase(); kore dileo same hobe.
if(subject.toLowerCase()===book.toLowerCase()){
    // console.log('Poira fatai dimu😉')
}

else{
    // console.log('Boi i nai ki bal pormu🤷')
}

const email = '    tanvir@gmail.com   ';// eikhane unexpectec space pore gele amta console log korar somoy name likhe tarpor ".trim()" dibo.
const pass = '@tanvir@tt';

console.log(email.trim().toUpperCase())
//trim abr 3 prokar ,
//trim()- jekhane space thak kete debe
//trimstart()- protom er space kete dibe
//trimend()- sesh er space katbe