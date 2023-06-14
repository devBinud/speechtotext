import React from 'react';
import './Layout.css';
import Main from '../main/Main';


const Layout = () => {
  return (
    <>
     <div className="layout-wrapper">
        <div className="container">
           <div className="row">
             <div className="col-md-12 ">
                <div className="layout-wrapper-middle">
                    <div className="text-to-speech-wrapper">
                        <Main/>
                    </div>
                </div>
             </div>
           </div>
        </div>
     </div>
    
    </>
  )
}

export default Layout