import React from 'react';
import './index.css';
import { Header, Main, Footer } from '../../Components';
import { GET_BLOG_DATA } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest/index';

function App() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    makeRequest(GET_BLOG_DATA)
      .then((response) => {
        setBlogs(response);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <body>
      <Header />
      <Main blogs={blogs} />
      <Footer />
    </body>
  );
}

export default App;
