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
          imgName={blog.imgName}
          date={blog.date}
          time={blog.time}
          title={blog.title}
          description={blog.description}
          initialClapCount={blog.initialClapCount}
        />
      ))}
    </main>
  );
}

Main.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      imgName: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      initialClapCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Main;
