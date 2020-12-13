import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pokemon</a>
                <button className="navbar-toggler" type="button" aria-controls="navarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current="page">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
