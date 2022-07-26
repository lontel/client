import './HomePage.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'



const HomePage = () => {



    return (

        <>

            <div className='home-page'>
                <h1>Bike Connect</h1>
                <p>The social network of cyclists</p>


            </div>


            <footer>
                <ul className="menu">
                    <li>
                        <a href="#0">
                            About
                            <span class="border border-top"></span>
                            <span class="border border-right"></span>
                            <span class="border border-bottom"></span>
                            <span class="border border-left"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                            Privacy Policy
                            <span class="border border-top"></span>
                            <span class="border border-right"></span>
                            <span class="border border-bottom"></span>
                            <span class="border border-left"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                            Client
                            <span class="border border-top"></span>
                            <span class="border border-right"></span>
                            <span class="border border-bottom"></span>
                            <span class="border border-left"></span>
                        </a>
                    </li>

                </ul>

            </footer>
        </>



    )
}
export default HomePage