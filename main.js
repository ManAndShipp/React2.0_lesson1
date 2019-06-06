/* eslint-disable no-unused-lets */
let names = [`Ivan`, `Ann`, `Ksenia`,`Voldemart`];
let duo = names.filter(el => el.length>4);

console.log(duo);

duo = names.map(el => el.slice(0,2));

console.log(duo);

const Max = (a,b,...numbers) => {
  console.log(numbers);
};

Max(...names);
const avatar = `avatar`;
const user = {
  pass: `123124`,
  mail: `lool@gmail.ru`,
  login: `grably`,
  name:{
    first: `first`,
    last: `last`
  }
};

const{name: {first, last}, pass, right} = user;
console.log(first,last,right,pass);

const admin = {
  pass: `admin`,
  login: `admin`
}

let res = Object.assign({},user,admin);
res = {...user, ...admin, avatar};
console.log(res);

const x = 25, y = 10;
const coords = {x, y,
  calcSq() {
    console.log(this.x*this.y);
  }
};

coords.calcSq();
console.log(coords);

console.log(user.login);

const Connect = ({
  host = `localhost`,
  port = `3000`,
  user = `default`} = {}) => {
    console.log(`host: ${host}, port: ${port}, user ${user}`);
};

const connect = {
  port: `3001`,
  reqist: `error`
};

Connect();

const numbers = [[3,5],[6,123]];

const [,[a,b]] = numbers;
console.log(a,b);

const country = {
  name: `England`,
  population: 2000000,
  gender: {
    male: [`15%`,`40%`],
    female:[`16%`,`29%`]
  }
};

const {gender:{male:[maleUnder18,maleAdult],d}} = country;

console.log(maleUnder18,maleAdult,d);