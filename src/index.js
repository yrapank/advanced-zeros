module.exports = function getZerosCount(number, base) {
  let noz = Number.MAX_VALUE;
  let b = base;
  for (let i = 2; i <= base; i++) {
    if (b % i === 0) {
      let count1 = 0;
      while (b % i === 0) {
         b = b / i;     
         count1++;
      }
      let count2 = 0;
      let numb = Math.floor(number / i);
      while (numb > 0) {
        count2 += numb;
        numb = Math.floor(numb / i);
      }
      noz = Math.min(noz, Math.floor(count2 / count1));
    }
  }
  return noz;
};