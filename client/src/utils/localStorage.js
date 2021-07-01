export const saveToLocalStorage = (reduxGlobalState) => {
  try {
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializeState);
  }
  catch(e){
    console.log(e);
  }
}

export const loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem('state');
  if(serializedState === null){
    return undefined;
  } else {
    return JSON.parse(serializedState);
  }
}