import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../actions/templateActions';

const Hooks = () => {
  // Pulling from Redux Global State
  const counter = useSelector(state => state.template.counter);
  const dispatch = useDispatch();
  // Local State
  const [title, setTitle] = useState("");

  /* ------------------

  The majority of effects don’t need to happen synchronously. 
  In the uncommon cases where they do, there is a separate 
  useLayoutEffect Hook with an API identical to useEffect.

  ? componentDidMount()
  useEffect(() => {
    * code goes here
  }, []);

  ? componentDidUpdate()
  useEffect(() => {
    * code goes here
  }, [title]);

  ? componentWillUnmount()
  useEffect(() => {
    return () => {
      * code goes here
    };
  }, []);

  ? componentDidMount() && componentDidUpdate() && componentWillUnmount
  useEffect(() => {
    * code goes here
  });
  
  --------------------- */

  return (
    <>
      <h1>{title}</h1>
      <h3>{counter}</h3>

      <button onClick={() => dispatch(increment(4))}>Click to Update Global State</button>
    </>
  )
}

export default Hooks;
