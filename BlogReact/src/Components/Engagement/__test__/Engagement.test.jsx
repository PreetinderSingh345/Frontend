import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Engagement from '../index';

describe('Engagement', () => {
  describe('clap button', () => {
    it('should increase the clap count when clicked once', () => {
      const { getByTestId } = render(<Engagement initialClapCount={0} />);
      const clapButton = getByTestId('clap-button');

      fireEvent.click(clapButton);
      expect(clapButton.textContent).toBe('1');
    });

    it('should decrease the clap count when clicked twice', () => {
      const { getByTestId } = render(<Engagement initialClapCount={0} />);
      const clapButton = getByTestId('clap-button');

      fireEvent.click(clapButton);
      fireEvent.click(clapButton);

      expect(clapButton.textContent).toBe('0');
    });

    it('should show the initial clap count when the app is rendered initially', () => {
      const { getByTestId } = render(<Engagement initialClapCount={10} />);
      const clapButton = getByTestId('clap-button');

      expect(clapButton.textContent).toBe('10');
    });
  });

  describe('like button', () => {
    it('should change the heart color to red when clicked once', () => {
      const { getByTestId } = render(<Engagement initialClapCount={0} />);
      const likeButton = getByTestId('like-button');

      fireEvent.click(likeButton);
      expect(likeButton.src).toContain('heart-red.svg');
    });

    it('should change the heart color to black when clicked twice', () => {
      const { getByTestId } = render(<Engagement initialClapCount={0} />);
      const likeButton = getByTestId('like-button');

      fireEvent.click(likeButton);
      fireEvent.click(likeButton);

      expect(likeButton.src).toContain('heart-black.svg');
    });

    it('should show the black heart image when the app is rendered initially', () => {
      const { getByTestId} = render(<Engagement initialClapCount={10}/>);
      const likeButton = getByTestId('like-button');

      expect(likeButton.src).toContain('heart-black.svg');
    });
  });
});
