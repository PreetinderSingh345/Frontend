import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Blog from '../Blog';
import './Main.css';

function Main({ blogs }) {
  return (
    <main>
      {blogs.map((blog) => (
        <Blog
          key={uuidv4()}
          id={blog.id}
          imgName={blog.image}
          date={blog.date}
          time={blog.readingTime ?? '1 min'}
          title={blog.title}
          description={blog.description}
          initialClapCount={blog.claps}
          initialLiked={blog.liked}
        />
      ))}
    </main>
  );
}

Main.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      readingTime: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      claps: PropTypes.number.isRequired,
      liked: PropTypes.bool.isRequired
    })
  ).isRequired,
};

export default Main;
