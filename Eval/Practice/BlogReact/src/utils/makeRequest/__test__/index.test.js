import { mockBlogs } from '../../../mocks/blogs';
import axios from 'axios';
import makeRequest from '../index';

import {
  BACKEND_URL,
  GET_BLOG_DATA,
  UPDATE_BLOG_DATA,
} from '../../../constants/apiEndPoints';

jest.mock('axios');

describe('makeRequest', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should make api call with appropriate request options and return response body when only api endpoint is specified', async () => {
    const mockResponse = { data: mockBlogs };

    axios.mockResolvedValue(mockResponse);

    expect(axios).not.toHaveBeenCalled();

    const response = await makeRequest(GET_BLOG_DATA);

    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: 'blog-posts',
      method: 'get',
    });

    expect(response).toEqual(mockBlogs);

    axios.mockClear();
  });

  it('should make api call api call with appropriate request options and return response body when api endpoint and request body is specified', async () => {
    axios.mockResolvedValue({ data: { data: { claps: 1 } } });

    expect(axios).not.toHaveBeenCalled();

    const response = await makeRequest(UPDATE_BLOG_DATA(1), {
      data: {
        claps: 1,
      },
    });

    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: 'blog-posts/1',
      method: 'put',
      data: {
        claps: 1,
      },
    });

    expect(response).toEqual({
      data: {
        claps: 1,
      },
    });
  });

  it('should navigate to error page with status code when API call returns error status code', async () => {
    const mockNavigate = jest.fn();

    axios.mockRejectedValue({ response: { status: 500 } });
    expect(mockNavigate).not.toHaveBeenCalled();

    await makeRequest(
      UPDATE_BLOG_DATA(1),
      {
        data: { claps: 1 },
      },
      mockNavigate
    );

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(`${ERROR_ROUTE}/500`);
  });

  it('should navigate to error page without status code when API call returns error without status code', async () => {
    const mockNavigate = jest.fn();
    const mockAxios = jest.spyOn(axios, 'default');

    mockAxios.mockRejectedValueOnce({});
    expect(mockNavigate).not.toHaveBeenCalled();

    await makeRequest(
      UPDATE_BLOG_DATA(1),
      {
        data: {claps: 1},
      },
      mockNavigate
    );

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(ERROR_ROUTE);
  });
});
