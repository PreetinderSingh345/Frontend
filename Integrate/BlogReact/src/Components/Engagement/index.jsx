import React from 'react';
import PropTypes from 'prop-types';
import './Engagement.css';
import clappingImg from '../../assets/clapping.svg';
import blackHeartImg from '../../assets/heart-black.svg';
import redHeartImg from '../../assets/heart-red.svg';

function Engagement({ initialClapCount }) {
  const [liked, setLiked] = React.useState(false);
  const [clapped, setClapped] = React.useState(false);
  const [clapCount, setClapCount] = React.useState(initialClapCount);

  function handleClap() {
    if (clapped) {
      setClapCount(clapCount - 1);
      setClapped(false);
    } else {
      setClapCount(clapCount + 1);
      setClapped(true);
    }
  }

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <div className="clap-heart">
      <span className="clap-and-count" onClick={handleClap} data-testid="clap-button">
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
  initialClapCount: PropTypes.number.isRequired,
};

export default Engagement;
