axios = require("axios");

function getJsonAPI() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/1")
      .then(function (json) {
        resolve(json.data);
      });
    // reject(() => {
    //   console.log(`Error!`);
    // });
  });
}

getJsonAPI()
  .then((item) => console.log(item.title))
  .catch((error) => console.log(error))
  .finally(console.log(`Done!!`));
