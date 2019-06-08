const employers = [`Alex`, ``, `ludmila`, `Viktor`, ``, `oleg`, `iNna`, `Ivan`, `Alex`, `Olga`, ` Ann`];

const employersNames = employers.filter(el => typeof(el) === `string` && el.trim() != ``).map(el => el.toLowerCase().trim());

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: [`SRL`, `PLO`, `J&K`],
  rus: [`RusAuto`, `SBO`]
};

function calcCash(own = 0, [...everyCash]) {
  return everyCash.reduce((total = own, el) => total += el);
}

const money = calcCash(null, sponsors.cash);

const makeBusiness = (owner, director=`Victor`, cash, emp) => {
  let {eu} = sponsors;
  let sumSponsors = eu.concat(sponsors.rus, `unexpected sponsor`);
  console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors:
${sumSponsors}
Note. Be careful with ${eu[0]}. It's a huge risk.`);
};



class Calc{
  constructor (owner, director = `Victor`, cash, emp){
    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }
  dataCheck(){
    let {eu,rus} = sponsors;
    let sumSponsors = eu.concat(rus, `unexpected sponsor`);
  console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}
And we have a sponsors:
${sumSponsors}
Note. Be careful with ${eu[0]}. It's a huge risk.`);
  }
}

const firma = new Calc(`Sam`, undefined, money, employersNames);
firma.dataCheck();
//makeBusiness.apply(null, [`Sam`, undefined, money, employersNames]);
