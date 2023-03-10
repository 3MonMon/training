
function splitIntoFibonacci(num, arr= []) {

  const recurs =  (rest,second,third,rec) => {
    let expectedFirst = third-second;
    let match = rest.match(new RegExp(`${expectedFirst}$`));
    if (!match) return [];
    if (match.index == 0) return [+rest,second,third,...rec];
    return recurs(rest.slice(0,match.index),expectedFirst,second,[+third,...rec])
  }
  for (let i = num.length - 1; i > 1; i--) {

    
    let third = num.slice(i);
    if (third[0] == 0 && third.length > 1) continue;

    for (let j = i - 1; j > 0; j--) {

      // if number start with 0, don't even try
      let second = num.slice(j,i);
      if (second[0] == 0 && second.length > 1) continue;

      if (+second > +third) break;

      let rest = num.slice(0,j);
      
      let arr = recurs(rest,second,third,[]);

      if (arr.join("") == num)
        return arr;
    }
  }
  return [];
}

console.log(splitIntoFibonacci("219034878"));



