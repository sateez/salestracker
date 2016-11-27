import React from 'react';
import {Link} from 'react-router';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div className='col-sm-12 about-us'>
      <h2 className="alt-header">About</h2>
      <p>
       Sample sales tracking application with React and redux technlogies.
        <br />
        Included toastr notifications for easy understanding of action acheived.
      </p>
      <p>
        <Link to="/">Goto Dashboard</Link>
      </p>
    </div>
  );
};

export default AboutPage;
