import React from 'react';
import { render } from '@testing-library/react';
import Main from '../index';

describe('Main', () => {
  it('should render a list of Blog components with correct props', () => {
    const blogs = [
      {
        imgName: 'abstract.png',
        date: 'May 28, 2020',
        time: '2 mins',
        title: 'The future of abstract art and the culture ...',
        description:
          'Create a blog post suitable that summarises your post in a few short, punchy and sentences and entices your...',
        initialClapCount: 2,
      },

      {
        imgName: 'inspired.png',
        date: 'Jan 13, 2019',
        time: '3 mins',
        title: 'The future of abstract art and the culture ...',
        description:
          'Create a blog post suitable that summarises your post in a few short, punchy and sentences and entices your...',
        initialClapCount: 8,
      },
    ];

    const { getAllByTestId } = render(<Main blogs={blogs} />);
    const blogComponents = getAllByTestId('blog');

    expect(blogComponents.length).toBe(blogs.length);

    blogComponents.forEach((component, index) => {
      const { imgName, date, time, title, description, initialClapCount } =
        blogs[index];

      expect(component).toHaveAttribute('data-testid', 'blog');
      expect(component.querySelector('.card-img').src).toContain(imgName);
      expect(component.querySelector('.date-time')).toHaveTextContent(date);
      expect(component.querySelector('.date-time')).toHaveTextContent(time);
      expect(component.querySelector('.img-title').textContent).toBe(title);
      expect(component.querySelector('.img-description').textContent).toBe(description);
      expect(component.querySelector('.clap-and-count span').textContent).toBe(initialClapCount.toString());
    });
  });
});
