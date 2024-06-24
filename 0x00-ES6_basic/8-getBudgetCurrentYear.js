function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
const CurrentYear = getCurrentYear();

  budget[`income-${CurrentYear}`] = income;
  budget[`gdp-${CurrentYear}`] = gdp;
  budget[`capita-${CurrentYear()}`] = capita;

  return budget;
}
