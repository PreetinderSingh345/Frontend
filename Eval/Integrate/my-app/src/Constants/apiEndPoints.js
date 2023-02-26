export const BACKEND_URL = 'http://localhost:8080';

export const GET_ALL_RECORDS = {
  url: 'api/records',
  method: 'get',
};

export const GET_LIKES_BY_RECORD_ID = (recordId) => ({
  url: `api/records/${recordId}/likes`,
  method: 'get',
});

export const UPDATE_LIKES_BY_RECORD_ID = (recordId) => ({
  url: `api/records/${recordId}/likes`,
  method: 'patch',
});
