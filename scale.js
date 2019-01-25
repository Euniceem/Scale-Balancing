function scaleBalancing(strArr) {

  let weightOne = JSON.parse(strArr[0])[0];
  let weightTwo = JSON.parse(strArr[1])[0];
  let weights = JSON.parse(strArr[1]);

  for (var i = 0; i < weights.length; i++) {
    // console.log('WEIGHT I:', weights[i]);
    if (weightOne + weights[i] === weightTwo || weightTwo + weights[i] === weightOne) {
      return '' + weights[i];
    }
    for (var j = 1 + i; j < weights.length; j++) {
      // console.log('WEIGHT J:', weights[j]);
      if (weightOne + weights[i] + weights[j] === weightTwo
        || weightTwo + weights[i] + weights[j] === weightOne
        || weightOne + weights[i] === weightTwo + weights[j]
        || weightOne + weights[j] === weightTwo + weights[i]) {
        return '' + weights[i] + '.' + weights[j];
      }
    }

  }
  return "not possible"
}

// console.log(scaleBalancing(["[5, 9]", "[1, 2, 6, 7]"]));