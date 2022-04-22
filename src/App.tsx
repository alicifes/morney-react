import React from 'react' ;
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';



const Wrapper = styled.div`
  border: 1px solid green;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100vh;
`;
const Main = styled.div`
  flex-grow: 1;
`;

const Nav = styled.div`
  border: 1px solid red;
  >ul{
    display: flex;
    >li{
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
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
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>
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