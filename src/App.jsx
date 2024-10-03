import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Home/>
      <Footer />
    </>
  );
}

export default App;
