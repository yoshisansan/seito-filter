import React from 'react';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

import styled from 'styled-components';

const Wrapper = styled.div`
    
`

const App = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Header />
        <Body />
          <div className="App">
            テスト
          </div>
        <Footer />
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
