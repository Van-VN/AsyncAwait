// async function getDivision(a, b) {
//   if (b !== 0) {
//     return a / b;
//   } else {
//     return new Error(`Math Error!`);
//   }
// }

// async function f() {
//   try {
//     let result = await getDivision(3, 2);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// f();

const promise = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b !== 0) {
        resolve(a / b);
      } else {
        reject(new Error(`Math Error!`));
      }
    });
  });
};

promise(33, 0).then((x) => console.log(x));
promise(33, 0).catch((error) => console.log(error));
