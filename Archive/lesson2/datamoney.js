const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: [`SRL`, `PLO`, `J&K`],
  rus: [`RusAuto`, `SBO`]
};

function calcCash(own = 0, [...everyCash]) {
  return everyCash.reduce((total = own, el) => total += el);
}

const money = calcCash(null, sponsors.cash);

export {money,calcCash,sponsors};