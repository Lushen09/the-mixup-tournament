import DevilJin from "../images/home-page/devil-jin.webp"


const Hero = () => {
    return (
        <div className="hero-component" style={{textAlign: "center"}}>
            <img
                src={DevilJin}
                alt="hero"
                className="img-style"
            />
            <div className="hero-text">
                <div className="hero-text-main"><p>The Mixup 2024</p></div>
                <div className="hero-text-sub"><p>Manchester, UK</p></div>
                <div className="hero-text-sub1"><p>17th January</p></div>
            </div>
        </div>
    )
}

export default Hero