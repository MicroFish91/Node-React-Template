import React from 'react';
import { Link } from 'react-router-dom';

const BaseLayout = (props) => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home Page</Link> <br />
          <Link to="/hooks">Hook Demo</Link> <br />
          <Link to="/class">Class Demo</Link> <br />
        </li>
      </ul>
      {props.children}
    </>
  )
}

export default BaseLayout;
