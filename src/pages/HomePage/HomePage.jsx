import './HomePage.css'


const HomePage = () => {

    return (

        <>

            <div className='home-page'>
                <button >Looking for adventure ?</button>
            </div>
            <div className='home-page2'>

            </div>
            <div className='home-page3'>

            </div>
            <div className='home-page4'>

            </div>

            <footer>

                <ul className="menu">
                <span className='copy-right'>© All right reserved</span>
                    <li>
                        <a href="/about-us">
                            About Us
                            <span className="border border-top"></span>
                            <span className="border border-right"></span>
                            <span className="border border-bottom"></span>
                            <span className="border border-left"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/privacy">
                            Privacy Policy
                            <span className="border border-top"></span>
                            <span className="border border-right"></span>
                            <span className="border border-bottom"></span>
                            <span className="border border-left"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            Contact
                            <span className="border border-top"></span>
                            <span className="border border-right"></span>
                            <span className="border border-bottom"></span>
                            <span className="border border-left"></span>
                        </a>
                    </li>

                </ul>

            </footer>
        </>



    )
}
export default HomePage