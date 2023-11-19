import * as actions from './actionTypes.js'

export const bugAdded = (description) => (
    {
        type: actions.BUG_ADDED, 
        payload: {
            //value of description should be theargument
            description: description
        }
        }
)

export const bugRemoved = (id) => ({
    type: actions.BUG_REMOVED,
    payload: {
        id: id
    
    }
})

export const bugResolved = (id) => ({
    type: actions.BUG_RESOLVED,
    payload: {
        //js shorthand if name of property and value are same
        //instead of "id: id" just "id"
        id
    
    }
})