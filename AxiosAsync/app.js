axios = require("axios");

const getAPI = async () => {
  await axios
    .get(`http://jsonplaceholder.typicode.com/posts`)
    .then((data) => {
      data.data.forEach((item) => {
        console.log(item.title);
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

getAPI();
