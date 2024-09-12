import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import { NourName, RubaName } from './redux/actions';

function Name() {
  const name = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => dispatch(NourName())}>Nour</button>
      <button onClick={() => dispatch(RubaName())}>Ruba</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Name />
    </Provider>
  );
}

export default App;
