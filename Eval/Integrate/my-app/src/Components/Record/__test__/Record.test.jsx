import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Record from '..';
import makeRequest from '../../../utils/makeRequest';
import heartRed from '../../../assets/heart-red.svg';
import grayHeart from '../../../assets/heart-gray.svg';

jest.mock('../../../utils/makeRequest', () => jest.fn());

const props = {
  id: '8266dac3-b2b1-4551-b2ec-91e260244a51',
  recordName: 'Payphone',
  artistName: 'Maroon 5',
  imageUrl: 'https://i.scdn.co/image/ab67616d0000b2733119f490f02fcee6514e8604',
};

const mockData = {
  data: [
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
  ],
};

describe('Record', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', async () => {
    makeRequest.mockResolvedValue(mockData);

    const { getByText, getByTestId } = render(<Record {...props} />);

    await waitFor(() => {
      expect(getByText('Payphone')).toBeInTheDocument();
      expect(getByText('Maroon 5')).toBeInTheDocument();
      expect(getByTestId('record-img')).toHaveAttribute(
        'src',
        'https://i.scdn.co/image/ab67616d0000b2733119f490f02fcee6514e8604'
      );
    });
  });

  it('should show the correct like status and count value', async () => {
    makeRequest.mockResolvedValue({
      data: {
        count: 5,
        like: true,
      },
    });

    render(<Record {...props} />);

    await waitFor(() => {
      expect(screen.getByTestId('count-span')).toHaveTextContent('5');
      expect(screen.getByTestId('like-img')).toHaveAttribute('src', heartRed);
    });
  });

  it('should update the number of likes when the like button is clicked', async () => {
    makeRequest.mockResolvedValueOnce({
      data: {
        count: 0,
        like: false,
      },
    });

    render(<Record {...props} />);

    const likeButton = screen.getByTestId('like-count-button');

    const likeImage = screen.getByTestId('like-img');
    const countSpan = screen.getByTestId('count-span');

    await waitFor(() => {
      expect(countSpan).toHaveTextContent('0');
      expect(likeImage).toHaveAttribute('src', grayHeart);
    });

    makeRequest.mockResolvedValueOnce({
      data: {
        count: 1,
        like: true,
      },
    });

    fireEvent.click(likeButton);

    await waitFor(() => {
      expect(countSpan).toHaveTextContent('1');
      expect(likeImage).toHaveAttribute('src', heartRed);
    });
  });
});
