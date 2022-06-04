import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  > ol {
    display: flex;
    font-size: 24px;

    > li {
      text-align: center;
      width: 50%;
      padding: 21px 0;
      position: relative;

      &.selected::after {
        content: "";
        position: absolute;
        height: 3px;
        background: #2d2d2d;
        width: 100%;
        display: block;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

//字符串的联合
type Props = {
  value: '+' | '-',
  onChange: (value:('+' | '-'))=> void
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap;
 const category = props.value;
 // const [category, setCategory] = useState('-');
  //字符串的联合
  //const [categoryList] = useState<("+"|"-")[]>(["+","-"])
  const [categoryList] = useState<Keys[]>(['+', '-']);
  return <Wrapper>
    <ol>
      {
        categoryList.map(c =>
          <li className={category === c ? 'selected' : ''} onClick={() => props.onChange(c)} key={c}>
            {categoryMap[c]}
          </li>
        )
      }
    </ol>
  </Wrapper>;
};

export {CategorySection};