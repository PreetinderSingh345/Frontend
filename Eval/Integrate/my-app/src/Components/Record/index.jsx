import React from 'react';
import { useState, useEffect } from 'react';
import './Record.css';
import heartRed from '../../assets/heart-red.svg';
import heartGray from '../../assets/heart-gray.svg';
import PropTypes from 'prop-types';
import {
  GET_LIKES_BY_RECORD_ID,
  UPDATE_LIKES_BY_RECORD_ID,
} from '../../Constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

function Record({ id, recordName, artistName, imageUrl }) {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    makeRequest(GET_LIKES_BY_RECORD_ID(id))
      .then((response) => {
        setLike(response.data.like);
        setCount(response.data.count);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  function handleClick() {
    makeRequest(UPDATE_LIKES_BY_RECORD_ID(id), {
      data: {
        like: !like,
      },
    })
      .then((response) => {
        setLike(!like);
        setCount(like ? count - 1 : count + 1);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  return (
    <div className="record">
      <img
        className="record-img"
        src={imageUrl}
        alt=""
        data-testid="record-img"
      />
      <div className="record-info">
        <div className="record-name-author">
          <span className="record-name">{recordName}</span>
          <span className="record-author">{artistName}</span>
        </div>

        <div className="like-count" onClick={handleClick} data-testid='like-count-button'>
          <img
            src={like ? heartRed : heartGray}
            alt=""
            data-testid="like-img"
          />
          <span data-testid="count-span">{count}</span>
        </div>
      </div>
    </div>
  );
}

Record.propTypes = {
  id: PropTypes.string.isRequired,
  recordName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Record;
