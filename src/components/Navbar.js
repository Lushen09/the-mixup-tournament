import { useState, useEffect } from 'react';
import "../index.css";


const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    useEffect(() => {
      const handleWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
      };

      window.addEventListener('resize', handleWidth);
    
      return () => {
        window.removeEventListener('resize', handleWidth);
      }
    }, []);
    


    return (
        <div>
            <nav className={scrollPosition < 1 ? 'navbar fixed-top navbar-expand-md navbar-dark bg-tranparent' : 'navbar fixed-top navbar-expand-md navbar-light bg-light'}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{fontFamily: 'Yellowtail', fontSize: '30px'}}>The Mixup</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel" style={{fontFamily: 'Yellowtail', fontSize: '30px'}}>The Mixup</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" className={screenWidth < 767 ? 'offCanvas-black navbar-nav justify-content-end flex-grow-1 pe-3' : 'navbar-nav justify-content-end flex-grow-1 pe-3'} >
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#lineup">Lineup</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#registration">Registration</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#schedule">Schedule</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#faq">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar