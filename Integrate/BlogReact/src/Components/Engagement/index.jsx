import React from 'react';
import PropTypes from 'prop-types';
import './Engagement.css';
import clappingImg from '../../assets/clapping.svg';
import blackHeartImg from '../../assets/heart-black.svg';
import redHeartImg from '../../assets/heart-red.svg';
import { UPDATE_BLOG_DATA } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest/index';

function Engagement({ id, initialClapCount, initialLiked }) {
  const [liked, setLiked] = React.useState(initialLiked);
  const [clapped, setClapped] = React.useState(false);
  const [clapCount, setClapCount] = React.useState(initialClapCount);

  async function handleClap() {
    try {
      await makeRequest(UPDATE_BLOG_DATA(id), {
        data: {
          claps: clapped ? clapCount - 1 : clapCount + 1,
        },
      });

      if (clapped) {
        setClapCount(clapCount - 1);
        setClapped(false);
      } else {
        setClapCount(clapCount + 1);
        setClapped(true);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  async function handleLike() {
    try {
      await makeRequest(UPDATE_BLOG_DATA(id), {
        data: {
          liked: !liked,
        },
      });

      setLiked(!liked);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="clap-heart">
      <span
        className="clap-and-count"
        onClick={handleClap}
        data-testid="clap-button"
      >
        <img src={clappingImg} alt="" />
        <span>{clapCount}</span>
      </span>

      <img
        src={liked ? redHeartImg : blackHeartImg}
        alt=""
        onClick={handleLike}
        data-testid="like-button"
      />
    </div>
  );
}

Engagement.propTypes = {
  id: PropTypes.number.isRequired,
  initialClapCount: PropTypes.number.isRequired,
  initialLiked: PropTypes.bool.isRequired,
};

export default Engagement;
