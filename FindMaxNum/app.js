async function findMaxNum(input) {
  if (input instanceof Array) {
    let max = input[0];
    input.forEach((item) => {
      if (max < item) {
        max = item;
      }
    });
    return max;
  } else {
    throw new Error(`Input data is not correct!`);
  }
}

let testArray = [1, 2, 3, 4, 5, 6, 7, 99];

async function testMaxNum() {
  try {
    let result = await findMaxNum(testArray);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

testMaxNum();
