import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <header className="site-navbar py-3" role="banner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-6 col-xl-2" data-aos="fade-down">
                                <h1 className="mb-0"><Link to="/" className="text-black h2 mb-0">GALLERY</Link></h1>
                            </div>
                            <div className="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
                                <nav className="site-navigation position-relative text-right text-lg-center" role="navigation">
                                    <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                        <li className="active"><Link to="/">Home</Link></li>
                                        <li className="has-children">
                                            <a href="/#">Gallery</a>
                                            <ul className="dropdown">
                                                <li><Link to="/Wallpapers">Wallpapers</Link></li>
                                                <li><Link to="/Topic">Topic</Link></li>
                                                <li className="has-children">
                                                    <a href="/#">New</a>
                                                    <ul className="dropdown">
                                                        <li><Link to="/New-Wallpaper"> New-Wallpaper </Link></li>
                                                        <li><Link to="/New-Type"> New-Type </Link></li>
                                                        <li><Link to="/New-Tag"> New-Tag </Link></li>
                                                        <li><Link to="/New-Device"> New-Device </Link></li>
                                                        <li><Link to="/New-Profile"> New-Profile </Link></li>
                                                    </ul>
                                                </li>
                                                <li className="has-children">
                                                    <a href="/#">Sort</a>
                                                    <ul className="dropdown">
                                                        <li><Link to="/Sort-Rate"> Sort By Rating </Link></li>
                                                        <li><Link to="/Sort-Type"> Sort By Type </Link></li>
                                                        <li><Link to="/Sort-Tag"> Sort By Tag </Link></li>
                                                        <li><Link to="/Sort-Date"> Sort By Date </Link></li>
                                                        <li><Link to="/Sort-ID"> Sort By ID </Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="/#">Auth</a>
                                            <ul className="dropdown">
                                                <li><Link to="/My-Account"> My Account </Link></li>
                                                <li><Link to="/Auth-Signup"> Auth-Signup </Link></li>
                                                <li><Link to="/Auth-Signin"> Auth-Signin </Link></li>
                                                <li><Link to="/Auth-Admin"> Auth-Admin </Link></li>
                                                <li><Link to="/Auth-Type"> Auth-Type </Link></li>
                                                <li><Link to="/Auth-Tag"> Auth-Tag </Link></li>
                                                <li><Link to="/Auth-Device"> Auth-Device </Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="/#">Languages</a>
                                            <ul className="dropdown">
                                                <li><a href='/#'> Use Burmese </a></li>
                                                <li><a href='/#'>Use English </a></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="/#">Themes</a>
                                            <ul className="dropdown">
                                                <li><a href='/#'> Light Mode </a></li>
                                                <li><a href='/#'>Dark Mode </a></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="/#"> Info </a>
                                            <ul className="dropdown">
                                                <li><Link to="/Info-About"> About </Link></li>
                                                <li><Link to="/Info-Contact"> Contact </Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-6 col-xl-2 text-right" data-aos="fade-down">
                                <div className="d-none d-xl-inline-block">
                                    <ul className="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
                                        <li>
                                            <a href="/" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                                        </li>
                                        <li>
                                            <a href="/" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                                        </li>
                                        <li>
                                            <a href="/" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                                        </li>
                                        <li>
                                            <a href="/" className="pl-3 pr-3"><span className="icon-youtube-play"></span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{ position: 'relative', top: '3px' }}><a href="/" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>
                            </div>
                        </div>
                    </div>
                </header>
            </Fragment>
        );
    }
}
export default Header;