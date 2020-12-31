import React from 'react';

function Sidebar(){
    return(
        <div className="side-nav">
            <div className="side-bar">
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="#Events">Events</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;