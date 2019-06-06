const employers = [`Alex`, ``, `ludmila`, `Viktor`, ``, `oleg`, `iNna`, `Ivan`, `Alex`, `Olga`, ` Ann`];

const employersNames = employers.filter(el => typeof(el) == String && el.trim() != ``).map(el => el.toLowerCase().trim());

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: [`SRL`, `PLO`, `J&K`],
  rus: [`RusAuto`, `SBO`]
};

const calcCash = (own = 0, ...args) => {
  // eslint-disable-next-line no-undef
  let [[...everyCash]] = args;
  let total = own;
  for (let i = 0; i < everyCash[1].length; i++) {
    total += +everyCash[1][i];
  }
  return total;
};

const money = calcCash(null, sponsors.cash);

const makeBusiness = (owner, director = `Victor`, cash, emp) => {
  let sumSponsors = sponsors.eu.concat(sponsors.rus, `unexpected sponsor`);
  console.log(`We have a business. Owner: ${owner} director: ${director}. Our budget: ${cash}. And our employers: ` +
    emp);
  console.log(`And we have a sponsors: `);
  console.log.apply(null, sumSponsors);
  console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
};

makeBusiness.apply(null, [`Sam`, null, money, employersNames]);
