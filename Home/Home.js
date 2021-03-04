import React from 'react';
// import { Redirect } from 'react-router-dom';
import Layout from './Layout'
function Home() {
  const auth =  JSON.parse(window.localStorage.getItem("Auth"));
  // if(!auth.login){
  //   return <Redirect to = "/" />;
  // }
  return (
    <Layout>
      <h1>Welcome <span>{auth.user}</span> Kinectro Home Page</h1>
    </Layout>
  );
}

export default Home;
