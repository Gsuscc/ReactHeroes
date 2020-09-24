import axios from "axios";

export default async function cardFetch(id, callback) {
  axios
    .get(`https://superheroapi.com/api/3597117540350761/${id}`)
    .then((response) => {
      let hero = response.data;
      if (callback) callback(hero);
    })
    .catch((err) => console.log(err));
}
