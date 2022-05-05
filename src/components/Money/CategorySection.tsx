import styled from 'styled-components';

const CategorySection = styled.section`
  >ol{
    display: flex;
    font-size: 24px;
    background: #C4C4C4;
    >li{
      text-align: center;
      width: 50%;
      padding:21px 0;
      position: relative;
      &.selected::after{
        content: "";
        position: absolute;
        height: 3px;
        background:#2d2d2d;
        width: 100%;
        display: block;
        bottom: 0;
        left: 0;
      }
    }
  }
`

export {CategorySection}