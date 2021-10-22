export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}

export function calculateBrandIncraease(brand) {
  let increase = 1;
  switch (brand) {
    case 'europeo':
      increase = 1.3;
      break;
    case 'americano':
      increase = 1.15;
      break;
    case 'asiatico':
      increase = 1.05;
      break;
    default:
      break;
  }
  return increase;
}

export function calculatePlanIncrease(plan) {
  return plan === 'basico' ? 1.2 : 1.5 ;
}

export function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
