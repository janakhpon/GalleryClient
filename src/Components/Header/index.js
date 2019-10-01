import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <div className="nav__sort">
                        <div className="droptype">
                            <button className="droptype__btn">
                                Type&nbsp;:
            <i className="fa fa-caret-down"></i>
                            </button>

                            <div className="droptype__content">

                                <a href="/NATURAL">NATURAL</a>
                                <a href="/RAIN">RAIN</a>
                                <a href="/ROREST">FOREST</a>
                                <a href="/FLOWER">FLOWER</a>
                                <a href="/MOUNTAIN">MOUNTAIN</a>
                                <a href="/OCEAN">OCEAN</a>
                                <a href="/ORCHARD">ORCHARD</a>
                                <a href="/CITY">CITY</a>
                                <a href="/CARS">CARS</a>
                                <a href="/PAINTING">PAINTING</a>
                                <a href="/WAVE">WAVE</a>
                                <a href="/PANORAMA">PANORAMA</a>
                                <a href="/WILDLIFE">WILDLIFE</a>
                                <a href="/WATERFALL">WATERFALL</a>
                                <a href="/DARK">DARK</a>
                                <a href="/DATE">DATE</a>


                            </div>
                        </div>
                    </div>

                    <div className="nav__search">
                        <div className="nav__search--form">
                            <form action="/keyword/sunset" method="post">
                                <input type="text" className="searchbar" name="keyword1" placeholder="Searching for keywords?" onkeypress="callEnter(event)" />

                            </form>
                        </div>
                    </div>

                </header>
            </React.Fragment >
        );
    }
}

export default Header;