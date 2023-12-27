import React,{useState} from 'react';

const User = (props) => {
  const [count]=useState(0);
  return (
    <div className='user-card'>
    <h1>Count={count}</h1>
    <h2>Name: {props.name}</h2>
    <h3>Location: {props.location}</h3>
    <h4>Conatct: @asfa.sarah</h4>
      
    </div>
  )
}

export default User;
