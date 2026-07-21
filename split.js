const companiesStr ='Tesla SpaceX Paypal NeuraLink Solarcity Twitter'
const companies = companiesStr.split('a');//empty string dile protita word vangbe ar space dile word gula ke vangbe.othoba kono charecter (a,b,c) diye vag korle jekhane oi character pabe sekhan theke vag korbe. 
console.log(companies);

const againStr= companies.join(' ')
console.log(againStr)