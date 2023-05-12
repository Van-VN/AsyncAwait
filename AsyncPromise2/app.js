async function onMyBirthDay(isKayoSick) {
  if (!isKayoSick) return 2;
  throw new Error(`i'm sad...`);
}

// Using Async Await

async function doSomeThing() {
  try {
    let result = await onMyBirthDay(false);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(`party!!!`);
  }
}

doSomeThing();

// Using promise

// onMyBirthDay(false)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   })
//   .finally(() => {
//     console.log(`Party!!!`);
//   });
