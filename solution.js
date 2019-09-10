const obj = {};
let result = [];

const fn = arr => {
  for (let i = 0; i < arr.length; i++) {
    el = arr[i]
      .split("")
      .sort()
      .join("");
    obj[arr[i]] = el;
  }

  let objValues1 = Object.values(obj);
  const tempObj = {};
  objValues1.forEach(el => {
    tempObj[el] = true;
  });

  let objValues2 = Object.keys(tempObj);

  for (let i = 0; i < objValues2.length; i++) {
    let currentValue = objValues2[i];

    let count = 0;

    objValues1.forEach(e => {
      if (e === currentValue) {
        count++;
      }
    });

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
