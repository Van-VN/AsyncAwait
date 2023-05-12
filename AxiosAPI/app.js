axios = require("axios");

function getNASAAPI() {
  return new Promise((resolve, reject) => {
    axios
      .get(
        " https://api.nasa.gov/planetary/apod?api_key=fkbGWlaMpbqBg8wDVogyow6kWV4CF6YdnBXWvAVF"
      )
      .then(function (json) {
        resolve(json.data);
      });
  });
}

getNASAAPI()
  .then((item) => console.log(`${item.hdurl}\n${item.title}`))
  .catch((error) => console.log(error))
  .finally(console.log(`Done!!`));
