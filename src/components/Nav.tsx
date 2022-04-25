import styled from 'styled-components';
import React from 'react';
import {Link} from 'react-router-dom';

require('icon/tags.svg');
require('icon/money.svg');
require('icon/statistics.svg');

const NavWrapper = styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      display: flex;
      padding: 4px 0 ;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

const hashmap = {
 tags:'标签页',
  money:'记账页',
  statistics:'统计页'
}

const element= [];

for(const [item,value] of Object.entries(hashmap)){
  element.push(
    <li>
      <svg className="icon">
        <use xlinkHref={`#${item}`} />
      </svg>
      <Link to={`/${item}`}>{value}</Link>
    </li>
  )
}
console.log(element);


const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        {element}
        {/*<li>*/}
        {/*  <svg className="icon">*/}
        {/*    <use xlinkHref="#tags"/>*/}
        {/*  </svg>*/}
        {/*  <Link to="/tags">标签页</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <svg className="icon">*/}
        {/*    <use xlinkHref="#money"/>*/}
        {/*  </svg>*/}
        {/*  <Link to="/money">记账页</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <svg className="icon">*/}
        {/*    <use xlinkHref="#statistics"/>*/}
        {/*  </svg>*/}
        {/*  <Link to="/statistics">统计页</Link>*/}
        {/*</li>*/}
      </ul>
    </NavWrapper>
  );
};
export default Nav;