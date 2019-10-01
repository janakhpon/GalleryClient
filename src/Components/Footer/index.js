import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="sock">

                    <div className="footer">
                        <div className="footer__big">

                            <div className="footer__big--left">
                                <h4>About Us</h4>
                                <p> Greentech Innovation Group is a fast growing software company of Myanmar founded by Engineering
                Students in 2017,September 22.</p>
                            </div>
                            <div className="footer__big--right">
                                <h4>Contact us</h4>
                                <div className="contact_info">
                                    <p>
                                        <span> Address :</span> No.82, Ngantae Ward, Mawlamyine Township, Myanmar </p>
                                    <p><span> Phone :</span> +95 255809072,255809073</p>
                                    <p>
                                        <span> Email : </span> greentechinnovator@gmail.com,gtgmyanmar@gmail.com  </p>
                                </div>
                            </div>



                        </div>

                        <div className="footer__small">
                            <p>Galarie is the proud work of GREENTECH INNOVATION GROUP, MYANMAR LAND </p>
                        </div>
                    </div>


                </div>

            </React.Fragment >
        );
    }
}

export default Footer;