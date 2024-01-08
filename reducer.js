import * as actions from "./actionTypes.js";

let lastID = 0;

//using default param to reset initial state
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          //payload of action to have MINIMUM info
          //therefore implement business logic in reducer
          id: ++lastID,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id == action.payload.id ? { ...bug, resolved: true } : bug
      );
    default:
      return state;
  }
}

//IF-ELSE BLOCK VERSION
/* if(action.type === 'bugAdded') {
        return [
            ...state, 
            {
                //payload of action to have MINIMUM info
                //therefore implement business logic in reducer
                id: ++lastID,
                description: action.payload.description,
                resolved: false
            }
        ]
    } else if (action.type === 'bugRemoved') {
        return state.filter( bug => bug.id !== action.payload.id )

        return state
    } */
