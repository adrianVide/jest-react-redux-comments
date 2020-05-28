// export default function({ dispatch }) {
//     return function (next) {
//         return function (action) {

//         }
//     }
// }


// top function refactored:

export default ({dispatch}) => next => action => {
    // Check to see it the action has a promise on its payload
    // If it doesn't, then send the action on to the next middleware
    debugger;
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    action.payload.then(function(response){
        const newAction = {...action, payload: response}
        dispatch(newAction);
    });
    
}
