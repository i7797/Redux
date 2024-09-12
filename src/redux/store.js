import { createStore } from 'redux';
import NameType from './reducer';

// Create store using the reducer
const store = createStore(NameType);

export default store;
