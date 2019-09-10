const obj = {};
let result = [];

const fn = arr => {
  // loop through all elements & sorting the strings & creating key/value pairs in obj
  for (let i = 0; i < arr.length; i++) {
    el = arr[i]
      .split("")
      .sort()
      .join("");
    obj[arr[i]] = el;
  }
  // we get all sorted strings
  let objValues1 = Object.values(obj);
  // eliminating doubles of values by using tempObj
  const tempObj = {};
  objValues1.forEach(el => {
    tempObj[el] = true;
  });

  let objValues2 = Object.keys(tempObj);
  // looping through array elements of  sorted-non-doubled elements
  for (let i = 0; i < objValues2.length; i++) {
    let currentValue = objValues2[i];

    let count = 0;
    // we start counting the doubles in the sorted elements
    objValues1.forEach(e => {
      if (e === currentValue) {
        count++;
      }
    });

    /// we loop in the array elements then we pick their sorted version then we push the repeated to result array
    for (let key in obj) {
      if (obj[key] === currentValue && count > 1) {
        result.push(`${key}---${currentValue}`);
      }
    }
  }

  console.log({ result: result, count: result.length });
  return {
    test: `fn(${JSON.stringify(arr)})`,
    result: result,
    count: result.length
  };
};

module.exports = fn;
