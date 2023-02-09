import React from 'react';
import ReactDOM from 'react-dom/client';

import FilteredGamesReducer from './reducers/FilteredGamesReducer';
import App from './App/App';

import { createStore } from "redux";
/*provider zorgt ervoor dat we naar de store toe kunnen schrijven en er dingen van kunnen lezen*/
import { Provider } from 'react-redux';

/*store*/
const store = createStore(FilteredGamesReducer);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

