export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('shoppingCard');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (shoppingCard) => {
  try {
    const serializedState = JSON.stringify(shoppingCard);
    localStorage.setItem('shoppingCard', serializedState);
  } catch {
    // ignore write errors
  }
};

export const getStorage = () => {
  return JSON.parse(localStorage.getItem('shoppingCard'))
}
