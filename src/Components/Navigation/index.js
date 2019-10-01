import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div className="navigation">
                    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

                    <label for="navi-toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>

                    <div className="navigation__background">&nbsp;</div>

                    <nav className="navigation__nav">
                        <ul className="navigation__list">
                            <form action="/" className="nform" method="post" enctype="multipart/form-data">

                                <div className="nform__group">

                                    <select className="nform__input" name="type">
                                        <option selected disabled>select type</option>
                                        <option value="NATURAL">NATURAL</option>
                                        <option value="RAIN">RAIN</option>
                                        <option value="FOREST">FOREST</option>
                                        <option value="FLOWER">FLOWER</option>
                                        <option value="MOUNTAIN">MOUNTAIN</option>
                                        <option value="OCEAN">OCEAN</option>
                                        <option value="ORCHARD">ORCHARD</option>
                                        <option value="CITY">CITY</option>
                                        <option value="CARS">CARS</option>
                                        <option value="PAINTING">PAINTING</option>
                                        <option value="WAVE">WAVE</option>
                                        <option value="PANORAMA">PANORAMA</option>
                                        <option value="WILDLIFE">WILDLIFE</option>
                                        <option value="WATERFALL">WATERFALL</option>
                                        <option value="DARK">DARK</option>
                                    </select>


                                </div>

                                <div className="nform__group">

                                    <input type="text" className="nform__input" placeholder="keyword" id="name" name="keyword" required />
                                    <label for="name" className="nform__label">keyword</label>


                                </div>

                                <div className="nform__group">

                                    <div className="nform__input">
                                        <div className="nform__group--upload">

                                            <input className="nform__upload" type="file" name="image" required />
                                            <span>👆🏻 👆🏻 👆🏻 👆🏻 👆🏻</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="nform__group">
                                    <div className="row">
                                        <button className="btn btn--blue btn--nav" type="submit">
                                            SAV
                        </button>

                                        <button className="btn btn--pink btn--nav" type="reset">
                                            RES
                        </button>
                                    </div>
                                </div>
                            </form>
                        </ul>
                    </nav>
                </div>

            </React.Fragment >
        );
    }
}

export default Navigation;