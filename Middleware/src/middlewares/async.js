export default function ({dispatch}){
return next => action => {
	// If the action does not have a payload
  //or, the payload does not have a .then property 
  // LET IT PASS TO THE REDUCERS or the next middleware...
  if (!action.payload || !action.payload.then){
	next(action);
}
// Okay looks like we got a promise.
// Lets wait for this promise to resolve
// Create a new variable to hold the rest of the action plus the 
// new response
// THEN SEND IT BACK TO THE REDUCERS or the next middleware....
  action.payload
  .then(function(response){
    const newAction = {...action, payload:response}
    dispatch(newAction);
  });
}
}

