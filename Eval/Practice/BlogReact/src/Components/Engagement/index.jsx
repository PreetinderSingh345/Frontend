import React from 'react';
import PropTypes from 'prop-types';
import './Engagement.css';
import clappingImg from '../../assets/clapping.svg';
import blackHeartImg from '../../assets/heart-black.svg';
import redHeartImg from '../../assets/heart-red.svg';
import { UPDATE_BLOG_DATA } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest/index';
import { BlogsContext } from '../../contexts/BlogsContext';

function Engagement({ id, initialClapCount, initialLiked }) {
  const { allBlogData, setAllBlogData } = React.useContext(BlogsContext);
  const [liked, setLiked] = React.useState(initialLiked);
  const [clapped, setClapped] = React.useState(false);
  const [clapCount, setClapCount] = React.useState(initialClapCount);

  async function handleClap() {
    if (allBlogData) {
      try {
        await makeRequest(UPDATE_BLOG_DATA(id), {
          data: {
            claps: clapped ? clapCount - 1 : clapCount + 1,
          },
        });

        // find the blog with the id as id and update its claps in allBlogData

        setAllBlogData(
          allBlogData.map((blog) => {
            if (blog.id === id) {
              return {
                ...blog,
                claps: clapped ? clapCount - 1 : clapCount + 1,
              };
            }
            return blog;
          })
        );

      } catch (err) {
        console.error(err.message);
      }
    }
    // try {
    //   await makeRequest(UPDATE_BLOG_DATA(id), {
    //     data: {
    //       claps: clapped ? clapCount - 1 : clapCount + 1,
    //     },
    //   });

    //   if (clapped) {
    //     setClapCount(clapCount - 1);
    //     setClapped(false);
    //   } else {
    //     setClapCount(clapCount + 1);
    //     setClapped(true);
    //   }
    // } catch (err) {
    //   console.error(err.message);
    // }
  }

  async function handleLike() {
    if (allBlogData) {
      try {
        await makeRequest(UPDATE_BLOG_DATA(id), {
          data: {liked: !liked}
        });
        
        setAllBlogData(
          allBlogData.map((blog) => {
            if(blog.id === id) {
              return {
                ...blog,
                liked: !liked
              }
            }
          })
        )
      } catch (err) {
        console.error(err.message);
      }
    }

    // try {
    //   await makeRequest(UPDATE_BLOG_DATA(id), {
    //     data: {
    //       liked: !liked,
    //     },
    //   });

    //   setLiked(!liked);
    // } catch (err) {
    //   console.error(err.message);
    // }
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
