axios = require("axios");

async function getAllUser() {
  let promise = new Promise((resolve) => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((item) => {
      resolve(item.data);
    });
  });
  let result = await promise;
  //   console.log(result);
  return result;
}

getAllUser()
  .then((item) => {
    item.forEach((student) => {
      console.log(student.name);
    });
  })
  .catch((error) => console.log(error.message));
