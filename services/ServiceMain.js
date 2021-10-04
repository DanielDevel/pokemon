import axios from 'axios';

export const getFullIdName = async linkfirst => {
  const resOne = await axios.get(linkfirst);
  const nameId = resOne.data.results.map(item => {
    const nId = {
      name: item.name,
    };
    return nId;
  });
  const lastResult = {
    fullIdName: nameId,
    next: resOne.data.next,
    previous: resOne.data.previous,
  };
  return lastResult;
};
export const getFullPokemonInId = async name => {
  const pokObj = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokStats = pokObj.data.stats.map(itStats => {
    return {
      name: itStats.stat.name,
      base_stat: itStats.base_stat,
      effort: itStats.base_stat,
    };
  });
  const pokTypes = pokObj.data.types.map(itTypes => {
    return {
      name: itTypes.type.name,
      slot: itTypes.slot,
    };
  });
  const pokInfo = {
    name: pokObj.data.name,
    weight: pokObj.data.weight,
    height: pokObj.data.height,
    hp: pokStats[0],
    attack: pokStats[1],
    defense: pokStats[2],
    special_attack: pokStats[3],
    special_defense: pokStats[4],
    speed: pokStats[5],
    types: pokTypes,
  };
  return pokInfo;
};

export const getIdInName = async name => {
  const id = await (
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  ).data.id;
  return id;
};

export const loadImageInName = name => {
  const id = getIdInName(name).then(result => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${result}.png`;
  });
  return id;
};
