export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('shoppingCard');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
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

