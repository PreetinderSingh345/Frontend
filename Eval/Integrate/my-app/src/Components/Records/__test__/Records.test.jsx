import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Records from '..';
import makeRequest from '../../../utils/makeRequest';

jest.mock('../../../utils/makeRequest', () => jest.fn());

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

  it('should show the loading text when we are unable to fetch the data', () => {
    makeRequest.mockResolvedValue(null);

    const { getByText } = render(<Records />);

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should show the records when we are able to fetch the data', async () => {
    makeRequest.mockResolvedValue(mockData);

    render(<Records />);

    await waitFor(() => {
      expect(screen.getByText('Lost')).toBeInTheDocument();
      expect(screen.getByText("Takin' Shots")).toBeInTheDocument();
    });
  });

  it('should show only the songs of a particular genre when we click on it', async () => {
    makeRequest.mockResolvedValue(mockData);

    render(<Records />);

    await waitFor(() => {
      const groupedIcon = screen.getByTestId('grouped-icon');

      fireEvent.click(groupedIcon);

      const popCategory = screen.getByTestId('pop');

      fireEvent.click(popCategory);

      expect(screen.queryByText('Lost')).toBeInTheDocument();
      expect(screen.queryByText("Takin' Shots")).not.toBeInTheDocument();
    });
  });
});
