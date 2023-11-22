import HeroImg from "../images/home-page/hero-img.jpg"

const Hero = () => {
    return (
        <div className="hero-component">
            <img 
                src={HeroImg}
                alt="hero"
                className="hero-image"
            />
            
            <div className="hero-text-main">
                <h1>THE MIXUP 2024</h1>
            </div>
            
            <div className="hero-text-sub">
                <h2>January 15-17</h2> 
                <h2>Manchester UK</h2>
            </div>
        </div>
    )
}

export default Hero