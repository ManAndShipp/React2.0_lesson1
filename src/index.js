import {employers, employersNames} from './employers';
import {money,calcCash,sponsors} from './datamoney';

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