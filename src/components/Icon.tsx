import React from 'react';
import cs from 'classnames';

let importAll = (requireContext:__WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext)
try{
  importAll(require.context('icon',true,/\.svg$/));  //统一引入代码
}catch (error){
  console.log(error);
}

type Props={
  name:string
}& React.SVGAttributes<SVGElement>

const Icon = (props:Props)=>{
  const {name,className,children,...rest} = props;
 return(
   <svg className={cs('icon',className)} {...rest}>
     {props.name&&<use xlinkHref={'#'+props.name}/>}
   </svg>
 )
}

export default Icon;