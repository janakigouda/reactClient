import React from'react';

function Mainbody(){
    return(
        <div className="main-body">
            <div id="About" className="about">
                <h3>About</h3>
                <p>The program, called Cows to Cloud, uses cloud computing to notify thousands of family farmers throughout the state of Maharashtra about the health and breeding potential of their cows. The technology is helping to improve the well-being of those cows and the quality of milk products, which in turn is helping to improve the finances of farmers and boosting the education of their children.</p>
            </div>
            <div id="Contact" className="contact">
                <h3>Contact</h3>
                <div className="address">
                    <h4>Hanuman Nagar</h4>
                    <h5>Hindwadi Belgaum</h5>
                    <h6>karnatak</h6>
                    <p>590003</p>
                </div>
            </div>
            <div id="Events" className="events">
                <h3>Events</h3>
                <div className="card">
                    <div>Solding cows</div>
                </div>
            </div>
        </div>
    );
}
export default Mainbody;