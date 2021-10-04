import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Navigations from './navigations/Navigations';
import {favorites} from './store/redux/PokemonRedux';

const store = createStore(favorites);
const App = () => {
  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  );
};

export default App;
