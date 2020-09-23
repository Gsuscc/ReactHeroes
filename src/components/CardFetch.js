import axios from "axios";

export default function cardFetch(id, callback) {
  axios
    .get(
      `http://atib.servebeer.com:55555/https://superheroapi.com/api/3597117540350761/${id}`
    )
    .then((response) => {
      let hero = response.data;
      if (callback) callback(hero);
    });
}
