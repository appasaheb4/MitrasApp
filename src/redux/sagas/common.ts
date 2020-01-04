import axios from 'axios';
import {call, put, select} from 'redux-saga/effects';
import {createWatcher} from '../utils/watcherCreator';
import {
  GET,
  GET_RESULT,
  GET_WITH_PARA_RESULT,
  POST_RESULT,
  UPDATE_RESULT,
  DELETE_RESULT,
} from '../actions/common';

function* getResultWorker({payload}) {
  let {url} = payload;
  try {
    console.log({payload, url});

    let res = yield axios({
      method: 'get',
      url,
    })
      .then((response: any) => {
        console.log({response});
        return response.data;
      })
      .catch(function(error: any) {
        return error;
      });
    yield put({type: GET_RESULT, payload: res});
  } catch (error) {
    console.log({error});
  }
}

export const getResultWatcher = createWatcher(getResultWorker, GET);
