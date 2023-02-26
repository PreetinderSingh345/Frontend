const BACKEND_URL = 'http://localhost:8080';

const GET_BLOG_DATA = {
  url: 'blog-posts',
  method: 'get',
};

const UPDATE_BLOG_DATA = (blogId) => ({
  url: `blog-posts/${blogId}`,
  method: 'put',
});

module.exports = {
  BACKEND_URL,
  GET_BLOG_DATA,
  UPDATE_BLOG_DATA,
};
