import React from 'react';
import { useParams } from 'react-router-dom';
import { Header, Footer } from '../../Components';

function Error() {
  const { errorCode } = useParams();

  return (
    <body>
      <Header />
      <h1>Something went wrong</h1>
      {errorCode && <h3>{`Error code: ${errorCode}`}</h3>}
      <Footer />
    </body>
  );
}

export default Error;
