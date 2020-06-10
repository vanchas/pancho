import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers/rootReducer';
// import thunk from 'redux-thunk';
// import { forbiddenWordsMiddlwware } from './middleware';
// import createSagasMiddleware from 'redux-saga';
// import { rootSaga } from './sagas/sagas';

// const preloadedState = {};
// const saga = createSagasMiddleware();

const store: any = createStore(
  // rootReducer,
  // preloadedState,
  applyMiddleware(
    // thunk,
    // forbiddenWordsMiddlwware,
    // saga
  )
);

// saga.run(rootSaga);

store.subscribe(() => {
  // console.log('updated state: ', store.getState());
});

export default store;
