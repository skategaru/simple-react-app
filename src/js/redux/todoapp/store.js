import { createStore } from 'redux';
import reducer from './reducers';

/**
 * Sample store
 */

 const preloadedState = {
     tasks: [
         {
             description: 'Get Milk',
             id: 1,
             status: 'TODO'
         },
         {
            description: 'Get Bread',
            id: 2,
            status: 'TODO'
        }
     ],
     view: 'ALL'
 }

 const store = createStore(reducer, preloadedState);

 export default store;

