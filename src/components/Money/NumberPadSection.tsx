import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/generateOutput';

type Props = {
  value: number,
  onChange: (amount: number) => void,
  onOk?: () => void
}

const NumberPadSection: React.FC<Props> = (props) => {
  //const output = props.value.toString();
  //const output = props.value.slice(0, 16);
  //const [output, _setOutput] = useState('0');

  //这里本质上是变成了一个非受控组件
  const [output,_setOutput] = useState(props.value.toString());
  const setOutput = (output: string) => {
    let newOutput:string;
    if (output.length > 16) {
      newOutput = output.slice(0, 16);
    } else if (output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output;
    }
    _setOutput(output)
    props.onChange(parseFloat(newOutput));
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    if (text === 'OK') {
      if (props.onOk) {
        props.onOk();
      }
    }
    if ('0123456789.'.split('').concat('删除', '清空').indexOf(text) >= 0) {
      //onChange(generateOutput(text, output));
      setOutput(generateOutput(text, output));
    }
  };
  return (<Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};
