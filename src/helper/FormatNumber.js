import { replace } from 'lodash';
import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fCurrencyVN(number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

export function fCurrency(number) {
  return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}

export function PriceSale(price,discount) {
  const priceDiscount = price - (price * (discount/100));
  const newPrice = Math.ceil(priceDiscount);
  return fCurrencyVN(newPrice);
}

export function convertPriceSale(price,discount) {
  const priceDiscount = price - (price * (discount/100));
  const newPrice = Math.ceil(priceDiscount);
  return newPrice;
}