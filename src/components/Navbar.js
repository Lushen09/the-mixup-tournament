import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    // const [nav, setNav] = useState(false)

    const openNav = () => {
        document.getElementById("myNav").style.width = "100%"
    }

    const closeNav = () => {
        document.getElementById("myNav").style.width = "0"
    }

    return (
        <div>
            {/* mobile */}

            <div id="myNav" className="overlay" >
                <div className="closeBtn" onClick={closeNav}>&times;</div>

                <div className="overlay-content">
                    <Link onClick={closeNav} to="#">The Mixup</Link>
                    <Link onClick={closeNav} to="#">About</Link>
                    <Link onClick={closeNav} to="#">Lineup</Link>
                    <Link onClick={closeNav} to="#">Registration</Link>
                    <Link onClick={closeNav} to="#">Merch</Link>
                </div>
            </div>
            <div className="menu-header">
                <div className="menu-title">The Mixup</div>
                <div className="navButton" onClick={openNav}>&#9776;</div>
            </div>

        </div>

    )
}

export default Navbar