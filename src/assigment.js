import React, { useState } from 'react';
import Child from './child';

const Assigment = (props) => {
  const [state, setState] = useState({
   isLoading: 'true',
 });

const {isLoading} = state;
 return (
   <div>
     <div>{props.name}</div>
     <div>{props.age}</div>
     {isLoading ? 'Wolcome' : 'Please try again'}
     <Child setState={setState} />
   </div>
 );
};

export default Assigment;