import React from 'react' ;
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;



function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route exact path="/money">
              <Money/>
            </Route>
            <Route exact path="/tags">
              <Tags/>
            </Route>
            <Route exact path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="/*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  );
}

function Tags() {
  return (<h2>tag</h2>);
}

function Money() {
  return (<h1>Money</h1>);
}

function Statistics() {
  return <h2>sta</h2>;
}

function NoMatch() {
  return <div>no found</div>;
}

export default App;