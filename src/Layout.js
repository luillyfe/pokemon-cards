import React from 'react';

import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({children}) => {
    return (
        <div className="container">
            <Header/>
            {children}
        </div>
    );
};

export default Layout;
