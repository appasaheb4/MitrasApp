export const GET = 'GET';
export const GET_RESULT = 'GET_RESULT';
export const GET_WITH_PARA = 'GET_WITH_PARA';
export const GET_WITH_PARA_RESULT = 'GET_WITH_PARA_RESULT';
export const POST = 'POST';
export const POST_RESULT = 'POST_RESULT';
export const UPDATE = 'UPDATE';
export const UPDATE_RESULT = 'UPDATE_RESULT';
export const DELETE = 'DELETE';
export const DELETE_RESULT = 'DELETE_RESULT';

export const getResult = (url: any) => {
  return {type: GET, payload: {url}};
};

export const getWithParaResult = (url: any, data: any) => {
  return {type: GET_WITH_PARA, payload: {url, data}};
};

export const postResult = (url: any, data: any) => {
  return {type: POST, payload: {url, data}};
};

export const updateResult = (url: any, data: any) => {
  return {type: UPDATE, payload: {url, data}};
};

export const deleteResult = (url: any, data: any) => {
  return {type: DELETE, payload: {url, data}};
};
