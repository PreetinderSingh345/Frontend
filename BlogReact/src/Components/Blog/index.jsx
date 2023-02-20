import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import DateTime from '../DateTime';
import Description from '../Description';
import Engagement from '../Engagement';
import './Blog.css';

function Blog({ imgName, date, time, title, description, initialClapCount }) {
  return (
    <div className="card-item" data-testid='blog'>
      <Image imgName={imgName} />
      <div className="card-description">
        <DateTime date={date} time={time} />
        <Description title={title} description={description} />
        <Engagement initialClapCount={initialClapCount} />
      </div>
      <div />
    </div>
  );
}

Blog.propTypes = {
  imgName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  initialClapCount: PropTypes.number.isRequired,
};

export default Blog;
