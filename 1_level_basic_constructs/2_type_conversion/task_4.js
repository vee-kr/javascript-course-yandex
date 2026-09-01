const basePrice = '1000';
const discountPercent = '15';
const bonusPoints = '50';

const discount = basePrice * discountPercent / 100;
const priceWithDiscount = basePrice - discount;
const finalPrice = priceWithDiscount - bonusPoints;
console.log(finalPrice)
