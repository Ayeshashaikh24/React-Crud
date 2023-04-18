import React from 'react'
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';

function Wrapper(props) {
  return (
    <>
          <Nav />
           <div class="wrraper">
                <div class="left-content">
                <Sidebar />
                </div>
                <div class="right-content">
                {props.children}
                </div>
            </div> 
    </>

  )
}

export default Wrapper