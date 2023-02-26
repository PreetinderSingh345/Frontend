import {createContext, useState} from 'react';

export const BlogsContext = createContext({});

export const BlogsProvider = ({children}) => {
  const [allBlogData, setAllBlogData] = useState(null);
  
  return (
    <BlogsContext.Provider value = {{allBlogData, setAllBlogData}}>
      {children}
    </BlogsContext.Provider>
  );
}
