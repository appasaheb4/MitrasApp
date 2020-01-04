import {applyMiddleware, createStore, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {call, all, spawn} from 'redux-saga/effects';
import {composeWithDevTools} from 'redux-devtools-extension';

//Reducer
import commonReducer from './reducers/common';

//Watcher
import {getResultWatcher} from './sagas/common';

const rootSaga = function*() {
  const sagas = [getResultWatcher];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      }),
    ),
  );
};

const rootReducer = combineReducers({
  common: commonReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export {store};
