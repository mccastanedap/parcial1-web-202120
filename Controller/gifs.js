const axios = require("axios");
//Usamos promesas para poder obtener los datos de la pagina
const getServerGifs = async (input) => {
  try {
    const { data } = await axios(
      `https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players`
    );
    const results = data.values.map((elm) => ({
      nombre: elm.nombre,
      apellido: elm.apellido,
      altura: elm.altura,
    }));
    return results;
  } catch (err) {}
};

module.exports = { getServerGifs };
