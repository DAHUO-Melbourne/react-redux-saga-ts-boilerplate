import React from 'react';
import {useHistory} from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  return (
    <div>
      this is home page for react-redux-ts-redux-saga-boilerplate
      <button onClick={() => history.push('/design')}>press it</button>
    </div>
  );
}

export default Home;