import axios from "axios";

export default async function cardFetch(id, callback) {
  axios
    .get(
      `http://localhost:8762/api/hero/get/${id}`
    )
    .then((response) => {
      let hero = response.data;
      if (callback) callback(hero);
    })
    .catch((err) => console.log(err));
}
