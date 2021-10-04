const initialState = {
  favList: [],
};

export const favorites = (state = initialState, {type, value = null}) => {
  switch (type) {
    case 'ADD_FAVORITE':
      const {favList} = state;
      const indexRepeat = favList.findIndex(item => item.name === value.name);
      if (indexRepeat >= 0) {
        favList.splice(indexRepeat, 1);
      } else {
        favList.push(value);
      }

      return {...state};
    default:
      return state;
  }
};
