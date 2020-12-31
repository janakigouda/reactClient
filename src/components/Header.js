import React, {useState} from 'react';

function Header() {
    const [active, setActive] = useState(false);
    return (
        <header>
            <nav>
                <div id="menuToggle" className="icon" onClick={() => setActive(!active)}><i className="fas fa-bars"></i></div>
                <div className="logo"><h1>Cows On Cloud</h1></div>
                <div className={active ? "left-nav open" : "left-nav"}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Events">Event</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;