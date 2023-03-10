var isAdditiveNumber = function(num) {
  const recurs =  (num1,num2,rest) => {
    if (rest.length == 0) return true;
    let expected = num1+ num2;
    let match = rest.match(new RegExp(`^${expected}`));
    if (!match) return false;
    return recurs(num2,expected,rest.slice(match.index + match[0].length));
  }
  for(let i = 1; i < num.length/2; i++) {
    let num1=num.slice(0,i);
    if (num1[0] == 0 && num1.length > 1) continue;
    for(let j = 1; j <=num.length/2; j++) {
      let num2 = num.slice(i,i+j);
      if (num2[0] == 0 && num2.length > 1) continue;
      let rest = num.slice(i+j);
      let result = recurs(+num1,+num2,rest);
      if (result) return result;
    }
  }
  return false;
};

console.log(isAdditiveNumber('120122436'));