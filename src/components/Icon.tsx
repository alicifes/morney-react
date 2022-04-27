import React from 'react';

let importAll = (requireContext:__WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext)
try{
  importAll(require.context('icon',true,/\.svg$/));  //统一引入代码
}catch (error){
  console.log(error);
}

type Props={
  name:string
}

const Icon = (props:Props)=>{
 return(
   <svg className="icon">
     <use xlinkHref={'#'+props.name}/>
   </svg>
 )
}

export default Icon;