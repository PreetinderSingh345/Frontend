import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Main, Footer } from '../../Components';
import { GET_BLOG_DATA } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest/index';
import { BlogsContext } from '../../contexts/BlogsContext';

function Home() {
  // const [blogs, setBlogs] = React.useState([]);

  const { allBlogData, setAllBlogData } = React.useContext(BlogsContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    makeRequest(GET_BLOG_DATA, {}, navigate)
      .then((response) => {
        setAllBlogData(response);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <>
      <Header />
      <Main blogs={allBlogData} />
      <Footer />
    </>
  );
}

export default Home;
