import makeRequest from '..';
import axios from 'axios';
import {
  BACKEND_URL,
  GET_ALL_RECORDS,
  UPDATE_LIKES_BY_RECORD_ID,
} from '../../../Constants/apiEndPoints';

jest.mock('axios');

const mockRecords = [
  {
    id: 'cd3cc1e3-e1e0-4ccd-bc67-747648985838',
    name: 'Lost',
    imageUrl:
      'https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631',
    artist: {
      id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
      name: 'Maroon 5',
    },
    genre: {
      id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
      name: 'Pop',
    },
  },
  {
    id: '17e72576-1451-41dd-8859-b4f380347354',
    name: "Takin' Shots",
    imageUrl:
      'https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268',
    artist: {
      id: '056e9a8b-e2a4-4585-aa7b-a45a994b31b5',
      name: 'Post Malone',
    },
    genre: {
      id: '95aec636-f7b5-46e7-8343-8203b1a03a90',
      name: 'Rock',
    },
  },
];

describe('makeRequest', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should make api call with appropriate request options and return response body when only api endpoint is specified', async () => {
    axios.mockResolvedValue({ data: mockRecords });

    expect(axios).not.toHaveBeenCalled();

    const response = await makeRequest(GET_ALL_RECORDS);

    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: 'api/records',
      method: 'get',
      headers: {
        Authorization: 'Bearer QWlzaHdhcnlhIE4=',
      },
    });

    expect(response).toEqual(mockRecords);
  });

  it('should make api call with appropriate request options and return response body when api endpoint and request body are specified', async () => {
    axios.mockResolvedValue({ data: { count: 1, like: true } });

    expect(axios).not.toHaveBeenCalled();

    const response = await makeRequest(UPDATE_LIKES_BY_RECORD_ID(1), {
      data: {
        like: true,
      },
    });

    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: 'api/records/1/likes',
      method: 'patch',
      headers: {
        Authorization: 'Bearer QWlzaHdhcnlhIE4=',
      },
      data: {
        like: true,
      },
    });

    expect(response).toEqual({ count: 1, like: true });
  });
});
