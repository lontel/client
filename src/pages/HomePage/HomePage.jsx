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
                        <Link to={'/about-us'}>
                            About
                            <svg width="24" height="24"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" /></svg>
                        </Link>
                    </li>
                    <li>
                        <a href="#0">
                            Projects
                            <svg width="24" height="24"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                            Clients
                            <svg width="24" height="24"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                            Contact
                            <svg width="24" height="24"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" /></svg>
                        </a>
                    </li>
                </ul>
            </footer>
        </>



    )
}
export default HomePage