import { bugAdded, bugRemoved, bugResolved } from './actionCreator.js'
import store from './store.js'


/* const unsubscribe = store.subscribe(
    () => {console.log("Store Chnaged!", store.getState)}
) */

store.dispatch(bugAdded("bug1"))

//Unsubscribe to provide memory leaks in chnaged UI components
// unsubscribe();

// store.dispatch(bugRemoved(1))
store.dispatch(bugResolved(1))
console.log(store.getState())