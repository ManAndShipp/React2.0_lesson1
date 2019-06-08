const employers = [`Alex`, ``, `ludmila`, `Viktor`, ``, `oleg`, `iNna`, `Ivan`, `Alex`, `Olga`, ` Ann`];

const employersNames = employers.filter(el => typeof(el) === `string` && el.trim() != ``).map(el => el.toLowerCase().trim());

export {employers, employersNames};