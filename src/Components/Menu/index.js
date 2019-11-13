import React, { Fragment } from 'react';

const Menu = () => {
    return (
        <Fragment>
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>
        </Fragment>
    );
}

export default Menu;