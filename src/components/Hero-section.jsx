import heroImg from '../assets/Food_collectionbanner.avif'

function Hero_section() {
    return (
        <>
            <section className='hero-section '>

                <div className='hero-contain animate__bounceInLeft animate__animated '>
                    <h1>Healthy Food For Wealthy <br /> Mood</h1>
                    <h3>Upto 20% OFF</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, necessitatibus! Non est quam magnam </p>
                    <a href="#menu">
                        <button className='pay-btn'>
                            Click Me</button>
                    </a>
                </div>
                <div className='hero-img animate__bounceInRight  animate__animated '>
                    <img src={heroImg} alt="" />
                </div>
            </section>

        </>
    )
}

export default Hero_section